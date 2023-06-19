import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    long_description: {
        type: String,
        
    },
    slug: {
        type: String,
        
    },
    languages: {
        type: [String],
        
    },
    tags: {
        type: [String],
        
    },
    sourcecode: {
        type: String,
        
    },
    pypipackage: {
        type: String,
        
    },
    documentation: {
        type: String,
        
    },
    website: {
        type: String,
        default: null
    },
    visible:{
        type:Boolean,
        default:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', ProjectSchema);
 
export class ProjectModel{
    project(){
        return Project
    }
}
 
