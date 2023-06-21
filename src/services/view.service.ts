/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {ViewsModel} from '../models/view.model'
const Views = new ViewsModel().view()
function parseDate(date){
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}
@Injectable()
export class ViewService {
 
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

  async getUserView(body){
    const userviews = await Views.find({
      browserid:body.id
    })

    const todayDate = parseDate(new Date())
    const hashmap = {
    
    }
    userviews.forEach((view,index)=>{

 
        if(hashmap[parseDate(view.date)]==undefined){
          hashmap[parseDate(view.date)] = [view]
        }else{
          hashmap[parseDate(view.date)].push(view)
        }
        
    
    })
    return hashmap
  }
   

}

