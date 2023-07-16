import connectionInfo from "../server.js"
// * get user previously uploaded notification 
let getYourSingleGoods= (req,res)=>{
    const {userInfo_ID} =req.params
    let userGoods= `SELECT * FROM market WHERE userInfo_ID=${userInfo_ID}`
    connectionInfo.query(userGoods,(err,data,field)=>{
       if(err){
//   console.log(err)
       }else{
          return   res.send({
                   singleData:data

             })
       }
    })
}

// * Delete Notification
// let deleteGoods = (req,res)=>{
//     const  id = req.params.id
//           let selectGoods = `SELECT * FROM market WHERE item_id = ${id} `
//           let deleteUserGoods = `DELETE FROM market Where item_id = ${id}`

//           connectionInfo.query(selectGoods,(err,data,field)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                    let imageName = data[0].item_photo
                
//                    connectionInfo.query(deleteUserGoods,(err)=>{
//                     if(err){
//                         console.log(err)
//                     }else{
//                         fs.unlink(`../Resources/goodsPicture/${imageName}`,(err)=>{
//                             if(err){
//                                 console.log(err)
//                             }else{
//                                 console.log(`${imageName} is deleted`)
//                             }
//                            })
//                         return res.send({ 
//                                           successMessage:'item deleted successfully',
//                                           message:"Click Here To Go Back",
//                                           redirect:"/sellGoods"})
//                     }
//                 })
//             }
//            })
        
// }

export {getYourSingleGoods}


