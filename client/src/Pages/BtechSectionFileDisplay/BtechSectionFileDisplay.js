import React, { useEffect, useState } from "react";
import "./BtechSectionFileDisplay.css";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function BtechSectionFileDisplay() {
  const [Btech, setBtech] = useState([]);
  const [searchApiData, setsearchApiData] = useState([]);
  const [filterVal, setfilterVal] = useState("");
  const dataFromBtech = async () => {
    let urlForBtech = "http://localhost:6500/user/getBtechDoc";
    try {
      const getBtechResource = await axios.get(urlForBtech);

      let converted = JSON.parse(JSON.stringify(getBtechResource.data.data));

      setBtech(() => converted);
      setsearchApiData(() => converted);
    } catch (err) {
      // console.log({ "its error"});
    }
  };

  useEffect(() => {
    dataFromBtech();
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
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setBtech(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.Course_Code.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setBtech(filterResult);
    }
    setfilterVal(e.target.value);
  };
  return (
    <div className="mx-md-5 mx-sm-0 my-2 ">
      {/* ------------------------------------------------------- */}
      <TableContainer className="toShowStaffForward m-2" component={Paper}>
        <h1 className="TitleFromStaff send_Notification">B-Tech Resources</h1>
        <div>
          <input
            id="searchPhd"
            placeholder="Search using course Code"
            value={filterVal}
            onInput={(e) => handleFilter(e)}
          ></input>
        </div>
        <Table className="tables justify-content-between " aria-label="customized table">
  <TableHead className="background">
    <TableRow className="backgrounds d-md-flex ">
      <div className="table-column">
                <StyledTableCell className="border" align="center">
                  Department
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  Course Name
                </StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="center">
                  Course Given By
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  Course Code
                </StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="center">
                  Document Type
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  Date Of Upload
                </StyledTableCell>
              </div>
              <div>
                <StyledTableCell className="border" align="left">
                  Document(for download, click on the file)
                </StyledTableCell>
              </div>
            </TableRow>
          </TableHead>
          {Btech.map((data, j) => {
            let staffDataDisplay = (
              <TableBody className="mx-md-5" key={j}>
             <StyledTableRow className="backgrounds d-md-flex d-sm-block ">
        <div className="table-column ">
                <StyledTableCell className="border" align="center">
                  {data.Department}
                </StyledTableCell>
                  </div>
                  <div className="table-column ">
                <StyledTableCell align="center">
                  {data.Course_name}
                    </StyledTableCell>
                  <StyledTableCell className="border" align="center">
                  {data.Course_given_by}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data.Course_Code}
                </StyledTableCell>
                  </div>
                  <div className="table-column ">
                  <StyledTableCell className="border" align="center">
                  {data.Document_type}
                </StyledTableCell>
                <StyledTableCell className="border" align="center">
                  {data.Date_of_file_upload}
                </StyledTableCell>
                  </div>
               
                
                  <StyledTableCell className="link" align="center" style={{ width: "30%" }}>
                  <a  className="pdf-link"href={`http://localhost:6500/${data.Document}`} target="_self">
                    {data.Document}
                  </a>
                </StyledTableCell>
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

export default BtechSectionFileDisplay;

// {
//   Btech.map((data,j)=>{
//     console.log(data)
//      let display = (
//         <div>
//             <h2>{data.Course_Code}</h2>
//         </div>
//      )
//      return display
//   })

// }

// Department
// Course_name
// Course_given_by
// Course_Code
// Document_type
// Document
// Date_of_file_upload
