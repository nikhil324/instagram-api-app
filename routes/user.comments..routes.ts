import express,{Request,Response} from "express";
import { create_comment_controller,list_comment_controller,delete_comment_controller } from "../controllers/user.comments.controllers";
import { check_comment_data } from "../middleware/user.commet.middleware";

const comment_router = express.Router();

comment_router.route("/").get();
comment_router.route("/createcomment").post(check_comment_data,create_comment_controller);
comment_router.route("/deletecomment/:cid").get(delete_comment_controller);
comment_router.route("/createcomment/:like/:cid").get(create_comment_controller);
comment_router.route("/listout").get(list_comment_controller);


export default comment_router;