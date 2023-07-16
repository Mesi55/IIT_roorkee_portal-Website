import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './sellGoods.css'
import {Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
function UploadSellGoods() {
 const [Response, setResponse] = useState("")
 const [dataGoods, setGoods] = useState({
  user_id:"",
  item_name:"",
  item_price:"",
  item_description:"",
  item_photo:"",
  user_firstName:"",
  user_firstLast:"",
  user_IndianNumber:"",
  user_whatsappNumber:""
 }) 
 const [userGoods, setuserGoods]= useState([])

 let {user} = useSelector((state)=>state.auth)
 let url = `http://localhost:6500/user/uploadGoods`;
 let user_id=user.userInfo_ID;
 let  user_firstName = user.user_first_name
 let  user_firstLast = user.user_last_name
 let  user_IndianNumber = user.user_Indian_number
 let  user_whatsappNumber = user.user_whatsapp_number


  let formSubmitter =  (e)=>{
    e.preventDefault()
    let formData = new FormData()
    formData.append("item_name",dataGoods.item_name)
    formData.append("item_price",dataGoods.item_price)
    formData.append("item_description",dataGoods.item_description)
    formData.append("item_photo",dataGoods.item_photo)
    formData.append("user_id",dataGoods.user_id)
    formData.append("user_firstName",dataGoods.user_firstName)
    formData.append("user_lastName",dataGoods.user_firstLast)
    formData.append("user_IndianNumber",dataGoods.user_IndianNumber)
    formData.append("user_whatsappNumber",dataGoods.user_whatsappNumber)
      axios({
          method:"POST",
          data:formData,
          url,
          headers: {"Content-Type": "multipart/form-data" }
      }).then((res)=>{
          setResponse(res.data)
      }).catch((err)=>{
        // console.log(err)
      })
  }

  let handleChange = (e) => {
    switch (e.target.name) {
      case "item_name":
        setGoods((pre) => {
          return { ...pre, item_name: e.target.value };
        });
        break;
      case "item_price":
        setGoods((pre) => {
          return { ...pre, item_price: e.target.value };
        });
        break;
      case "item_description":
        setGoods((pre) => {
              return { ...pre, 
                item_description: e.target.value,
                user_id : user_id,
                user_firstName:user_firstName,
                user_firstLast:user_firstLast,
                user_IndianNumber:user_IndianNumber,
                user_whatsappNumber:user_whatsappNumber
              };
        });
        break;
      case "item_photo":
        setGoods((pre) => {
          return { ...pre,
            item_photo: e.target.files[0]};
        });
        break;
      default:
        break;
    }
  };
  let singleUserId=user.userInfo_ID
  async function usersGoodsD() {
    let url2 = `http://localhost:6500/user/getUserGoods/${singleUserId}`;
     try {
      let response = await axios.get(url2)
      setuserGoods(response.data.singleData)
     } catch (error) {
      
     }
  }

  // console.log(userGoods)

  useEffect(() => {
    usersGoodsD();
  }, []);

     //* For Delete
     async function  toDelete(id) {
      let deleteURL =  `http://localhost:6500/user/deleteUserGoods/${id}`;
     await axios({
        method: "DELETE",
        url: deleteURL,
      });
      usersGoodsD();
    }



if(Response){
  return(
<div className="pageNotFound my-5 ">
        <h1 className="thankYou">{Response.successMessage}</h1>
        <a className="thankYouAnch" href={`${Response.redirect}`}>
          {Response.message}
        </a>
      </div> 
  )
}else{
  return (
    <>
    <div className='d-md-flex  flex-sm-row-reverse justify-content-center '>
    <div className='notePartsell  h-100 col-md-4 col-sm-12  '>
       <h1 className='animate__animated animate__rubberBand animate__repeat-3 p-2 '>Please..</h1>
          <ul className='forUl'>
            <li>Fill all Input Fields </li>
            <li>Check Item Name Before Upload</li>
            <li>Check Item Price Before Upload (number value only)</li>
            <li>If your giving it for free put "0" for price</li>
            <li>Check Item Description Before Upload</li>
            <li>Make sure your File Is In Image(png or jpg) Format Before Upload</li>
            <li>For better view,Image Size Should be 286px width by 150px height</li>
            <ul>
                   <h5>You can click the following button to Crop your Image for the required size</h5>
                   <Link to="https://imageresizer.com/crop-image">

                <Button className='m-3'>Crop Image</Button>
                   </Link>
                   <Link to="/buyGoods">
                  <br />
                <Button className='m-3'> Check Out Goods To Buy</Button>
                   </Link>
               </ul>
          </ul>
   </div>
  <div className="col-md-6">
  <div className="py-5 align-items-center">
    <div className="form_wrapperB mx-auto col-sm-12 col-md-8 p-3 d-flex flex-column  h-100">
      <p className="p11">Upload Goods To Sell</p>
      <form onSubmit={formSubmitter} encType="multipart/form-data">
        <div className="FLname d-flex">
        </div>
        <input
        required
          className="in11"
          onChange={handleChange}
          name="item_name"
          autoComplete="new-password"
          type='text'
          placeholder="Please Pass Item Name"
        />
        <input
        required
          className="in11 mt-4"
          onChange={handleChange}
          name="item_price"
          autoComplete="new-password"
          type="text"
          placeholder="Please Pass Item Price in indian rupee"
        />
        <textarea
        id='forTextArea'
           maxLength='123'
           required
          className="in11 mt-4"
          onChange={handleChange}
          name="item_description"
          autoComplete="new-password"
          type="text"
          placeholder="Please Pass description about the item in less than 123 characters including space"
        />
        <div>
          <label className="label" htmlFor="fileUpload">
          Select Image File
          </label>
        <input
          id="fileUpload"
          required
          className="in11 mt-4"
          onChange={handleChange}
          name="item_photo"
          autoComplete="new-password"
          type="file"
          accept="image/*"
        />
        </div>
        <button className="btnSign">Upload</button>
      </form>
    </div>
  </div>
</div>

   
   
  </div>
  <h2 className="yn container my-3">Posted Notifications By You</h2>
        {userGoods.map((data, i) => {
          let yourNotification = (
            <div
              key={i}
              className=" m-5 rounded border border-warning d-flex justify-content-around container mx-auto bg-white"
            >
              <h2 className="p-2">
                <b>Item Name</b> : {data.item_name} |{" "}
                <b>Item Price</b> : {data.item_price}{" "}
              </h2>
              <Button
                onClick={() => toDelete(data.item_id)}
                variant="danger"
              >
                Delete Post
              </Button>
            </div>
          );
          return yourNotification;
        })}


  </>
   
  )
}
 
}

export default UploadSellGoods