import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { loadControllers, scopePerRequest } from 'awilix-express';

export default class App {

    constructor(appConfig) {

        this.appConfig = appConfig;
    }

    start(container, callback) {

        const app = this._create(container);
        const port = this.appConfig.port;

        app.listen(port, callback(port));
    }

    _create(container) {

        const app = express();

        app.use(compression());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(cors());

        app.use(scopePerRequest(container));
        app.use(loadControllers('routes/**/*.controller.js', {cwd: __dirname}));

        return app;
    }
}
