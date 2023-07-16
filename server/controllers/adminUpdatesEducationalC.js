import connectionInfo from "../server.js";


let updateEducationAll = (req,res)=>{

   const {course_code,course_name,course_given_by,Department,document_path,document_type,Student_study_section,params_id} = req.body
  if(Student_study_section === "Btech"){
    let updatedBtech = `UPDATE educationaldocument SET Department='${Department}',Section='Btech',Document_type='${document_type}',Course_Code='${course_code}',Course_name='${course_name}',Course_given_by='${course_given_by}',Document_path='${document_path}' WHERE Document_id='${params_id}' `;
    connectionInfo.query(updatedBtech,(err)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: "Btech Section updated successfully",
                redirect:"/admin",
                message:"Click Here Go Back To Admin Page"
            })
        }
       })
    
  }else if(Student_study_section === 'Mtech'){
    let updatedMtech = `UPDATE educationaldocument SET Department='${Department}',Section='Mtech',Document_type='${document_type}',Course_Code='${course_code}',Course_name='${course_name}',Course_given_by='${course_given_by}',Document_path='${document_path}' WHERE Document_id='${params_id}' `;
    connectionInfo.query(updatedMtech,(err)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: "Mtech Section updated successfully",
                redirect:"/admin",
                message:"Click Here Go Back To Admin Page"
            })
        }
       })
  }else{
    let updatedPhd = `UPDATE educationaldocument SET Department='${Department}',Section='Phd',Document_type='${document_type}',Course_Code='${course_code}',Course_name='${course_name}',Course_given_by='${course_given_by}',Document_path='${document_path}' WHERE Document_id='${params_id}' `;
    connectionInfo.query(updatedPhd,(err)=>{
        if(err){
            // console.log(err)
        }else{
            res.send({
                successMessage: "PhD Section updated successfully",
                redirect:"/admin",
                message:"Click Here Go Back To Admin Page"
            })
        }
       })
  }
      
}





export default updateEducationAll



 








