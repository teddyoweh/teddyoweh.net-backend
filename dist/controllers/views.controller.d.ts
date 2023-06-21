import { ViewService } from '../services/view.service';
import { Request } from 'express';
export declare class ViewController {
    private readonly viewService;
    constructor(viewService: ViewService);
    findAll(request: Request): string;
    addPayment(body: any): object;
    getViewsID(body: any): Promise<{}>;
}
export declare class ReqeustController {
    getHello(request: Request): {
        message: string;
    };
    getHelloP(request: Request): {
        message: string;
    };
}
