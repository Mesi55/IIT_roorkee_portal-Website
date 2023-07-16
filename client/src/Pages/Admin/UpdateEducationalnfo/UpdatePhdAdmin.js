import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './UpdateMtechAdmin.css'
function UpdatePhdAdmin() {
  const params = useParams();
  const id  = params.id
  const [educationalUpdates, seteducationalUpdates] = useState({
    course_code:"",
    course_name:"",
    course_given_by:"",
    Department:"",
    document_path:"",
    document_type:"",
    Student_study_section:"PhD",
    params_id : id
  })

  const [Response, setResponse] = useState()
  let formSubmitter = (e)=>{
    e.preventDefault()
    // let formData= new FormData()
    // formData.append("course_code",educationalUpdates.updateInfo)
    // formData.append("course_name",educationalUpdates.user_first_name)
    // formData.append("course_given_by",educationalUpdates.user_last_name)
    // formData.append("Department",educationalUpdates.user_email)
    // formData.append("document_path",educationalUpdates.user_email_forProfile)
    // formData.append("document_type",educationalUpdates.user_Department)
    // formData.append("user_info_id",educationalUpdates.user_Indian_number)
    // formData.append("document_id",educationalUpdates.user_password)
    let updateEducationFile = {
      course_code : educationalUpdates.course_code,
      course_name : educationalUpdates.course_name,
      course_given_by: educationalUpdates.course_given_by,
      Department:educationalUpdates.Department,
      document_path:educationalUpdates.document_path,
      document_type :educationalUpdates.document_type,
      Student_study_section:educationalUpdates.Student_study_section,
      params_id:educationalUpdates.params_id
      
  }
    // let linkToSend = `http://localhost:6500/admin/updatePhDhUserEducation`
    let linkToSend = `http://localhost:6500/admin/adminUpdateEducational`
    axios({
    method:"POST",
    url : linkToSend,
    data:updateEducationFile,
    headers: {"Content-Type": "multipart/form-data" }
  }).then((res)=>{
    setResponse(res.data)
  })
  }


  let handleChange = (e) => {
    switch (e.target.name) {

      case "course_code":
        seteducationalUpdates((pre) => {
          return { ...pre,
            course_code: e.target.value };
        });
        break;
      case "course_name":
        seteducationalUpdates((pre) => {
          return { ...pre,
            course_name: e.target.value };
        });
        break;
      case "course_given_by":
        seteducationalUpdates((pre) => {
          return { ...pre,
            course_given_by: e.target.value };
        });
        break;
      case "Department":
        seteducationalUpdates((pre) => {
          return { ...pre,
            Department: e.target.value};
        });
        break;
      case "document_path":
        seteducationalUpdates((pre) => {
          return { ...pre,
            document_path: e.target.value};
        });
        break;
      case "document_type":
        seteducationalUpdates((pre) => {
          return { ...pre,
            document_type: e.target.value};
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
<h1 className="h1">PhD Section Update</h1>
<form onSubmit={formSubmitter} className="formContainer">
        <div className="m-2">
          <div className="">
            <label htmlFor="course_code">Course Code</label>
            <input
              type="text"
              name="course_code"
              id="code"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="course_name">course name</label>
            <input type="text" name="course_name" id="course_name"    onChange={handleChange}/>
          </div>
        </div>
        <div className="m-2">
          <div className="">
            <label htmlFor="course_given_by">course given by</label>
            <input type="text" name="course_given_by" id="course_given_by"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="Department">Department</label>
            <input type="text" name="Department" id="Department"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="document_path">document path</label>
            <input type="text" name="document_path" id="document_path"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="document_type">document type</label>
            <input type="text" name="document_type" id="document_type"    onChange={handleChange} />
          </div>
          <div>
            <Button type="submit" className="">Update</Button>
          </div>
        </div>
      </form>
    
    </div>

   

  )
}
}

export default UpdatePhdAdmin