import { ViewsModel } from '../models/view.model';
import { Model } from 'mongoose';
export declare class SocketGateway {
    private readonly viewsModel;
    server: any;
    constructor(viewsModel: Model<ViewsModel>);
    start(): Promise<void>;
}
