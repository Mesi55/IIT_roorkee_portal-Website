import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Admin.css'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from 'react-bootstrap'
// import { Link } from '@mui/material';
import {Link} from 'react-router-dom'
function Admin() {
  const [userForAdmin, setUserForAdmin] = useState([])
  const [searchApiData, setSearchApiData] = useState()
  const [goods, setgoods] = useState([])
  const [notifications, setnotifications] = useState([])
  const [Phd, setPhd] = useState([])
  const [Btech, setBtech] = useState([])
  const [Mtech, setMtech] = useState([])

  let urlUsers = `http://localhost:6500/admin/adminManagerUsers`
  let urlNotification = `http://localhost:6500/admin/adminNotification`
  let urlMarket = `http://localhost:6500/admin/adminGoods`
  let urlMtech =`http://localhost:6500/admin/adminMtech`
  let urlBtech =`http://localhost:6500/admin/adminBtech`
  let urlPhd =`http://localhost:6500/admin/adminPhd`


  const usersForAdmin = async () => {
    try {
      const responceForUsers = await axios.get(urlUsers);
      setUserForAdmin(responceForUsers.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const goodsForAdmin = async () => {
    try {
      const responceForMarket = await axios.get(urlMarket);
      setgoods(responceForMarket.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const notificationForAdmin = async () => {
    try {
      const responceForNotification = await axios.get(urlNotification);
      setnotifications(responceForNotification.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const phdForAdmin = async () => {
    try {
      const responceForPhd = await axios.get(urlPhd);
      setPhd(responceForPhd.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  const mtechForAdmin = async () => {
    try {
      const responceForMtech = await axios.get(urlMtech);
      setMtech(responceForMtech.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  const btechForAdmin = async () => {
    try {
      const responceForBtech = await axios.get(urlBtech);
      setBtech(responceForBtech.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  useEffect(()=>{
    usersForAdmin()
    goodsForAdmin()
    notificationForAdmin()
    btechForAdmin()
    mtechForAdmin()
    phdForAdmin()
    window.scrollTo(0, 0);
    },[])
// * Table section from material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




//* For Delete 
async function toDeleteGoods(id) {
  let url = `http://localhost:6500/admin/deleteGoods/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  goodsForAdmin()
}
async function toDeleteUserInfo(id) {
  let url = `http://localhost:6500/admin/deleteUserInfo/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  usersForAdmin()
}
async function toDeleteEmailOnly(id) {
  let url = `http://localhost:6500/admin/deleteUserEmailOnly/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  usersForAdmin()
}
//* For Delete 
async function toDeleteNotification(id) {
  let url = `http://localhost:6500/admin/deleteNotification/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  notificationForAdmin()
}

//* For Delete 
async function toDeleteBTech(id) {
  let url = `http://localhost:6500/admin/deleteBtech/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  btechForAdmin()
}
 async function toDeleteMTech(id) {
  let url = `http://localhost:6500/admin/deleteMtech/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  mtechForAdmin()
}

 async function toDeletePhd(id) {
  let url = `http://localhost:6500/admin/deletePhd/${id}`
   await axios({
      method:'DELETE',
      url,
    })
    phdForAdmin()
}

// console.log(userForAdmin)
  return (
    <>
        <div className="my-2 ">
    {/* ------------------------------------------------------- */}
        <TableContainer className="toShowStaffForward" component={Paper}>
           
          <h1  className="h1 TitleFromStaff">USERS INFORMATION</h1>
          <div>
        
        </div>
          <Table  aria-label="customized table"  className="tables " >
            <TableHead className="background">
              <TableRow className="background d-md-flex ">
                <div >
                <StyledTableCell className="border" align="center">User ID</StyledTableCell>
                  <StyledTableCell className="border" align="center">user first name </StyledTableCell>
                  <StyledTableCell className="border" align="center">user last name </StyledTableCell>
               
                </div>
              <div>
              <StyledTableCell align="center">date of registration</StyledTableCell>
                  <StyledTableCell className="border" align="center">user_role </StyledTableCell>
                  <StyledTableCell className="border" align="center">user Department</StyledTableCell>
              </div>
             <div>
          
                <StyledTableCell className="border" align="center">user Indian number</StyledTableCell>
                  <StyledTableCell className="border" align="center">user Whatsapp number</StyledTableCell>
                  <StyledTableCell className="border" align="center">user OTP </StyledTableCell>
             </div>

                <div>
               
                <StyledTableCell className="border" align="center">user email for Profile </StyledTableCell>
                <StyledTableCell className="border" align="center">user email  </StyledTableCell>
                  <StyledTableCell className="border" align="center">user password </StyledTableCell>
                  <StyledTableCell className="border" align="center">user_status </StyledTableCell>
                <StyledTableCell className="border" align="center">user study section </StyledTableCell>
                </div>
            
              </TableRow>
            </TableHead>
            {userForAdmin.map((data,j) => {
          let staffDataDisplay = (
            <TableBody className="" key={j}>
              <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
                <div className="table-column ">
                  {/* <div > */}
                    <StyledTableCell className="border" align="center">{data.userInfo_ID}</StyledTableCell>
                  <StyledTableCell align="center">{data.user_first_name}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_last_name}</StyledTableCell>
                  <StyledTableCell align="center">{data.date_of_registration}</StyledTableCell>
                {/* </div> */}
                </div>
           
              <div>
                  {/* <div className="table-column "> */}
                    <StyledTableCell align="center">{data.user_role}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_Department}</StyledTableCell>
                    <StyledTableCell align="center">{data.user_Indian_number}</StyledTableCell>
                     <StyledTableCell  align="center">{data.user_whatsapp_number}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_OTP}</StyledTableCell>
                
                    <StyledTableCell align="center">{data.user_email_forProfile}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_email}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_email}</StyledTableCell>
                  <StyledTableCell align="center">{data.user_password}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_status}</StyledTableCell>
                    <StyledTableCell align="center">{data.user_study_section}</StyledTableCell>
                 
              </div>
             
             
                </StyledTableRow>
             
                <div className='d-flex mx-0'>
                <Button onClick={()=>toDeleteUserInfo(data.userInfo_ID)} className='btn-danger m-md-3 m-1'>Delete completely</Button>
                <Button onClick={()=>toDeleteEmailOnly(data.userInfo_ID)} className='btn-danger m-md-3 m-1'>Delete Email Only</Button>
           
                <Link className="notificationSubmit m-md-3 m-1 " to={`/updateUserInfoAdmin/${data.userInfo_ID}`}>Update</Link>
            
               
                </div>
               
            </TableBody>
          )
          return staffDataDisplay;
        })}
          </Table>
        </TableContainer>
        <hr/>
        <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff h1">USERS UPLOADED GOODS</h1>
           <div>
         
         </div>
           <Table className="tables justify-content-between" aria-label="customized table">
             <TableHead className="background">
              <TableRow className="background d-md-flex">
                <div className=''>
                <StyledTableCell className="border px-md-5 py-md-4" align="center">Date of notification</StyledTableCell>
                 <StyledTableCell align="center ">Item description</StyledTableCell>
                 <StyledTableCell className="border px-md-5 " align="center">Item id</StyledTableCell>
                </div>
                <div>
                <StyledTableCell className="border px-md-5 " align="center">Item name</StyledTableCell>
                 <StyledTableCell className="border px-md-5 " align="center">Item photo name</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">item price</StyledTableCell>
                {/* </div>
                <div> */}
                <StyledTableCell className="border px-md-5" align="center">status check</StyledTableCell>
                 <StyledTableCell className="border px-md-3" align="center">userInfo ID</StyledTableCell>
                </div>
                <div>
                <StyledTableCell className="border px-md-4" align="center">user Indian Number</StyledTableCell>
                 <StyledTableCell className="border px-md-4" align="center">user Last name</StyledTableCell>
                 <StyledTableCell className="border px-md-3" align="center">user first name</StyledTableCell>
                 <StyledTableCell className="border px-md-3" align="center">user whatsapp Number</StyledTableCell>
                
                </div>
               
                 
                
               
               </TableRow>
             </TableHead>
             {goods.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
               <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
               <div className="table-column ">
                   <StyledTableCell className="border" align="center">{data.date_of_notification}</StyledTableCell>
                   
                   <StyledTableCell align="center">{data.item_description}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.item_id}</StyledTableCell>
                 </div>
                 <div className="table-column mx-md-3">
                 <StyledTableCell  align="center">{data.item_name}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.item_photo}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.item_price}</StyledTableCell>
                 </div>
                 <div className="table-column">
                 <StyledTableCell className="border"  align="center">{data.status_check}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.userInfo_ID}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_IndianNumber}</StyledTableCell>
                 </div>
                 <div className="table-column">
                    
                 <StyledTableCell className="border"  align="center">{data.user_firstLast}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_firstName}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_whatsappNumber}</StyledTableCell>
                 </div>
                
                   
                 
                  
                
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteGoods(data.item_id)} className='btn-danger m-3 px-5'>Delete</Button>
                 <Link className="notificationSubmit m-3" to={`/updateUserGoodsAdmin/${data.item_id}`}>Update</Link>
            

                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
        <hr/>
          <TableContainer className="toShowStaffForward m-2" component={Paper}>
           <h1 className="TitleFromStaff h1">USERS Notifications</h1>
           <div>
         </div>
         <Table className="tables tabel2  "  aria-label="customized table  mx-md-5">
             <TableHead className="background  mx-md-5">
              <TableRow className="background d-md-flex">
                <div>
                <StyledTableCell className="border px-md-5" align="center">notification ID</StyledTableCell>
                 <StyledTableCell align="center">userInfo ID</StyledTableCell>
                 <StyledTableCell className="border  px-md-5" align="center">user notification message</StyledTableCell>
                </div>
                <div>
                <StyledTableCell className="border px-md-5" align="center">Date of notification</StyledTableCell>
                 <StyledTableCell className="border  px-md-5" align="center">Notification By</StyledTableCell>
                </div>
             
               </TableRow>
             </TableHead>
             {notifications.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
               <StyledTableRow className="backgrounds  d-sm-block  ">
               <div className="mx-md-5">
               <StyledTableCell className="border px-md-5" align="center">{data.notification_id}</StyledTableCell>
                   <StyledTableCell align="center" className='px-md-5'>{data.userInfo_ID}</StyledTableCell>
                   <StyledTableCell className="border px-md-5 " align="center">{data.user_notification_message}</StyledTableCell>
                   <StyledTableCell  align="center" className='px-md-5'>{data.date_of_notification}</StyledTableCell>
                   <StyledTableCell className="border px-md-5"  align="center">{data.user_first_name}</StyledTableCell>
                 </div>
                  
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={() => toDeleteNotification(data.notification_id)} className='btn-danger btn-danger1 m-md-2'>Delete</Button>
                 
                 <Link className="notificationSubmit " to={`/updateNotification/${data.notification_id}`}>Update</Link>
                
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
         <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff h1">B-Tech Section</h1>
           <div>

         </div>
           <Table className="tables justify-content-between"aria-label="customized table">
             <TableHead className="background">
              <TableRow className="background  d-md-flex " >
                <div className=''>
                <StyledTableCell className="border px-md-5 " align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center" className='border px-md-5'>Course given by</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">Course name</StyledTableCell>
                  <StyledTableCell className="border px-md-5 " align="center">Date of file upload</StyledTableCell>
                  <StyledTableCell className="border py-4" align="center">Department</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">Document id</StyledTableCell>
                </div>
              
                <div>
                <StyledTableCell className="border px-md-5" align="center">Document path</StyledTableCell>
                <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">User info id</StyledTableCell>
                </div>
               
                
                
               </TableRow>
             </TableHead>
             {Btech.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
               <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
                 <div className="table-column ">
                 <StyledTableCell className="border" align="center">{data.Course_Code}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
              </div>
                 <div className="table-column ">
                 <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.userInfo_ID}</StyledTableCell>
              </div>
                  
                  
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteBTech(data.Document_id)} className='btn-danger btn-danger1 m-3'>Delete</Button>
                 
                 <Link className="notificationSubmit" to={`/updateBtechAdmin/${data.Document_id}`}>Update</Link>

                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
         <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff h1">M-Tech Section</h1>
           <div>

         </div>
           <Table  aria-label="customized table" className="tables justify-content-between" >
             <TableHead className="background">
              <TableRow className="background d-md-flex ">
                <div>
                <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center px-md-5">Course given by</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">Course name</StyledTableCell>
                 <StyledTableCell className="border px-md-3" align="center">Date of file upload</StyledTableCell>
                <StyledTableCell className="border px-md-5" align="center">Department</StyledTableCell>
                </div>
                <div>
                 <StyledTableCell className="border px-md-5" align="center">Document id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document path</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">Document type</StyledTableCell>
               <StyledTableCell className="border px-md-5" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">User info id</StyledTableCell>
               </div>
               
               </TableRow>
             </TableHead>
             {Mtech.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
               <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
               <div className="table-column ">
               <StyledTableCell className="border" align="center">{data.Course_Code}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                 </div>
                 <div className="table-column ">
                 <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.userInfo_ID}</StyledTableCell>
                 </div>
                
                 
                 
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteMTech(data.Document_id)} className='btn-danger btn-danger1 m-3 '>Delete</Button>
                 <Link className="notificationSubmit" to={`/updateMtechAdmin/${data.Document_id}`}>Update</Link>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
         <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff h1">Phd Section</h1>
           <div>

         </div>
         <Table className="tables  mx-md-3 justify-content-between" aria-label="customized table">
             <TableHead className="background">
              <TableRow className="background d-md-flex ">
                <div>
                <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center" className='px-md-5'>Course given by</StyledTableCell>
                 <StyledTableCell className="border" align="center">Course name</StyledTableCell>
                 <StyledTableCell className="border" align="center">Date of file upload</StyledTableCell>
                 <StyledTableCell className="border px-md-5" align="center">Department</StyledTableCell>
                </div>
                <div>
                <StyledTableCell className="border px-md-5" align="center">Document id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document path</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border" align="center">user info id</StyledTableCell>
                </div>

               </TableRow>
             </TableHead>
             {Phd.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
              <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
              <div className="table-column ">
              <StyledTableCell className="border" align="center">{data.Course_Code}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                 </div>
                 <div className="table-column ">
                    <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.userInfo_ID}</StyledTableCell>
                 </div>
                   
                 
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeletePhd(data.Document_id)} className='btn-danger btn-danger1 m-3'>Delete</Button>
             
                 <Link className="notificationSubmit" to={`/updatePhdAdmin/${data.Document_id}`}>Update</Link>

                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
        </div>
    </>
  )
}

export default Admin