import { Context } from 'koa';
import inventoryService from '../service/inventory.service';

export default class inventoryController {
    static async searchInventory(ctx: Context) {
        const { manufactory, part_number } = ctx.request.body;
        await inventoryService.searchInventory(manufactory, part_number).then((r) => {
            ctx.response.body = {
                data: r,
                code:100,
                msg:"success"
            }
        })
    }
}