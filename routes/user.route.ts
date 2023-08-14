import express,{Request,Response} from "express";
import { insertcontroller,logincontroller } from "../controllers/user.controllers";
import {check_data} from "../middleware/user.middleware";

const router = express.Router();

router.route("/").get();
router.route("/signup").post(check_data,insertcontroller);
router.route("/login").post(check_data,logincontroller);

export default router;