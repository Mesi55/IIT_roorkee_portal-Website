import connectionInfo from "../server.js";

let updateInformation = (req,res)=>{
const {user_first_name,user_last_name,user_email,user_email_forProfile,user_Department,user_whatsapp_number,user_Indian_number,user_study_section,date_of_registration,user_role,user_status,params_id} = req.body
let update_information = `UPDATE userinfo SET user_first_name='${user_first_name}',user_last_name='${user_last_name}',user_email='${user_email}',user_email_forProfile='${user_email_forProfile}',user_Department='${user_Department}',user_whatsapp_number='${user_whatsapp_number}',user_Indian_number='${user_Indian_number}',user_study_section='${user_study_section}',date_of_registration='${date_of_registration}',user_role='${user_role}',user_status='${user_status}' WHERE userInfo_ID='${params_id}'`

connectionInfo.query(update_information,(err)=>{
    if(err){
        // console.log(err)
    }else{
        res.send({
            successMessage: "Profile updated successfully",
            redirect:"/admin",
            message:"Click Here Go Back To Admin Page"
        })
    }
   })
}

export default updateInformation