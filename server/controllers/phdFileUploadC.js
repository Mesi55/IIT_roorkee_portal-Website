import connectionInfo from "../server.js"
let uploadPhdFile = (req,res)=>{

    if(req.file){
        let pdfFileName = req.file.filename
        let phdFilePath = req.file.path
        const {user_id,user_department,Document_type,Course_Code,Course_name,Course_given_by} = req.body
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    if(
        Course_Code==""||
        Course_name==""||
        Course_given_by==""
    ){
        res.send({
            successMessage: "All Input Fields are Required To Be Filled",
            redirect: "/signup",
            message:"click here to go to signup page"
          });
    }else{
        let upperCaseCourseCode = Course_Code.toUpperCase()
        let upperCaseCourseName = Course_name.toUpperCase()
        let upperCaseCourseGivenBy = Course_given_by.toUpperCase()
        let upperCaseUserDepartment = user_department.toUpperCase()
        let upperCaseDocumentType = Document_type.toUpperCase()
       
        let value =[user_id,"Phd",upperCaseUserDepartment,upperCaseDocumentType,upperCaseCourseCode,upperCaseCourseName,upperCaseCourseGivenBy,pdfFileName,phdFilePath,dateString]
        let phdDoc = `INSERT INTO educationaldocument(userInfo_ID,Section,Department,Document_type,Course_Code,Course_name,Course_given_by,Document,Document_path,Date_of_file_upload) VALUES (?)`
          connectionInfo.query(phdDoc,[value],(err,result,field)=>{
               res.send({
            successMessage: "File Successfully Uploaded",
            redirect: "/dashbord",
            message:"Click Here To Go To Home page",
            error:"If you encounter any issues while uploading a file, please feel free to reach out to us via email at rediat_ta@iitr.ac.in. We are here to assist you with any queries or concerns you may have."
               })
          })
    }
    }
}

export default uploadPhdFile