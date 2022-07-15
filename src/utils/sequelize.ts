import * as mysql from 'mysql2';
import { Sequelize } from 'sequelize';

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "zephyr",
//     database: "ganlan"
// });

// export class db {
//     private host: string;
//     private user: string;
//     private database: string;
//     private connect: mysql.Connection;

//     constructor() {
//         this.connect = mysql.createConnection({
//             host: this.host,
//             user: this.user,
//             database: this.database
//         })
//     }
// }

export const sequelize = new Sequelize({
    host:"localhost",
    dialect:"mysql",
    username:"zephyr",
    database:"ganlan",
    password:"53czh1996",
    pool:{
        max:10,
        min:0,
        idle:30000
    },
    port:3306,
})

