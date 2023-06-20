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
function calculateViewsStatistics(viewsData) {
    const currentDate = new Date();
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
    const totalPercentageChange = calculatePercentageChange(todayViews, totalViews);
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
let HomeService = class HomeService {
    getHello() {
        return 'Hello World!';
    }
    async getInitial() {
        const viewsData = await View.find();
        const ViewStats = calculateViewsStatistics(viewsData);
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
            return Object.assign(Object.assign({}, ViewStats), finalHash);
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