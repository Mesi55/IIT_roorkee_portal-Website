import "./StudentInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState([]);
  const [searchApiData, setsearchApiData] = useState([]);
  const [filterVal, setfilterVal] = useState("");
  let urlForStaff = "http://localhost:6500/user/getStudentInfo";

  const dataFromStaffes = async () => {
    try {
      const responceForStudentInfo = await axios.get(urlForStaff);

      let converted = JSON.parse(JSON.stringify(responceForStudentInfo.data));

      setStudentInfo(() => converted.data);
      setsearchApiData(() => converted.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  useEffect(() => {
    dataFromStaffes();
    window.scrollTo(0, 0);
  }, []);

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  //  *end of material UI table
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setStudentInfo(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.user_Department
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setStudentInfo(filterResult);
    }
    setfilterVal(e.target.value);
  };
  return (
    <div className="mx-md-5 mx-sm-0 my-2 ">
      {/* ------------------------------------------------------- */}
      <TableContainer className="toShowStaffForward m-2" component={Paper}>
        <h1 className="TitleFromStaff send_Notification">Student Information</h1>
        <div>
          <input
            id="searchPhd"
            placeholder="Search using Department Name"
            value={filterVal}
            onInput={(e) => handleFilter(e)}
          ></input>
        </div>
        <Table aria-label="customized table" className="tables d-sm-inline ">
          <TableHead className="background">
            <TableRow className="background d-md-flex">
              <div className="">
                <StyledTableCell className="border" align="center">
                  Student First Name
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  Student Last Name
                </StyledTableCell>
              </div>

              <div className="">
                <StyledTableCell className="border" align="center">
                  Student Email
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  Student Whatsapp Number
                </StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="center">
                  {" "}
                  Student Indian Number
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  {" "}
                  Student Department
                </StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="center">
                  Student Study Section
                </StyledTableCell>

                <StyledTableCell className="border" align="center">
                  Student Account Status
                </StyledTableCell>
              </div>
            </TableRow>
          </TableHead>

          {studentInfo.map((data, j) => {
  let staffDataDisplay = (
    <TableBody key={j} className="secondtable">
      <StyledTableRow className="background mx-5 d-md-flex d-sm-block">
        <div className="mx-5">
          <StyledTableCell className="border" align="center">
            {data.user_first_name}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.user_last_name}
          </StyledTableCell>
        </div>
        <div className="mx-5">
          <StyledTableCell className="border" align="center">
            {data.user_email_forProfile}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.user_whatsapp_number}
          </StyledTableCell>
        </div>
      
        <div className="mx-md-3">
          <StyledTableCell className="border mx-5" align="center">
            {data.user_Indian_number}
          </StyledTableCell>
          <StyledTableCell className="border" align="center">
            {data.user_Department}
          </StyledTableCell>
        </div>
        <div className="mx-md-3">
          <StyledTableCell align="center">
            {data.user_study_section}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.user_status}
          </StyledTableCell>
        </div>
      </StyledTableRow>
    </TableBody>
  );
  return staffDataDisplay;
})}
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudentInfo;
