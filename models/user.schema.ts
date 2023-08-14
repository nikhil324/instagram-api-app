import Sequelize from "sequelize";
import { sqlize,dbconnection } from "../config/conn";
const User = sqlize.define('user', {
    username: {
      type: Sequelize.STRING
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

export {User};