import * as Router from 'koa-router';
import inventoryRoutes from './inventory.routes';

const apiRouter = new Router({ prefix: '/api' });
apiRouter.use('/inventory',inventoryRoutes);

export default apiRouter;