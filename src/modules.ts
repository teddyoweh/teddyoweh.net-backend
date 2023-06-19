import { Module } from '@nestjs/common';
 
import { ViewsModule } from './module/views.module';
import { HomeModule } from './module/home.module';
import { ProjectModule } from './module/project.module';
@Module({
  imports: [
 
    ViewsModule,
    HomeModule,
    ProjectModule
 

  ],
})
export class APIModules {}
