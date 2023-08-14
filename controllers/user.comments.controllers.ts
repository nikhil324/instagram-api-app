import { create_comment_service, delete_comment_service, comment_list_service } from "../services/user.comments.services";
import { Request, Response } from "express";


/*************************************CREATE COMMENT FUNCTION ***************************************/

const create_comment_controller = async (req: Request, res: Response) => {
    try {
        const comment_data = await create_comment_service(req, res);
        if (comment_data) {
            res.status(200).send({
                "comment_posted": comment_data
            });
        }
        else {
            res.status(406).send(
                {
                    "comment_posted": comment_data
                })
        }
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}

/*************************************DELETE COMMENT FUNCTION ***************************************/


const delete_comment_controller = async (req: Request, res: Response) => {
    try {
        const flag = await delete_comment_service(req, res);
        res.send({
            "comment_deleted": flag
        });
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}


/*************************************LIST ALL COMMENT FUNCTION ***************************************/


const list_comment_controller = async (req: Request, res: Response) => {
    try {
        const listdata = await comment_list_service(req, res);
        res.send(listdata);
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}



export { create_comment_controller, list_comment_controller, delete_comment_controller };