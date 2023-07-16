import connectionInfo from "../server.js"
//  * upload notification 
let notificationC = (req,res)=>{
    const {user_notification_message,date_of_notification,userInfo_ID,user_Name} =req.body
    if(user_notification_message===''){
        res.send({
            successMessage:
            "Notification Message Can't Be Empty",
            redirect: "/uploadNotification",
            message :"click here to Try Again",
        })
    }else{
        let notificatinData = `INSERT INTO notifications (user_notification_message,userInfo_ID,date_of_notification,user_first_name) VALUES (?)`
        let value =[user_notification_message,userInfo_ID,date_of_notification,user_Name]
        connectionInfo.query(notificatinData,[value],(err,result,field)=>{
         if(err){
            // console.log(err)
           return  res.send({
                 successMessage:
                 "Notification was not successfully uploaded",
                 redirect: "/uploadNotification",
                 message :"click here to Try Again",
             })
         }else{
          return   res.send({
                 successMessage:
                 "Notification Uploaded successfully ",
                 redirect: "/uploadNotification",
                 message :"Click Here To Go To Notification Page",
             })
         }
        })
    }

}


// * get user previously uploaded notification 
let getYourNotfication = (req,res)=>{
    const {userInfo_ID} =req.params
    // console.log(req.params)
    let userNotification = `SELECT * FROM notifications WHERE userInfo_ID=${userInfo_ID}`
    connectionInfo.query(userNotification,(err,data,field)=>{
       if(err){
//   console.log(err)
       }else{
          return   res.send({
                   singleData:data

             })
       }
    })
}

// * get All uploaded notification 
let getAllNotfication = (req,res)=>{
    let allNotifications = `SELECT * FROM notifications`
    connectionInfo.query(allNotifications,(err,data,field)=>{
       if(err){
        // console.log(err)
       }else{
           return  res.send({
                data:data
                
             })
       }
    })
}

// * Delete Notification
let deleteNotification = (req,res)=>{
    const  id = req.params.id
          let deleteNotification = `DELETE FROM notifications Where notification_id = ${id}`
          connectionInfo.query(deleteNotification,(err)=>{
              if(err){
                //   console.log(err)
              }else{
                  return res.send({successMessage:'notification deleted successfully',message:"Click Here To Go Back To Notification",redirect:"/uploadNotification"})
              }
          })
}

export  {notificationC,getYourNotfication,deleteNotification,getAllNotfication}


