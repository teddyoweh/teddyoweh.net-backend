/* eslint-disable prettier/prettier */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 

const ProjectTagsSchema = new Schema({
    tag:{
        type:String
    },
    date: {
        type: Date,
        default: Date.now
    },


});

const ProjectTags = mongoose.model('ProjectTags',ProjectTagsSchema);
export class ProjectTagsModel{
    tag(){
        return ProjectTags
    }
}
