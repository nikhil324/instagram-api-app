import  express  from "express";
import dotenv from 'dotenv';
import { sqlize,dbconnection } from "./config/conn";
import swaggerUi from "swagger-ui-express";
//import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yamljs";
import  post_router  from "./routes/user.post.route";
import  router  from "./routes/user.route";
import comment_router from "./routes/user.comments..routes";
const app = express();
dotenv.config();
const port = process.env.PORT;
const swaggerJsDocs_user:any  =  YAML.load("./swaggerdocs/user.api.yaml");
const swaggerJsDocs_post:any = YAML.load("./swaggerdocs/user.postapi.yaml");
const swaggerJsDocs_comment:any = YAML.load("./swaggerdocs/user.commentapi.yaml");
dbconnection();
// const swaggerDefinition = {
//   openapi: "3.1.0",
//   info:{
//   title: "Instagram User Post API's.",
//   description: "In this Instagram feature these api's handle all the post related operations of Insta application.",
//   version: "1.1.3"
//   },
//   host: "http://localhost:5003",
//   description: "local host uses the post number 5003."
//   }

const options ={
  // swaggerDefinition,
  // //apis: ['./swaggerdocs/**/*.yaml']
};

app.use('/post-apidocs',swaggerUi.serveFiles(swaggerJsDocs_post,options),swaggerUi.setup(swaggerJsDocs_post));
app.use('/user-apidocs',swaggerUi.serveFiles(swaggerJsDocs_user,options),swaggerUi.setup(swaggerJsDocs_user));
app.use('/comment-apidocs',swaggerUi.serveFiles(swaggerJsDocs_comment,options),swaggerUi.setup(swaggerJsDocs_comment));



app.use(express.json());
app.use('/',router);
app.use('/',post_router);
app.use('/',comment_router);
app.use('/post/',post_router);
app.use('/comment/',comment_router);


app.listen(port,()=>{
    console.log(`I m at the port no ${port}`);
  })

