import {create_post_service,recent_list_service} from "../services/user.post.services";
import { Request,Response } from "express";

/*************************************CREATE POST ***************************************/

const create_post_controller= async (req:Request,res:Response)=>{
    try{
    const data = await create_post_service(req,res);
        res.send({
            "post_created":data
    });
 }
 catch(err){
    res.status(500).send("Internal Server error !!")
 }
}

/*************************************RECENT 3 COMMENTS ON POST ***************************************/

const recent_comment_controller= async (req:Request,res:Response)=>{
    try{
    const data = await recent_list_service(req,res);
        res.send({
            "comment List":data
    });
 }
 catch(err){
    res.status(500).send("Internal Server error !!")
 }
}


export {recent_comment_controller,create_post_controller};