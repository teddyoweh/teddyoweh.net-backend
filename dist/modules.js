"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIModules = void 0;
const common_1 = require("@nestjs/common");
const views_module_1 = require("./module/views.module");
const home_module_1 = require("./module/home.module");
const project_module_1 = require("./module/project.module");
let APIModules = class APIModules {
};
APIModules = __decorate([
    (0, common_1.Module)({
        imports: [
            views_module_1.ViewsModule,
            home_module_1.HomeModule,
            project_module_1.ProjectModule
        ],
    })
], APIModules);
exports.APIModules = APIModules;
//# sourceMappingURL=modules.js.map