import { Request, Response } from "express";
const check_post_data = (req: Request, res: Response, next: any) => {
    if (req.body != null) {
        if (req.body.url != null && req.body.user_id !=null && req.body.user_id>0) {
            next();
        }
        else {
            res.status(406).send("Not valid post data");
        }
    }
    else {
        res.status(406).send("user name must be a valid string");
    }
}

export { check_post_data };