import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewController,ReqeustController } from '../controllers/views.controller';
import { ViewService } from '../services/view.service';
import { SocketGateway } from '../middlewares/socket.gateway';
import { ViewsModel } from 'src/models/view.model';
@Module({
  imports: [],
  controllers: [ViewController,ReqeustController],
  providers: [ViewService,SocketGateway],
})
export class ViewsModule {}