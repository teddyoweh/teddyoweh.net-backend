/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {ViewsModel} from '../models/view.model'
const Views = new ViewsModel().view()
@Injectable()
export class ViewService {
  constructor(@InjectModel('views') private viewsModel: Model<ViewsModel>) {}

  getHello(): string {
    return 'Hello World!';
  }
  addView(body):object{
    console.log(body)
    const newView = new Views({
      
        ip: body.ip,
        userdata: body.userdata,
        pageviewed: body.pageviewed,
        viewedno: body.viewedno,
        browser: body.browser,
        operatingSystem: body.operatingSystem,
        date: body.date,
        browserid:body.browserid
    });
    newView.save();
    return {};
  }
  async getNewViews(): Promise<ViewsModel[]> {
    const newViews = await this.viewsModel.find({ viewedno: 1 }).exec();
    return newViews;
  }

}
