import { projects,tags } from "./data";
import {ProjectModel} from './models/project.model'
import {ProjectTagsModel} from './models/ProjectTags.model'

const Tags = new ProjectTagsModel().tag()
const Project = new ProjectModel().project()


 ;

async function populateDatabase() {
 
    
    const existingProjectsCount = await Project.countDocuments();
    const existingTagsCount = await Tags.countDocuments();

    if (existingProjectsCount === 0 && existingTagsCount === 0) {
      // Populate projects
      for (const projectData of projects) {
        const project = new Project(projectData);
        await project.save();
        console.log(`Saved project: ${project.title}`);
      }

      // Populate tags
      for (const tagData of tags) {
        const tag = new Tags({ tag: tagData });
        await tag.save();
        console.log(`Saved tag: ${tag.tag}`);
      }

      console.log('Database populated successfully!');
    } else {
      console.log('Database is already populated. Skipping population.');
    }

   
}
export { populateDatabase}
