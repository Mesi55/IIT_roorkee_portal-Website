import connectionInfo from "../server.js";
let updateNotificatioByAdmin = (req,res)=>{
    const {params_id,user_notification} = req.body;
   let updatedNotification = `UPDATE notifications SET user_notification_message='${user_notification}'WHERE notification_id='${params_id}'`;
   connectionInfo.query(updatedNotification,(err)=>{
    if(err){
        // console.log(err)
    }else{
        res.send({
            successMessage: "Notification updated successfully",
            redirect:"/admin",
            message:"Click Here Go Back To Admin Page"
        })
    }
   })

}

export default updateNotificatioByAdmin