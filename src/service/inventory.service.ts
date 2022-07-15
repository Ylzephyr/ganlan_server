import { inventoryModel } from "../model/inventory.model";

export default class inventoryService {
    static async searchInventory(manufactory: string,part_number: string){
        if(manufactory && !part_number){
            return inventoryModel.findAll({
                where: {
                    manufactory: manufactory
                }
            })
        }else if(!manufactory && part_number){
            return inventoryModel.findAll({
                where: {
                    part_number: part_number
                }
            })
        }else{
            return ;
        }
    }
}
