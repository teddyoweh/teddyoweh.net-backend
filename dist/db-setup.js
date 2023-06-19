"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateDatabase = void 0;
const data_1 = require("./data");
const project_model_1 = require("./models/project.model");
const ProjectTags_model_1 = require("./models/ProjectTags.model");
const Tags = new ProjectTags_model_1.ProjectTagsModel().tag();
const Project = new project_model_1.ProjectModel().project();
async function populateDatabase() {
    const existingProjectsCount = await Project.countDocuments();
    const existingTagsCount = await Tags.countDocuments();
    if (existingProjectsCount === 0 && existingTagsCount === 0) {
        for (const projectData of data_1.projects) {
            const project = new Project(projectData);
            await project.save();
            console.log(`Saved project: ${project.title}`);
        }
        for (const tagData of data_1.tags) {
            const tag = new Tags({ tag: tagData });
            await tag.save();
            console.log(`Saved tag: ${tag.tag}`);
        }
        console.log('Database populated successfully!');
    }
    else {
        console.log('Database is already populated. Skipping population.');
    }
}
exports.populateDatabase = populateDatabase;
//# sourceMappingURL=db-setup.js.map