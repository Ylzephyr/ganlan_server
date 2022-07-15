import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Koa_Static from 'koa-static';
import * as Koa_BodyParser from 'koa-bodyparser';
import * as Koa_cors from '@koa/cors';

import AppRoutes from './routes/routes';


export class App {
    private app: Koa;
    private router: Router;

    constructor(private port?: number | string) {
        this.app = new Koa();
        this.router = new Router();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(Koa_Static(__dirname + '/static/'));
        this.app.use(Koa_BodyParser());
        this.app.use(Koa_cors());
    }

    private settings(): void {
        this.port = this.port || process.env.port || 9001;
    }

    private routes(): void {
        this.app.use(AppRoutes.routes()).use(this.router.allowedMethods);
    }

    async listen() {
        await this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
}