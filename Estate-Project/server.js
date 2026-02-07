import http from "node:http"
import path from "node:path"
import {serverStatic} from "./utils/staticServer.js"
import {reviewController} from "./utils/controlers/reviewcontrol.js"
//import {reviewController} from "./utils/revcontrl.js"

const PORT = 8000

const __dirname = import.meta.dirname
//console.log(__dirname)
const server = http.createServer(async(req,res)=>{
    
        
        const handled = await reviewController(req, res, __dirname)

  if (handled) return

  await serverStatic(req, res, __dirname)
}
       
)

server.listen(PORT,()=>console.log(`Listening from the server : ${PORT}`))