import mongoose from 'mongoose';
export declare class ProjectModel {
    project(): mongoose.Model<{
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    }> & Omit<{
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    }>> & Omit<mongoose.FlatRecord<{
        website: string;
        date: Date;
        languages: string[];
        tags: string[];
        visible: boolean;
        sourcecode?: string;
        title?: string;
        description?: string;
        long_description?: string;
        slug?: string;
        pypipackage?: string;
        documentation?: string;
    }> & {
        _id: mongoose.Types.ObjectId;
    }, never>>>;
}
