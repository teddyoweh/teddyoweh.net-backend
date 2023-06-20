"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const project_model_1 = require("../models/project.model");
const ProjectTags_model_1 = require("../models/ProjectTags.model");
const Project = new project_model_1.ProjectModel().project();
const Tags = new ProjectTags_model_1.ProjectTagsModel().tag();
let ProjectService = class ProjectService {
    async getLanding() {
        const tags = await Tags.find();
        const projects = await Project.find();
        return { tags, projects };
    }
    addProject(body) {
        console.log(body);
        const newProject = new Project({
            ip: body.ip,
            userdata: body.userdata,
            pageviewed: body.pageviewed,
            viewedno: body.viewedno,
            browser: body.browser,
            operatingSystem: body.operatingSystem,
            date: body.date,
            browserid: body.browserid
        });
        newProject.save();
        return {};
    }
    async updateProject(projectId, updateData) {
        try {
            const project = await Project.findByIdAndUpdate(projectId, { $set: updateData }, { new: true });
            return project;
        }
        catch (error) {
            throw new Error('Failed to update project.');
        }
    }
    async deleteProject(projectId) {
        try {
            await Project.findByIdAndRemove(projectId);
            return true;
        }
        catch (error) {
            throw new Error('Failed to delete project.');
        }
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)()
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map