// let url = `http://localhost:6500/user/deletePhd/${id}`
// let url = `http://localhost:6500/user/deleteMtech/${id}`
// let url = `http://localhost:6500/user/deleteBtech/${id}`
// let url = `http://localhost:6500/user/deleteNotification/${id}`
// let url = `http://localhost:6500/user/deleteGoods/${id}`
// let url = `http://localhost:3456/user/deleteNotification/${id}`

import connectionInfo from '../server.js'
let deletePhdDocument = (req,res)=>{
    const user_id = req.params.id
    let deletePhdData = `DELETE FROM educationaldocument WHERE  Document_id=${user_id} `

    connectionInfo.query(deletePhdData,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `phd document  Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}
let deleteMtchDocument = (req,res)=>{
    const user_id = req.params.id
    let deleteMtechData = `DELETE FROM educationaldocument WHERE  Document_id=${user_id} `

    connectionInfo.query(deleteMtechData,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `Mtech document Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}
let deleteBtchDocument = (req,res)=>{
    const user_id = req.params.id
    let deleteBtechData = `DELETE FROM educationaldocument WHERE  Document_id=${user_id} `

    connectionInfo.query(deleteBtechData,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `Btech Document Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}
let deleteUserNotification = (req,res)=>{
    const user_id = req.params.id
    let deleteNotification = `DELETE FROM notifications WHERE  notification_id=${user_id} `

    connectionInfo.query(deleteNotification,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `Notification  Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}
let deleteUserGoods = (req,res)=>{
    const user_id = req.params.id
    let deleteGoods = `DELETE FROM market WHERE  item_id=${user_id} `

    connectionInfo.query(deleteGoods,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `goods Document Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}
let deleteUserData = (req,res)=>{
    const user_id = req.params.id
    let deleteUser = `DELETE FROM userinfo WHERE  userInfo_ID=${user_id} `

    connectionInfo.query(deleteUser,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `user  Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}

let deleteUserEmail = (req,res)=>{
    const user_id = req.params.id
    let deleteUser = `UPDATE userInfo SET user_email="Email Deleted By Admin",user_status="Deleted Account" WHERE userInfo_ID ="${user_id}" `

    connectionInfo.query(deleteUser,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: `user  Deleted successfully`,
                message :'OK',
                redirect:'/admin',
                removePage:1
            })
        }
    })
}


export  {deletePhdDocument,deleteMtchDocument,deleteBtchDocument,deleteUserNotification,deleteUserGoods,deleteUserData,deleteUserEmail}