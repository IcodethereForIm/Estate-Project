import path from "node:path"
import fs from "node:fs/promises"
import {sendResponse} from "./sendRes.js"
import { getContententType } from "./getConType.js"


export async function serverStatic(req,res,baseDir){
    if (req.url === "/favicon.ico") return res.end()
    const pubDir = path.join(baseDir,"Realestate")
    const filePath = path.join(pubDir,
                    req.url==="/" ? "index.html" : req.url)
    
    const ext = path.extname(filePath)
    const Contenttype = getContententType(ext)
    //console.log(ext)
    try{
        const Content = await fs.readFile(filePath)
        sendResponse(res,200,Contenttype,Content)
    }catch(err){
        console.log(err)
    }
    
}