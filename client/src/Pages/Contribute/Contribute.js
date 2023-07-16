import React from "react";
import "./Contribute.css";
import Ethiopia from "../../Images/countryFlags/Ethiopia_flag.png";
function Contribute() {
  return (
    <div className="container contirbuit-wrapper">
      <p>
        <br />
        <p className="contributionStyling text-black  w-100 p-3">
          <h4 className="m-3">Dear Community,</h4>
          <p>
            {" "}
            We are reaching out to our valued users and supporters to request
            your assistance in maintaining and improving our website. As a vital
            educational resource for students, we strive to provide a reliable
            and efficient platform for sharing educational materials,
            information exchange, and facilitating academic transactions.
          </p>
          <p>
            To ensure the smooth functioning and accessibility of our website,
            we rely on essential technical components such as our domain name
            and server rental. These components are crucial for maintaining a
            stable online presence and delivering a seamless user experience.
            Unfortunately, the costs associated with these technical
            requirements can be substantial. We are committed to keeping our
            website free and accessible to all students, regardless of their
            financial capabilities. Therefore, we kindly request your support
            through contributions to our Domain Name and Server Rental Fund.
            Your generous contributions will directly contribute to covering the
            expenses associated with our domain name registration and server
            rental, allowing us to continue providing an invaluable platform for
            educational resource sharing and academic collaboration.
          </p>
          <p>
            By donating to our cause, you will be supporting yourself and your
            friend’s educational journey, empowering them with a centralized hub
            for learning materials and a thriving community of like-minded
            individuals. Every contribution, no matter the amount, will make a
            difference and be greatly appreciated. Together, we can ensure the
            sustainability and growth of our website, making a lasting impact on
            the educational experiences of countless Ethiopian students. To
            contribute, please contact the fundraising team, where you will find
            various options for securely submitting your donation. Thank you in
            advance for your support and for being a part of our vibrant
            community. Your contribution will enable us to continue serving
            Ethiopian students in or heading to IIT Roorkee, by conveying useful
            information, fostering knowledge sharing, and facilitating academic
            excellence. <br />
            <br /> Warm regards, 
          </p>
         
            <div className="img ">
          <img className="mb-1" src={Ethiopia}></img>
        </div>
        </p>

        
      </p>
      
    </div>
  );
}

export default Contribute;
