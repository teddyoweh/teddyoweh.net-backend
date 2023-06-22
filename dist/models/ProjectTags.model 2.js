"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTagsModel = void 0;
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
const ProjectTagsSchema = new Schema({
    tag: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const ProjectTags = mongoose_1.default.model('ProjectTags', ProjectTagsSchema);
class ProjectTagsModel {
    tag() {
        return ProjectTags;
    }
}
exports.ProjectTagsModel = ProjectTagsModel;
//# sourceMappingURL=ProjectTags.model.js.map