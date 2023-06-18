/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {ViewsModel} from '../models/view.model'
const View = new ViewsModel().view()
@Injectable()
export class HomeService {
  getHello(): string {
    return 'Hello World!';
  }
  async getInitial() {
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
  
      return {
        todaysViews: todaysViews,
        totalViewsNo: totalViewsNo,
        monthViewsNo: monthViewsNo,
        yesterdayViews: yesterdayViews,
        dayBeforeYesterdayViews: {
          day: dayBeforeYesterday.toISOString(),
          views: dayBeforeYesterdayViews
        },
        daysOfWeek: daysOfWeek,
        today: today,
        timeHashMap: timeHashMap
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  
}
 