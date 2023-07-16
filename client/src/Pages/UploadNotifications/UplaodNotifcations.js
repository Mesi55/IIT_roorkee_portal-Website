import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UploadNotificaitons.css";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from 'react-redux'
function UplaodNotifcations() {
  const [Response, setResponse] = useState();
  const [notificationData, setnotificationData] = useState({
    user_notification_message: "",
    date_of_notification: "",
    userInfo_ID:"",
    user_Name:""
  });
  const [userNotification, setuserNotification] = useState([]);
  let {user} = useSelector((state)=>state.auth)
  let singleUserId = user.userInfo_ID
  let submitHandler = (e) => {
    let url = `http://localhost:6500/user/notification`;
    e.preventDefault();
    axios({
      method: "POST",
      data: notificationData,
      url,
      withCredentials: true,
    }).then((res) => {
      setResponse(res.data);
      setuserNotification(res.data.data)
    });
  };



  let handleChange = (e) => {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    switch (e.target.name) {
      case "user_notification_message":
        setnotificationData((pre) => {
          return {
            ...pre,
            user_notification_message: e.target.value,
            date_of_notification: dateString,
            userInfo_ID:user.userInfo_ID,
            user_Name:user.user_first_name
          };
        });
        break;
      default:
        break;
    }
  };




  async function usersNotificationD() {
    // try {
    //   let url2 = `http://localhost:6500/user/getUserNotfication/${singleUserId}`;
    //   const responseForNotifications = await axios.get(url2);
    //   let converted = JSON.parse(JSON.stringify(responseForNotifications.data.singleData));
    //   setuserNotification(() => converted.data);
    // } catch (err) {
    //   console.log(err)
    // }
    let url2 = `http://localhost:6500/user/getUserNotfication/${singleUserId}`;
     try {
      let response = await axios.get(url2)
      setuserNotification(response.data.singleData)
     } catch (error) {
      
     }
  }

  useEffect(() => {
    usersNotificationD();
  }, []);
    //* For Delete
    async function  toDelete(id) {
      let deleteURL =  `http://localhost:6500/user/deleteUserNotfication/${id}`;
     await axios({
        method: "DELETE",
        url: deleteURL,
      });
      usersNotificationD();
    }


  if (Response) {
    return (
      <div className="forSuccessPages  w-80 ">
      <h1 className="thankYou">{Response.successMessage}</h1>
      <a className="thankYouAnch" href={`${Response.redirect}`}>
        {Response.message}
      </a>
  
    </div>
    
    );
  } else {
    return (
      <>
        <h1 className="text-decoration-underline send_Notification">Send Notification</h1>
        <form onSubmit={submitHandler} className="forForm mx-auto bg-warning">
          <textarea
            name="user_notification_message"
            id="textarea"
            maxLength="115"
            placeholder="please pass your notification here"
            onChange={handleChange}
          ></textarea>
          <div>
            <button className="notificationSumbit">Send Notification</button>
          </div>
        </form>
        <div className="toShowNotification">
          <hr />
          <h2 className="yn container">Posted Notifications By You</h2>
          {userNotification.map((data, i) => {
            let yourNotification = (
              <div
              key={i}
              className="m-5 rounded border border-warning d-flex flex-column justify-content-center align-items-center container mx-auto bg-white"
            >
              <h2 className="p-2 text-center">
                <b>Your Notification</b> : {data.user_notification_message} |{" "}
                <b>Notification Date</b> : {data.date_of_notification}{" "}
              </h2>
              <Button
                onClick={() => toDelete(data.notification_id)}
                variant="danger"
                className="mt-3"
              >
                Delete Notification
              </Button>
            
          
            </div>
            
            );
            return yourNotification;
          })}
        </div>
      </>
    );
  }
}

export default UplaodNotifcations;
