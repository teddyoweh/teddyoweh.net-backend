import mongoose from 'mongoose';
export declare class ViewsModel {
    view(): mongoose.Model<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
        browserid?: string;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
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
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
        browserid?: string;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
        browserid?: string;
    }>> & Omit<mongoose.FlatRecord<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
        browserid?: string;
    }> & {
        _id: mongoose.Types.ObjectId;
    }, never>>>;
}
