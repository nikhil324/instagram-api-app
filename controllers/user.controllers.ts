import { insertservice, loginservice } from "../services/user.services";
import { Request, Response } from "express";

/******************************** LOGIN FUNCTION**************************************/

const insertcontroller = async (req: Request, res: Response) => {
    try {
        const flag = await insertservice(req, res);
        if (flag == true) {
            res.status(201).send({
                "user register": flag
            });
        }
        else {
            res.status(406).send({
                "user register": flag
            });
        }
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}

/******************************** LOGIN FUNCTION**************************************/

const logincontroller = async (req: Request, res: Response) => {
    try {
        const flag = await loginservice(req, res);
        if (flag == true) {
            res.status(200).send({
                "loggedin": flag
            });
        }
        else {
            res.status(401).send({
                "loggedin": flag
            })
        }
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}

export { insertcontroller, logincontroller };