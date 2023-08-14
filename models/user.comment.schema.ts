import Sequelize from "sequelize";
import { sqlize,dbconnection } from "../config/conn";

const Comments = sqlize.define('comments', {
  contents: {
    type: Sequelize.STRING
  },
  user_id: {
    type:Sequelize.INTEGER
  },
  photo_id:{
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

const Comment_counts = sqlize.define('comment_counts',{
    photo_id:Sequelize.INTEGER,
    totalcomments:Sequelize.INTEGER,
    createdAt: {
        type:Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type:Sequelize.DATE,
        default:Date.now()
    }
})


export {Comments,Comment_counts};