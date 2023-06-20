/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {ViewsModel} from '../models/view.model'
const View = new ViewsModel().view()
function calculatePercentageChange(presentBoutNumber, pastBoutNumber) {
  const percentageChange = ((presentBoutNumber - pastBoutNumber) / pastBoutNumber) * 100;
  const status = presentBoutNumber < pastBoutNumber ? 'decrease' : 'increase';
  
  return {
    percentage: percentageChange,
    status: status,
  };
}
function calculateViewsStatistics(viewsData) {
  const currentDate2 = new Date();
 
const options = {
  timeZone: 'America/Los_Angeles',
};

const currentDate = new Date(currentDate2.toLocaleString('en-US', options))
  const todayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const todayEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
  const thisWeekStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
  const thisWeekEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
  const thisMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const thisMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const lastDayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
  const lastDayEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const lastWeekStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() - 7);
  const lastWeekEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
  const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

  const totalViews = viewsData.length;
  const todayViews = viewsData.filter((view) => view.date >= todayStart && view.date < todayEnd).length;
  const thisWeekViews = viewsData.filter((view) => view.date >= thisWeekStart && view.date < thisWeekEnd).length;
  const thisMonthViews = viewsData.filter((view) => view.date >= thisMonthStart && view.date < thisMonthEnd).length;
  
  const dailyPercentageChange = calculatePercentageChange(todayViews, viewsData.filter((view) => view.date >= lastDayStart && view.date < lastDayEnd).length);
  const weeklyPercentageChange = calculatePercentageChange(thisWeekViews, viewsData.filter((view) => view.date >= lastWeekStart && view.date < lastWeekEnd).length);
  const monthlyPercentageChange = calculatePercentageChange(thisMonthViews, viewsData.filter((view) => view.date >= lastMonthStart && view.date < lastMonthEnd).length);
  const totalPercentageChange = calculatePercentageChange(totalViews,totalViews-todayViews);
  
  return {
    totalTimeViews: totalViews,
    todayTotalViews: todayViews,
    monthlyTotalViews: thisMonthViews,
    weeklyTotalViews: thisWeekViews,
    monthlyViews: thisMonthViews,
    dailyPercentageChange,
    weeklyPercentageChange,
    monthlyPercentageChange,
    totalPercentageChange,
  };
}

@Injectable()
export class HomeService {
  getHello(): string {
    return 'Hello World!';
  }
  async getInitial() {
    const viewsData = await View.find()
    const ViewStats = calculateViewsStatistics(viewsData)
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);  
  
      const todaysViews = await View.find({ date: { $gte: today } }).exec();
      const totalViewsNo = await View.countDocuments().exec();
  
    
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthViewsNo = await View.countDocuments({ date: { $gte: startOfMonth } }).exec();
  
 
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayViews = await View.find({
        date: { $gte: yesterday, $lt: today }
      }).exec();
  
 
      const dayBeforeYesterday = new Date(yesterday);
      dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 1);
      const dayBeforeYesterdayViews = await View.find({
        date: { $gte: dayBeforeYesterday, $lt: yesterday }
      }).exec();
 
      const daysOfWeek = {};
      let currentDate = new Date(today);
      for (let i = 0; i < 7; i++) {
        const currentViews = await View.find({
          date: { $gte: currentDate, $lt: today }
        }).exec();
        daysOfWeek[currentDate.toISOString()] = currentViews;
        currentDate.setDate(currentDate.getDate() - 1);
      }
  
  
      const timeHashMap = {};
      let currentTime = new Date();
      currentTime.setMinutes(0, 0, 0);  
      for (let i = 0; i < 12; i++) {
        const startTime = new Date(currentTime);
        startTime.setHours(startTime.getHours() - 2);
        const timeViews = await View.find({
          date: { $gte: startTime, $lt: currentTime }
        }).exec();
        timeHashMap[currentTime.toISOString()] = timeViews;
        currentTime.setHours(currentTime.getHours() - 2);
      }
  
      const finalHash =  {
        todaysViews: todaysViews.reverse(),
        totalViewsNo: totalViewsNo,
        monthViewsNo: monthViewsNo,
        yesterdayViews: yesterdayViews.reverse(),
        dayBeforeYesterdayViews: {
          day: dayBeforeYesterday.toISOString(),
          views: dayBeforeYesterdayViews.reverse()
        },
        daysOfWeek: daysOfWeek,
        today: today,
        timeHashMap: timeHashMap
      };
      return {...ViewStats,...finalHash}
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  
}
 