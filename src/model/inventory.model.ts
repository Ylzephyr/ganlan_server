import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/sequelize';

export const inventoryModel = sequelize.define('inventory',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true
    },
    part_number:DataTypes.STRING(50),
    manufactory:DataTypes.STRING(20),
    produce_date:DataTypes.STRING(20),
    quantity:DataTypes.STRING(10),
    package:DataTypes.STRING(10),
    Updated:DataTypes.DATE,
},{
    timestamps:false,
    freezeTableName:true,
})