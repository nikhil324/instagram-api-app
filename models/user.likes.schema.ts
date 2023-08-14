import Sequelize from "sequelize";
import { sqlize,dbconnection } from "../config/conn";

const Likes = sqlize.define('likes', {
  comment_id: {
    type: Sequelize.STRING
  },
  totallikes:{
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


export {Likes};