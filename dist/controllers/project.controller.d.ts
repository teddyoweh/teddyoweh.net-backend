/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProjectService } from '../services/project.service';
import { Request } from 'express';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    findAll(request: Request): Promise<{
        tags: (import("mongoose").Document<unknown, {}, {
            date: Date;
            tag?: string;
        }> & Omit<{
            date: Date;
            tag?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        projects: (import("mongoose").FlattenMaps<{
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
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    addProject(body: any): object;
    updateProject(body: any): Promise<import("mongoose").Document<unknown, {}, {
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
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteProject(body: any): Promise<boolean>;
}
