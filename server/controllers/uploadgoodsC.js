import connectionInfo from "../server.js"
let uploadGoods = (req,res)=>{
    if(req.file){
        let picutreFileName = req.file.filename
        const {item_name,item_price,item_description,user_id,user_firstName,user_lastName,user_IndianNumber,user_whatsappNumber} = req.body
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    if(
        item_name==""||
        item_price==""||
        item_description==""
    ){
        res.send({
            successMessage: "All Input Fields are Required To Be Filled",
            redirect: "/signup",
            message:"click here to go to signup page"
          });
    }else{
        let nameValidator = /^[a-zA-Z\s]+$/;
        if(
            !nameValidator.test(item_name) ||
            !nameValidator.test(item_description)
        ){

            return res.send({
                successMessage: `Name  and description should only contain Alphabets`,
                redirect: "/sellGoods",
                message : "Click Here To Try Again"
              });
        }else{

            const numberValidator = /^[0-9]+$/;
            if(!numberValidator.test(item_price)){
                return res.send({
                    successMessage: `Price should only be in Digits`,
                    redirect: "/sellGoods",
                    message : "Click Here To Try Again"
                  });
            }else{
                let goodsToSell = `INSERT INTO market(userInfo_ID,user_firstName,user_firstLast,user_IndianNumber,user_whatsappNumber,item_name,item_price,item_description,item_photo,status_check,date_of_notification) VALUES (?)`
                let value =[user_id,user_firstName,user_lastName,user_IndianNumber,user_whatsappNumber,item_name,item_price,item_description,picutreFileName,"true",dateString]
                // console.log(value)
                connectionInfo.query(goodsToSell,[value],(err,result,field)=>{
                  if(err){
                    //   console.log(err)
                  }else{
                      res.send({
                          successMessage: "File Successfully Uploaded",
                          redirect: "/dashbord",
                          message:"Click Here To Go To Home page"
                          })
                  }
                })
            }
        }



     
    }
    }
}

export default uploadGoods