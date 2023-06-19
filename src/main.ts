/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';

import { APIModules } from './modules';
import { Env } from './env';
import mongoose from 'mongoose';
import io from 'socket.io';
import os, {platform } from 'os'
import { ViewsModel } from './models/view.model';
const env = new Env();
const Views = new ViewsModel().view()

async function bootstrap() {
  const app = await NestFactory.create(APIModules);
 
  mongoose.connect(env.env().URI).then(
    () => {
      
      console.log('Database is connected');
    },
    (err) => {
      console.log('Can not connect to the database' + err);
    },
  );

  app.enableCors();
   
 
  const server = await app.listen(env.env().PORT)
  const address = server.address();
  const host = address.address;
  const port = address.port;

  console.log(`Server running at http://${env.ip()}:${port}`);
 

}
bootstrap();
