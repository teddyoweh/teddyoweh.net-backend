import mongoose from 'mongoose';
export declare class ProjectTagsModel {
    tag(): mongoose.Model<{
        date: Date;
        tag?: string;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        date: Date;
        tag?: string;
    }> & Omit<{
        date: Date;
        tag?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        date: Date;
        tag?: string;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        date: Date;
        tag?: string;
    }>> & Omit<mongoose.FlatRecord<{
        date: Date;
        tag?: string;
    }> & {
        _id: mongoose.Types.ObjectId;
    }, never>>>;
}
