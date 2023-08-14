import { Request, Response } from "express";

const check_data= (req: Request, res: Response, next: any) => {
    if (req.body != null) {
        if (req.body.username != null && req.body.username.length > 3) {
            next();
        }
        else {
            res.status(406).send("user name must be a valid string");
        }
    }
    else {
        res.status(406).send("user name must be a valid string");
    }

}
export {check_data};