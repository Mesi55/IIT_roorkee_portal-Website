import "./UpdateUserInformationAdmin.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import axios from 'axios'
function UpdateUserInformationAdmin() {

  const params = useParams();
  const id  = params.id

  const [updateInfo, setupdateInfo] = useState({
    user_first_name:"",
    user_last_name:"",
    user_email:"",
    user_email_forProfile:"",
    user_Department:"",
    user_whatsapp_number:"",
    user_Indian_number:"",
    user_password:"",
    user_study_section:"",
    date_of_registration:"",
    user_OTP:"",
    user_role:"",
    user_status:"",
    params_id : id
  })
 
 const [Response, setResponse] = useState("")


  let formSubmitter = (e)=>{
    e.preventDefault()
    // let formData= new FormData()
    // formData.append("user_first_name",updateInfo.user_first_name)
    // formData.append("user_last_name",updateInfo.user_last_name)
    // formData.append("user_email",updateInfo.user_email)
    // formData.append("user_email_forProfile",updateInfo.user_email_forProfile)
    // formData.append("user_Department",updateInfo.user_Department)
    // formData.append("user_whatsapp_number",updateInfo.user_whatsapp_number)
    // formData.append("user_Indian_number",updateInfo.user_Indian_number)

    // formData.append("user_study_section",updateInfo.user_study_section)
    // formData.append("date_of_registration",updateInfo.date_of_registration)

    // formData.append("user_role",updateInfo.user_role)
    // formData.append("user_status",updateInfo.user_status)
    // formData.append("params_id",updateInfo.params_id)

    let updatedUserInformationData = {
        user_first_name :  updateInfo.user_first_name,
        user_last_name :updateInfo.user_last_name,
        user_email : updateInfo.user_email,
        user_email_forProfile : updateInfo.user_email_forProfile,
        user_Department :updateInfo.user_Department,
        user_whatsapp_number :updateInfo.user_whatsapp_number,
        user_Indian_number : updateInfo.user_Indian_number,
        user_study_section :updateInfo.user_study_section,
        date_of_registration :updateInfo.date_of_registration,
        user_role : updateInfo.user_role,
        user_status : updateInfo.user_status,
        params_id : updateInfo.params_id
    }

    let linkToSend = `http://localhost:6500/admin/updateUserInfo`
    axios({
    method:"POST",
    url : linkToSend,
    data:updatedUserInformationData,
    // headers: {"Content-Type": "multipart/form-data" }
  }).then((res)=>{
    setResponse(res.data)
  })
  }


  let handleChange = (e) => {
    switch (e.target.name) {

      case "date_of_registration":
        setupdateInfo((pre) => {
          return { ...pre, date_of_registration: e.target.value };
        });
        break;
      case "user_role":
        setupdateInfo((pre) => {
          return { ...pre, user_role: e.target.value };
        });
        break;
      case "user_status":
        setupdateInfo((pre) => {
          return { ...pre, user_status: e.target.value };
        });
        break;
      case "user_first_name":
        setupdateInfo((pre) => {
          return { ...pre, user_first_name: e.target.value };
        });
        break;
      case "user_last_name":
        setupdateInfo((pre) => {
              return { ...pre, 
                user_last_name: e.target.value,
                
              };
        });
        break;
      case "user_email":
        setupdateInfo((pre) => {
          return { ...pre, user_email: e.target.value };
        });
        break;
      case "user_email_forProfile":
        setupdateInfo((pre) => {
          return { ...pre,
            user_email_forProfile: e.target.value };
        });
        break;
      case "user_Department":
        setupdateInfo((pre) => {
          return { ...pre,
            user_Department: e.target.value };
        });
        break;
      case "user_whatsapp_number":
        setupdateInfo((pre) => {
          return { ...pre,
            user_whatsapp_number: e.target.value };
        });
        break;
      case "user_Indian_number":
        setupdateInfo((pre) => {
          return { ...pre,
            user_Indian_number: e.target.value};
        });
        break;
      case "user_study_section":
        setupdateInfo((pre) => {
          return { ...pre,
            user_study_section: e.target.value};
        });
        break;
      default:
        break;
    }
  };
  
// console.log(updateInfo)
if(Response){
  return(
    <div className="forSuccessPa">
    <h1 className="thankYou">{Response.successMessage}</h1>
    <a className="thankYouAnch" href={`${Response.redirect}`}>
      {Response.message}
    </a>
  </div>
  )
}else{
  return (
    <div className="main-form-container my-3">
    <h1 className="h1">Update User Information</h1>
      <form onSubmit={formSubmitter} className="formContainer">
        <div className=" m-2">
          <div>
            <label htmlFor="user_first_name">user First Name</label>
            <input type="text" name="user_first_name" id="user_first_name"    onChange={handleChange} />
          </div>
        </div>
        <div className="m-2">
          <div>
            <label htmlFor="user_last_name">user Last Name</label>
            <input type="text" name="user_last_name" id="user_first_name"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="user_email">user email</label>
            <input type="text" name="user_email" id="user_email"    onChange={handleChange} />
          </div>
        </div>
        <div className="m-2">
          <div>
            <label htmlFor="user_email_forProfile">
              user email for profile
            </label>
            <input
              type="text"
              name="user_email_forProfile"
              id="user_email_forProfile"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="user_Department">user Department</label>
            <input type="text" name="user_Department" id="user_Department"    onChange={handleChange} />
          </div>
        </div>
        <div className="m-2">
          <div>
            <label htmlFor="user_whatsapp_number">user whatsapp number</label>
            <input
              type="text"
              name="user_whatsapp_number"
              id="user_whatsapp_number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="user_Indian_number">user Indian number</label>
            <input
              type="text"
              name="user_Indian_number"
              id="user_Indian_number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-2">
          <div>
            <label htmlFor="user_study_section">user study section</label>
            <input
              type="text"
              name="user_study_section"
              id="user_study_section"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-2">
          <div>
            <label htmlFor="user_role">user role</label>
            <input type="text" name="user_role" id="user_role"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="date_of_registration">Date of registration</label>
            <input type="text" name="date_of_registration" id="date_of_registration"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="user_status">user status</label>
            <input type="text" name="user_status" id="user_status"    onChange={handleChange} />
            <Button type="submit" className="">Update</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
}

export default UpdateUserInformationAdmin;
