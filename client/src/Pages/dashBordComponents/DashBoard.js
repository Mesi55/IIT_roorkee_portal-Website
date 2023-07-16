import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../Images/logoIcon/IITR175.png";
import Resources from "./Resources";
import ShopComponent from "./ShopComponent.js";
import StudentInformation from "./StudentInformation";
import Upload from "./Upload";
import Notification from "./Notification";
import Departments from "./Departments";
import { Button } from "react-bootstrap";
import Avatar from "react-avatar";
import "./DashBoard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../components/Redux/Reducers/authSlice";
import { BounceLoader } from "react-spinners";
//* import jwt from 'jsonwebtoken';

function DashBord() {
  const [notifications, setNotifications] = useState([]);
  const [organizer, setorganizer] = useState("");
  // const [decodedToken, setDecodedToken] = useState(null);

  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // * for all notifications
  let urlForAllNotification = `http://localhost:6500/user/getAllNotfication`;
  let collector = "";
  useEffect(() => {
    axios({
      url: urlForAllNotification,
      method: "GET",
    }).then((response) => {
      setNotifications(response.data.data);
    });

    {
      notifications.map((singleNotification, i) => {
        collector =
          collector +
          ` Notification By: ${singleNotification.user_first_name}, Notification : ${singleNotification.user_notification_message}, Date Of Notification : ${singleNotification.date_of_notification} |`;
        setorganizer(collector);
      });
    }
  }, [, notifications]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(getUser())
  }, []);
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">
            Loading...
            <BounceLoader color="#36d7b7" />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row  justify-content-center mx-2 ">
        <div className="forMarquee">
          <marquee
            className="text-dark pt-1"
            behavior="scroll"
            loop="infinite"
            direction="left"
          >
            {organizer}
          </marquee>
        </div>
        <div className=" d-md-flex  text-center  container  justify-content-center main-dashborad   main-dash"> 
          <section className="profileSection ml-5 " style={{ width: 280 }}>
            <h3 className="text-center headerTitle my-3 ">
              Your Personal Profile
            </h3>
            {/* <Avatar className="avatar" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="100" textSizeRatio={1} round={true} /> */}
            <ul className="userProfile">
              <li className=" my-5  mx-md-1 ">{`Name:- ${user.user_first_name} ${user.user_last_name}`}</li>
              <li className=" my-4  mx-md-1 ">{` Study Section:- ${user.user_study_section}`}</li>
              <li className=" my-5  mx-md-0 ">{`Email:- ${user.user_email_forProfile}`}</li>
              <li className=" my-4  mx-md-1 ">{`Whatsapp Number:- +${user.user_whatsapp_number}`}</li>
              <li className="mt-5  mx-md-1 ">{`Indian Number:- +${user.user_Indian_number}`}</li>
            </ul>
            <Link to="/updateProfile">
              <Button className="m-3">Update Profile</Button>
            </Link>
            <Link to="/deleteProfile">
              <Button className="m-3 bg-danger">Delete Profile</Button>
            </Link>
          </section>

          <section className="backgray d-md-flex  my-1   ">
           
              <div className="my-sm-3  ">
                <StudentInformation />
                <Upload />
          
            </div>
         
              <div className="my-sm-3 ">
                <ShopComponent />
                <Notification />
              </div>
    
              <div className="my-sm-3 ">
                <Resources />
                <Departments />
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default DashBord;
