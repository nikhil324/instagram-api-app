import Sequelize from "sequelize";
import { sqlize,dbconnection } from "../config/conn";

const Photos = sqlize.define('photos', {
    url: {
      type: Sequelize.STRING
    },
    user_id: {
      type:Sequelize.INTEGER
    },
    createdAt: {
        type:Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type:Sequelize.DATE,
        default:Date.now()
    }    
});


export {Photos};