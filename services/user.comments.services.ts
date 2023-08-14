import { Comment_counts, Comments } from "../models/./user.comment.schema";
import { Likes } from "../models/./user.likes.schema";
import { Photos } from "../models/./user.photos.schema";
import { QueryTypes } from "sequelize";
import { sqlize } from "../config/conn";
import { Request, Response } from "express";

/******************************** CREATE COMMENT FUNCTION***********************************/

const create_comment_service = async (req: Request, res: Response) => {
    try { 
        const islike = req.params.like;
        if (islike != null) {
            const commentid = req.params.cid;
            //console.log(likedata.totallikes);
            const updated = await Likes.increment('totallikes', { where: { comment_id: commentid } });
            return true;
        }
        else {
            const data = req.body;
            const commentdata = await Comments.create(data);
            console.log(commentdata);
            let updatecomment = await Comment_counts.increment('totalcomments', { where: { photo_id: commentdata.photo_id } })
            let result = await sqlize.query('insert into likes(totallikes,comment_id) values(:tlike,:cid)',
                { replacements: { tlike: '0', cid: `${commentdata.id}` }, type: QueryTypes.INSERT });
            return commentdata.contents;
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }
}


/******************************** DELETE COMMENT FUNCTION***********************************/


const delete_comment_service = async (req: Request, res: Response) => {
    try {
        const c_id = req.params.cid;
        if (c_id != null) {
            const commdata = await Comments.findByPk(c_id);
            if (!commdata) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            await commdata.destroy();
            return true;
        }
        else {
            new Error("not allowed");
        }
    }
    catch (err) {
        return false;
    }
}


/******************************** LIST ALL COMMENTS AND COUNT LIKE FUNCTION***********************************/


const comment_list_service = async (req: Request, res: Response) => {
    try {
        let result = await sqlize.query('select c.contents,l.totallikes from comments as c join likes as l on c.id=l.comment_id',
        {type:QueryTypes.SELECT});
        console.log(result);
        return result;
        // await Comments.findAll()
        //     .then((result: any) => {
        //         result.forEach((record: any) => {
        //             console.log(`Record ID: ${record.id}`);
        //             console.log(`Record Value: ${record.contents}`);
        //             comment_id = record.id;
        //             //console.log(record.id);
        //             const printlike = async (comment_id: any) => {
        //                 const likedata = await Likes.findOne({ where: { comment_id: comment_id } });
        //                 if (likedata == null) {
        //                     console.log(`Likes:=${0}`);
        //                 }
        //                 else {
        //                     console.log(`Likes:=${likedata.dataValues.totallikes}`);
        //                 }
        //             }
        //             printlike(comment_id);
        //         });
        //     })
        //     .catch((error: any) => {
        //         // Handle error
        //     });
    }
    catch (err: any) {
        return false;
    }
}


export { create_comment_service, comment_list_service, delete_comment_service, };