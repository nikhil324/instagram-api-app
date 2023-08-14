import { Request, Response } from "express";
const check_comment_data = (req: Request, res: Response, next: any) => {
    if (req.body != null) {
        if (req.body.contents != null && req.body.user_id !=null && req.body.user_id>0 && req.body.photo_id!=null && req.body.photo_id>0) {
            next();
        }
        else {
            res.status(406).send("Not valid comment data or user_id or photo_id");
        }
    }
    else {
        res.status(406).send("null value shoud not accepted");
    }
}

export { check_comment_data };