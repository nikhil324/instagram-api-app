import express,{Request,Response} from "express";
import {recent_comment_controller,create_post_controller } from "../controllers/user.post.controllers";
import { check_post_data } from "../middleware/user.post.middleware";
const post_router = express.Router();

post_router.route("/").get();
post_router.route("/createpost").post(check_post_data,create_post_controller);
post_router.route("/recentcomment").post(recent_comment_controller);

export default post_router;