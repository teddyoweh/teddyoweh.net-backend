/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {ProjectModel} from '../models/project.model'
import { ProjectTagsModel } from 'src/models/ProjectTags.model';
const Project = new ProjectModel().project()
const Tags = new ProjectTagsModel().tag()
@Injectable()
export class ProjectService {
 
  async getLanding(){
    const tags = await Tags.find().distinct('tag').lean();
    const projects = await Project.find().lean();

    return { tags, projects };
   
  }
  addProject(body):object{
    console.log(body)
    const newProject = new Project({
      
        ip: body.ip,
        userdata: body.userdata,
        pageviewed: body.pageviewed,
        viewedno: body.viewedno,
        browser: body.browser,
        operatingSystem: body.operatingSystem,
        date: body.date,
        browserid:body.browserid
    });
    newProject.save();
    return {};
  }
  async updateProject(projectId, updateData) {
    try {
      const project = await Project.findByIdAndUpdate(
        projectId,
        { $set: updateData },
        { new: true }
      );
      return project;
    } catch (error) {
      throw new Error('Failed to update project.');
    }
  }

  async deleteProject(projectId) {
    try {
      await Project.findByIdAndRemove(projectId);
      return true;
    } catch (error) {
      throw new Error('Failed to delete project.');
    }
  }
   

}
