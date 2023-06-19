/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { APIModules } from './modules';
import { Env } from './env';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { ViewsModel } from './models/view.model';
import { createServer } from "http";
import { populateDatabase } from './db-setup';
const env = new Env();
const Views = new ViewsModel().view();

async function bootstrap() {
  const app = await NestFactory.create(APIModules);
 
  await mongoose.connect(env.env().URI);

  console.log('Database is connected');

  app.enableCors();

  populateDatabase()

  const httpServer = createServer();

  const io = new Server(httpServer, {
  
  });
   mongoose.connect(env.env().URI);
  
  Views.watch().on('change', (change) => {
   
   
      const newView = change.fullDocument;
      console.log(newView)
      io.emit('newView', newView);
   
  });
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
  
  
  httpServer.listen(3000);
  app.listen(env.env().PORT);


  console.log(`Server running at http://${env.ip()}:${env.env().PORT}`);
 
}

bootstrap();
