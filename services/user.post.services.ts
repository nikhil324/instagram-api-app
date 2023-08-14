import { Photos } from "../models/user.photos.schema";
import { Request, Response } from "express";
const { QueryTypes } = require("sequelize");
import { sqlize } from "../config/conn";


/******************************** CREATE POST FUNCTION***********************************/

const create_post_service = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const photodata = await Photos.create(data);
    let result = await sqlize.query('insert into comment_counts(photo_id,totalcomments) values(:pid,:val)',
      { replacements: { pid: `${photodata.id}`, val: '0' }, type: QueryTypes.insert });
    return result;
  }
  catch (err) {
    return false;
  }
}


/******************************** RECENT 3 COMMENTS ON POST FUNCTION***********************************/

// const commentprint = async (photo_id:number) => {
//   await Comments.findAll({
//     where: { photo_id: photo_id },
//     order: [['createdAt', 'DESC']]
//   }).then((records: any) => {
//     if (records.length >= 3) {
//       for (var j = 0; j < 3; j++) {
//         console.log(`Comment ${j} : ${records[j].contents}`);

//       }
//     }
//     else {
//       for (let j = 0; j < records.length; j++) {
//         console.log(`Comment ${j} : ${records[j].contents}`);

//       }
//     }
//   })
// }

const recent_list_service = async (req: Request, res: Response) => {
  try {
    // let photo_id: Number = 0;
    // var data:Array<any>=[];
    //  await Photos.findAll().then(async (result: any) => {
    //   for (let i = 0; i < result.length; i++) {
    //      console.log(`USER ID: ${result[i].user_id}`);
    //      console.log(`URL: ${result[i].url}`);
    //     //data.push(result[i]);
    //     let photo_id: number = result[i].id;

    //     await commentprint(photo_id);
    //   }
    // })
    //   .catch((error: any) => {
    //     // Handle error
    //   });
    let result = await sqlize.query('select c.*,p.url from photos as p left join (select * from comments order by "createdAt" desc) as c on c.photo_id = p.id where c.photo_id = :rid limit :lim',
      { replacements: { rid: `${req.body.pid}`, lim: '3' }, type: QueryTypes.select });
    console.log(result[0]);
    return result[0];
  }
  catch (err: any) {
    return false;
  }
}

export { recent_list_service, create_post_service };