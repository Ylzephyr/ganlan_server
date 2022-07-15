import * as Router from 'koa-router';
import inventoryController from '../controller/inventory.controller';

const router = new Router();
router.post('/search',inventoryController.searchInventory);

export default router.routes();