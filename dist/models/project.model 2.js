"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
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
    visible: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Project = mongoose_1.default.model('Project', ProjectSchema);
class ProjectModel {
    project() {
        return Project;
    }
}
exports.ProjectModel = ProjectModel;
//# sourceMappingURL=project.model.js.map