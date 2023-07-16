import './UpdateNotificationAdmin.css'
import { Button } from "react-bootstrap";
import React, { useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
function UpdateNotificationAdmin() {
  const params = useParams();
  const id  = params.id

  const [udateNotification, setudateNotification] = useState({
    user_notification : "",
    params_id : id
  })

  const [Response, setResponse] = useState("")

  let formSubmitter = (e)=>{
    e.preventDefault()
    // let formData= new FormData()
    // formData.append("user_notification",udateNotification.user_notification)
    // formData.append("params_id",udateNotification.params_id)
  let notificationUpdate = {
    user_notification:udateNotification.user_notification,
    params_id :udateNotification.params_id
  }
    let linkToSend = `http://localhost:6500/admin/adminUpdateNotification`
    axios({
    method:"POST",
    url : linkToSend,
    data:notificationUpdate,
    // headers: {"Content-Type": "multipart/form-data" }
  }).then((res)=>{
    setResponse(res.data)
  })

  }

  let handleChange = (e) => {
    switch (e.target.name) {
      case "user_notification":
        setudateNotification((pre) => {
          return { ...pre, user_notification: e.target.value };
        });
        break;
      default:
        break;
    }
  };

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
    <div div className="main-form-container my-3">
    <h1 className="h1">Update User Information</h1>
      <form onSubmit={formSubmitter} className="formContainer">  
      <div>    
            <label htmlFor="user_notification">updated Message</label>
            <textarea type="text" name="user_notification" id="user_notification" onChange={handleChange} />
            <Button type="submit" className="">Update</Button>
      </div>
         
      </form>
    </div>
  )
}
}

export default UpdateNotificationAdmin