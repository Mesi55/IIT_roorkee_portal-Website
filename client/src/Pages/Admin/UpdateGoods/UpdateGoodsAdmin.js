import './UpdateGoodsAdmin.css'

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import axios from 'axios'

function UpdateGoodsAdmin() {


  const params = useParams();
  const id  = params.id

  const [updateGods, setUpdateGoods] = useState({
    user_item_name:"",
    user_item_price:"",
    user_item_description:"",
    params_id : id
  })

  const [Response, setResponse] = useState("")

  let formSubmitter = (e)=>{
    e.preventDefault()
   let goodsToSend = {
    user_item_name :updateGods.user_item_name,
    user_item_price: updateGods.user_item_price,
    user_item_description :updateGods.user_item_description,
    params_id :updateGods.params_id
   }




    let linkToSend = `http://localhost:6500/admin/updateGoods`
    axios({
    method:"POST",
    url : linkToSend,
    data:goodsToSend,
    // headers: {"Content-Type": "multipart/form-data" }
  }).then((res)=>{
    setResponse(res.data)
  })
  // console.log(goodsToSend)
  }

// console.log(updateGods.params_id)
  let handleChange = (e) => {
    switch (e.target.name) {

      case "user_item_name":
        setUpdateGoods((pre) => {
          return { ...pre, user_item_name: e.target.value };
        });
        break;
      case "user_item_price":
        setUpdateGoods((pre) => {
          return { ...pre, user_item_price: e.target.value };
        });
        break;
      case "user_item_description":
        setUpdateGoods((pre) => {
          return { ...pre, user_item_description: e.target.value };
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
<h1 className="h1">Update User Goods</h1>
      <form onSubmit={formSubmitter} className=" formContainer ">
        <div className="m-2 ">
          <div className='m-2'>
            <label htmlFor="user_item_name text-center">Iteam Name</label>
            <input type="text" name="user_item_name" id="user_item_name"    onChange={handleChange} />
          </div>
          <div className='m-2'>
            <label htmlFor="user_item_price">Item Price</label>
            <input type="text" name="user_item_price" id="user_item_price"    onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="user_item_description">user description</label>
            <textarea type="text" name="user_item_description" id="user_item_description"    onChange={handleChange} />
            <Button type="submit" className="">Update</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
}

export default UpdateGoodsAdmin