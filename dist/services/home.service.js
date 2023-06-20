"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const view_model_1 = require("../models/view.model");
const View = new view_model_1.ViewsModel().view();
function calculatePercentageChange(presentBoutNumber, pastBoutNumber) {
    const percentageChange = ((presentBoutNumber - pastBoutNumber) / pastBoutNumber) * 100;
    const status = presentBoutNumber < pastBoutNumber ? 'decrease' : 'increase';
    return {
        percentage: percentageChange,
        status: status,
    };
}
function calculatePoints(viewsData) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDay();
    const monthsPoints = {};
    const daysPoints = {};
    const todayPoints = {};
    for (let month = 0; month < 12; month++) {
        const monthViews = viewsData.filter((view) => view.date.getFullYear() === currentYear && view.date.getMonth() === month).length;
        monthsPoints[new Date(currentYear, month).toLocaleString('default', { month: 'long' })] = monthViews;
    }
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day = 0; day < 7; day++) {
        const dayViews = viewsData.filter((view) => view.date.getDay() === day).length;
        daysPoints[dayNames[day]] = dayViews;
    }
    const hoursPoints = {
        "0:00 - 2:00": 0,
        "2:00 - 4:00": 0,
        "4:00 - 6:00": 0,
        "6:00 - 8:00": 0,
        "8:00 - 10:00": 0,
        "10:00 - 12:00": 0,
        "12:00 - 14:00": 0,
        "14:00 - 16:00": 0,
        "16:00 - 18:00": 0,
        "18:00 - 20:00": 0,
        "20:00 - 22:00": 0,
        "22:00 - 24:00": 0
    };
    viewsData.forEach((view) => {
        const viewHour = view.date.getHours();
        if (viewHour >= 0 && viewHour < 2) {
            hoursPoints["0:00 - 2:00"] += 1;
        }
        else if (viewHour >= 2 && viewHour < 4) {
            hoursPoints["2:00 - 4:00"] += 1;
        }
        else if (viewHour >= 4 && viewHour < 6) {
            hoursPoints["4:00 - 6:00"] += 1;
        }
        else if (viewHour >= 6 && viewHour < 8) {
            hoursPoints["6:00 - 8:00"] += 1;
        }
        else if (viewHour >= 8 && viewHour < 10) {
            hoursPoints["8:00 - 10:00"] += 1;
        }
        else if (viewHour >= 10 && viewHour < 12) {
            hoursPoints["10:00 - 12:00"] += 1;
        }
        else if (viewHour >= 12 && viewHour < 14) {
            hoursPoints["12:00 - 14:00"] += 1;
        }
        else if (viewHour >= 14 && viewHour < 16) {
            hoursPoints["14:00 - 16:00"] += 1;
        }
        else if (viewHour >= 16 && viewHour < 18) {
            hoursPoints["16:00 - 18:00"] += 1;
        }
        else if (viewHour >= 18 && viewHour < 20) {
            hoursPoints["18:00 - 20:00"] += 1;
        }
        else if (viewHour >= 20 && viewHour < 22) {
            hoursPoints["20:00 - 22:00"] += 1;
        }
        else if (viewHour >= 22 && viewHour <= 23) {
            hoursPoints["22:00 - 24:00"] += 1;
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
    const currentDate = new Date(currentDate2.toLocaleString('en-US', options));
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
    const totalPercentageChange = calculatePercentageChange(totalViews, totalViews - todayViews);
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
        date: currentDate
    };
}
let HomeService = class HomeService {
    getHello() {
        return 'Hello World!';
    }
    async getInitial() {
        const viewsData = await View.find();
        const ViewStats = calculateViewsStatistics(viewsData);
        const ViewPoints = calculatePoints(viewsData);
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
            const finalHash = {
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
            return Object.assign(Object.assign(Object.assign({}, ViewPoints), ViewStats), finalHash);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map