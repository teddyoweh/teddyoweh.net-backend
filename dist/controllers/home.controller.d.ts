/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HomeService } from '../services/home.service';
import { Request } from 'express';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    findAll(request: Request): string;
    getInitial(request: Request): Promise<{
        todaysViews: (import("mongoose").Document<unknown, {}, {
            date: Date;
            viewedno: number;
            ip?: any;
            userdata?: any;
            pageviewed?: string;
            browser?: any;
            operatingSystem?: any;
            browserid?: string;
        }> & Omit<{
            date: Date;
            viewedno: number;
            ip?: any;
            userdata?: any;
            pageviewed?: string;
            browser?: any;
            operatingSystem?: any;
            browserid?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        monthViewsNo: number;
        yesterdayViews: (import("mongoose").Document<unknown, {}, {
            date: Date;
            viewedno: number;
            ip?: any;
            userdata?: any;
            pageviewed?: string;
            browser?: any;
            operatingSystem?: any;
            browserid?: string;
        }> & Omit<{
            date: Date;
            viewedno: number;
            ip?: any;
            userdata?: any;
            pageviewed?: string;
            browser?: any;
            operatingSystem?: any;
            browserid?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        dayBeforeYesterdayViews: {
            day: string;
            views: (import("mongoose").Document<unknown, {}, {
                date: Date;
                viewedno: number;
                ip?: any;
                userdata?: any;
                pageviewed?: string;
                browser?: any;
                operatingSystem?: any;
                browserid?: string;
            }> & Omit<{
                date: Date;
                viewedno: number;
                ip?: any;
                userdata?: any;
                pageviewed?: string;
                browser?: any;
                operatingSystem?: any;
                browserid?: string;
            } & {
                _id: import("mongoose").Types.ObjectId;
            }, never>)[];
        };
        daysOfWeek: {};
        today: Date;
        timeHashMap: {};
        totalTimeViews: any;
        todayTotalViews: any;
        monthlyTotalViews: any;
        weeklyTotalViews: any;
        monthlyViews: any;
        dailyPercentageChange: {
            percentage: number;
            status: string;
        };
        weeklyPercentageChange: {
            percentage: number;
            status: string;
        };
        monthlyPercentageChange: {
            percentage: number;
            status: string;
        };
        totalPercentageChange: {
            percentage: number;
            status: string;
        };
        date: Date;
        viewsData: any;
        monthsPoints: {};
        daysPoints: {};
        hoursPoints: {
            "0": number;
            "2": number;
            "4": number;
            "6": number;
            "8": number;
            "10": number;
            "12": number;
            "14": number;
            "16": number;
            "18": number;
            "20": number;
            "22": number;
        };
    }>;
}
