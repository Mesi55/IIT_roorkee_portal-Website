import React from 'react'
import './Developers.css'
import Ethiopia from '../../Images/countryFlags/Ethiopia_flag.png'
import mesy from '../../Images/DevsPhoto/MesayDesalegn.jpeg'
import Rediat from '../../Images/DevsPhoto/RediatTerefe.jpeg'
import sami from'../../Images/DevsPhoto/SamsonMeseret.jpeg'
function Developers() {
  return (
    <div className='vh-200'>
    <div className='container'>
            <img className='m-4' src={Ethiopia}></img>
    </div>
    <div className='container'>
        <h3 className=''> Developer's Message</h3>
       
        <p className='contributionStyling p-4'>
        <h6 className='text-start'>Dear Ethiopian Community, </h6>
We are thrilled to introduce you to our new website, a platform designed specifically for the success and empowerment of our vibrant Ethiopian student community In IIT Roorkee. This website is a culmination of our dedication and commitment to providing a resource-sharing platform that caters to the unique needs and aspirations of Ethiopian students worldwide.
Our goal is to create an inclusive space where Ethiopian students can come together to exchange knowledge, share educational resources, and connect with like-minded individuals. Whether you're seeking study materials, want to discuss academic topics, or even explore opportunities for buying and selling goods related to your studies, our website has been tailored to cater to your specific requirements.
We understand that access to quality education and relevant resources is essential for the academic growth and success of Ethiopian students. Therefore, we have created a user-friendly platform that promotes seamless navigation, efficient resource sharing, and meaningful interactions. You will find a diverse range of educational materials, ranging from textbooks and lecture notes to practice exams and study guides, all contributed by fellow Ethiopian students who understand the challenges and triumphs of our academic journey.
In addition to resource sharing, our website also features a robust notification system that keeps you informed about the latest updates, events, and opportunities within our community. You'll never miss an important announcement or a chance to engage in educational initiatives that can enhance your learning experience.
Furthermore, we are proud to introduce our buy and sell page, specifically designed to facilitate the exchange of academic-related goods. Whether you're looking to sell textbooks, purchase scientific equipment, or even connect with tutors and mentors, this page serves as a platform to connect you with fellow students and educators who can meet your specific needs.
We invite you to explore our website, join our community, and actively contribute to the success of Ethiopian students globally. Your participation, knowledge-sharing, and engagement will shape the future of this platform and ensure its continued growth and relevance.
As developers, we are committed to continuously improving and enhancing the website based on your feedback and suggestions. We encourage you to share your thoughts, ideas, and any issues you encounter, as your input is invaluable in shaping a platform that truly serves our community's needs.
We are thrilled to extend this transformative experience to our fellow Ethiopians embarking on their IIT journey. As a testament to our unwavering commitment, we are excited to offer the complete source code of our website, enabling you to delve into the underlying technology, explore its intricacies, and learn from it. We wholeheartedly dedicate ourselves to providing any assistance you may require throughout this exciting journey. Here's to nurturing a vibrant community of knowledge-sharing and fostering collaborative synergy. Cheers!
</p>

</div>

<div className='contributionStyling2 akafiDev container mb-4'>
<h3 className='m-3 p-4 container'><a href='https://github.com/Dubnationrediat/iit_roorkee_portal_retouch'>Click Here For Source Code</a></h3> 
<i className='text-dark font-weight-bold'>Together, let us celebrate the successes of Ethiopian students, foster a supportive learning environment, and create a legacy of academic excellence that inspires future generations.</i>
    <div className='d-flex justify-content-between akafiDev'>
    <div>
<img className='mesiEdit m-3' src={mesy}></img>
<h6 className='text-center m-3'>Mesay Desalegn </h6>
<h6 className='m-3'>For Github link:<a href='https://github.com/Mesi55?tab=repositories'> Click hear</a>       
</h6>
<h6 className='m-3'>
For Personal website: <a href='https://mesay-d.com/'>Click hear</a>  
</h6>
    </div>
    <div>
<img className='samiEdit m-3' src={sami}></img>
<h6 className='text-center m-3 '>Samson Meseret </h6>
<h6 className='m-3'>For Github link:<a href='https://github.com/samsonmeseret'> Click hear</a>       
</h6>
<h6 className='m-3'>
For Personal website: <a href='https://samicoca.netlify.app/'>Click hear</a>  
</h6>
<h2 className='text-center m-5after '>PROUDLY ETHIOPIAN!</h2>
    </div>
    <div>
<img className='RediatEdit m-3' src={Rediat}></img>
<h6 className='text-center m-3'>Rediat Terefe</h6>
<h6 className='m-3'>For Github link:<a href='https://github.com/Dubnationrediat?tab=repositories'> Click hear</a>       
</h6>
<h6 className='m-3'>
For Personal website: <a href='https://reddubnation.com/'>Click hear</a>  
</h6>

    </div>
    </div>
</div>
</div>
  )
}

export default Developers