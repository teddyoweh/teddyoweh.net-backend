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
}function calculatePoints(viewsData) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();
  
  const monthsPoints = {};
  const daysPoints = {};
  const todayPoints = {};

 

  for (let month = 0; month < 12; month++) {
    const monthViews = viewsData.filter(
      (view) => view.date.getMonth() === month
    ).length;
    const monthName = new Date(0, month).toLocaleString('default', { month: 'short' });
    monthsPoints[monthName] = monthViews;
  }


  const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let day = 0; day < 7; day++) {
    const dayViews = viewsData.filter((view) => view.date.getDay() === day).length;
    daysPoints[dayNames[day]] = dayViews;
  }
  const hoursPoints = {
    "0": 0,
    "2": 0,
    "4": 0,
    "6": 0,
    "8": 0,
    "10": 0,
    "12": 0,
    "14": 0,
    "16": 0,
    "18": 0,
    "20": 0,
    "22": 0,
  };
  
  viewsData.forEach((view) => {
    const viewHour = view.date.getHours();
    if (viewHour >= 0 && viewHour < 2) {
      hoursPoints["0"] += 1;
    } else if (viewHour >= 2 && viewHour < 4) {
      hoursPoints["2"] += 1;
    } else if (viewHour >= 4 && viewHour < 6) {
      hoursPoints["4"] += 1;
    } else if (viewHour >= 6 && viewHour < 8) {
      hoursPoints["6"] += 1;
    } else if (viewHour >= 8 && viewHour < 10) {
      hoursPoints["8"] += 1;
    } else if (viewHour >= 10 && viewHour < 12) {
      hoursPoints["10"] += 1;
    } else if (viewHour >= 12 && viewHour < 14) {
      hoursPoints["12"] += 1;
    } else if (viewHour >= 14 && viewHour < 16) {
      hoursPoints["14"] += 1;
    } else if (viewHour >= 16 && viewHour < 18) {
      hoursPoints["16"] += 1;
    } else if (viewHour >= 18 && viewHour < 20) {
      hoursPoints["18"] += 1;
    } else if (viewHour >= 20 && viewHour < 22) {
      hoursPoints["20"] += 1;
    } else if (viewHour >= 22 && viewHour <= 23) {
      hoursPoints["22"] += 1;
    }
  });
  
  
  return {
    monthsPoints,
    daysPoints,
    hoursPoints,
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
    date:currentDate,
    viewsData
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
    const ViewPoints = calculatePoints(viewsData)
    try {
      const today = new Date();
      
      const currentDate2 = new Date();
 
      const options = {
        timeZone: 'America/Los_Angeles',
      };
      
      const currentDate1 = new Date(currentDate2.toLocaleString('en-US', options))
      const todayStart = new Date(currentDate1.getFullYear(), currentDate1.getMonth(), currentDate1.getDate());
      const todayEnd = new Date(currentDate1.getFullYear(), currentDate1.getMonth(), currentDate1.getDate() + 1);
      const todaysViews =viewsData.filter((view) => view.date >= todayStart )
  
      const yesterdayDate = new Date(currentDate1);
      yesterdayDate.setDate(currentDate1.getDate() - 1);
      const yesterdayStart = new Date(yesterdayDate.getFullYear(), yesterdayDate.getMonth(), yesterdayDate.getDate());
      const yesterdayEnd = new Date(yesterdayDate.getFullYear(), yesterdayDate.getMonth(), yesterdayDate.getDate() + 1);
      const yesterdayViews = viewsData.filter((view) => view.date >= yesterdayStart && view.date < yesterdayEnd)

      const dayBeforeYesterdayDate = new Date(currentDate1);
      dayBeforeYesterdayDate.setDate(currentDate1.getDate() - 2);
      const dayBeforeYesterdayStart = new Date(dayBeforeYesterdayDate.getFullYear(), dayBeforeYesterdayDate.getMonth(), dayBeforeYesterdayDate.getDate());
      const dayBeforeYesterdayEnd = new Date(dayBeforeYesterdayDate.getFullYear(), dayBeforeYesterdayDate.getMonth(), dayBeforeYesterdayDate.getDate() + 1);
      const dayBeforeYesterdayViews = viewsData.filter((view) => view.date >= dayBeforeYesterdayStart && view.date < dayBeforeYesterdayEnd)
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthViewsNo = await View.countDocuments({ date: { $gte: startOfMonth } }).exec();
  
 
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
     
  
 
      const dayBeforeYesterday = new Date(yesterday);
      dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 1);
     
 
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
      return {...ViewPoints,...ViewStats,...finalHash}
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  
}
 