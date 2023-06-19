import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ViewsModel } from '../models/view.model';
import { Model } from 'mongoose';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer() server;

  constructor(private readonly viewsModel: Model<ViewsModel>) {}

  async start() {
    const views = await this.viewsModel.find().lean().exec();
    this.server.emit('newView', views);

    this.viewsModel.watch().on('change', (change) => {
      if (change.operationType === 'insert') {
        const newView = change.fullDocument;
        this.server.emit('newView', newView);
      }
    });
  }
}
