import { User } from "../models/user.schema";
import { Request, Response } from "express";


/******************************** REGISTER FUNCTION***********************************/

const insertservice = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        if (data!=null) {
            await User.create(data);
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        return false;
    }
}

/******************************** LOGIN FUNCTION**************************************/

const loginservice = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const islogin = await User.findOne({ where: { username: data.username } });
        if (islogin != null) {
            console.log(islogin);
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return error;
    }
}

export { loginservice, insertservice };