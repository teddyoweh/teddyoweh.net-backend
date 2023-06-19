import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { Request } from 'express'
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/')
  findAll(@Req() request: Request) {
    console.log(request.body);
    return this.projectService.getLanding();
  }
  @Post('/add')
  addProject(@Body() body: any) {
    return this.projectService.addProject(body);
  }
  @Post('/update')
  updateProject(@Body() body: any) {
    return this.projectService.updateProject(body.id,body.data);
  }
  @Post('/delete')
  deleteProject(@Body() body: any) {
    return this.projectService.deleteProject(body.id);
  }

}

 