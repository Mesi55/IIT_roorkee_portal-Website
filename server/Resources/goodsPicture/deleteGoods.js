import connectionInfo from "../../server.js"
import {fileURLToPath} from 'url'
import path from 'path';
import fs from 'fs';

let fullDirectly = fileURLToPath(import.meta.url)
let fileDirectory =path.parse(fullDirectly)

let deleteGoods = (req,res)=>{
    const  id = req.params.id
          let selectGoods = `SELECT * FROM market WHERE item_id = ${id} `
          let deleteUserGoods = `DELETE FROM market Where item_id = ${id}`
          connectionInfo.query(selectGoods,(err,data,field)=>{
            if(err){
                console.log(err)
            }else{
                   let imageName = data[0].item_photo
                   connectionInfo.query(deleteUserGoods,(err)=>{
                    if(err){
                        console.log(err)
                    }else{
                        fs.unlink(`${fileDirectory.dir}/${imageName}`,(err)=>{
                            if(err){
                                console.log(err)
                            }else{
                               
                            }
                           })
                        return res.send({ 

                                          successMessage:'item deleted successfully',
                                          message:"Click Here To Go Back",
                                          redirect:"/sellGoods"})
                    }
                })
            }
           })
        
}

export {deleteGoods}