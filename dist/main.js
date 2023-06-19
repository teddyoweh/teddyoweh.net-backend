"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const modules_1 = require("./modules");
const env_1 = require("./env");
const mongoose_1 = require("mongoose");
const socket_io_1 = require("socket.io");
const view_model_1 = require("./models/view.model");
const http_1 = require("http");
const db_setup_1 = require("./db-setup");
const env = new env_1.Env();
const Views = new view_model_1.ViewsModel().view();
async function bootstrap() {
    const app = await core_1.NestFactory.create(modules_1.APIModules);
    await mongoose_1.default.connect(env.env().URI);
    console.log('Database is connected');
    app.enableCors();
    (0, db_setup_1.populateDatabase)();
    const httpServer = (0, http_1.createServer)();
    const io = new socket_io_1.Server(httpServer, {});
    mongoose_1.default.connect(env.env().URI);
    Views.watch().on('change', (change) => {
        const newView = change.fullDocument;
        console.log(newView);
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
//# sourceMappingURL=main.js.map