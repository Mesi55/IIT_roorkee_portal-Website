import React, { useEffect, useState } from 'react'
import './MtechSecitonFileDisplay.css'
import axios from 'axios'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function MtechSecitonFileDisplay() {
 const [Mtech, setMtech] = useState([])
 const [searchApiData, setsearchApiData] = useState([])
 const [filterVal, setfilterVal] = useState('')
  const dataFromBtech = async () => {
    let urlForMtech = "http://localhost:6500/user/getMtechDoc"
    try {
      const getMtechResource = await axios.get(urlForMtech);

      let converted = JSON.parse(JSON.stringify(getMtechResource.data.data));

      setMtech(()=>converted);
      setsearchApiData(()=>converted)
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  useEffect(()=>{
    dataFromBtech()
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

const handleFilter =(e)=>{
  if(e.target.value==""){
    setMtech(searchApiData)
  }else{
   const filterResult = searchApiData.filter(item => item.Course_Code.toLowerCase().includes(e.target.value.toLowerCase()))
   setMtech(filterResult)
  }
  setfilterVal(e.target.value)
}
  return (
 
    <div className="mx-md-5 mx-sm-0 my-2">
    {/* ------------------------------------------------------- */}
    <TableContainer className="toShowStaffForward m-2" component={Paper}>
          <h1 className="TitleFromStaff send_Notification">M-Tech Resources</h1>
          <div>
          <input id='searchPhd' placeholder='Search using course Code' value={filterVal} onInput={(e)=>handleFilter(e)}></input>
        </div>
        <Table className="tables justify-content-between" aria-label="customized table">
  <TableHead className="background">
    <TableRow className="backgrounds d-md-flex ">
              <div>
              <StyledTableCell className="border" align="center">Department</StyledTableCell>
                <StyledTableCell className="border" align="center">Course Name</StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="center">Course Given By</StyledTableCell>
                <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                
              </div>
              <div className=''>
                <StyledTableCell className="border " align="center">Document Type</StyledTableCell>
                <StyledTableCell className="border" align="center">Date Of Upload</StyledTableCell>
                  
                </div>
                   <div>
                <StyledTableCell className="border" align="left">Document(for download, click on the file)</StyledTableCell>
              </div>
              </TableRow>
            </TableHead>
            {Mtech.map((data,j) => {
          let staffDataDisplay = (
            <TableBody className="" key={j}>
            <StyledTableRow className="backgrounds d-md-flex d-sm-block  ">
              <div className="table-column ">
                  <StyledTableCell className="border" align="center">{data.Department}</StyledTableCell>
                  <StyledTableCell align="center">{data.Course_name}</StyledTableCell>
                </div>
                <div className="table-column mx-md-3">
                <StyledTableCell className="border" align="center">{data.Course_given_by}</StyledTableCell>
                  <StyledTableCell  align="center">{data.Course_Code}</StyledTableCell>
                </div>
                
                
                <div className="table-column">
                <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                <StyledTableCell className="border" align="center">{data.Date_of_file_upload}</StyledTableCell>
                </div>
                  <StyledTableCell className="link"   align="center"  style={{ width: "30%" }}>
                  <a className="pdf-link" href={`http://localhost:6500/${data.Document}`}  target='_self'>{data.Document}</a>
              </StyledTableCell>
                </StyledTableRow>
            </TableBody>
          )
          return staffDataDisplay;
        })}
          </Table>
        </TableContainer>
        </div>
  )
}

export default MtechSecitonFileDisplay



