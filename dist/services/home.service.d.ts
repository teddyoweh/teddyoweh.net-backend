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
export declare class HomeService {
    getHello(): string;
    getInitial(): Promise<{
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
        totalViewsNo: number;
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
    }>;
}
