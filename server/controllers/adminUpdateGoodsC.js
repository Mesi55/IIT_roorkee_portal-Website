import connectionInfo from "../server.js";
let updateGoodsByAdmin = (req,res)=>{
    const {params_id,user_item_name,user_item_price,user_item_description} = req.body;
   let updateGoods= `UPDATE market SET item_name='${user_item_name}',item_price='${user_item_price}',item_description='${user_item_description}' WHERE item_id=${params_id}`;
   connectionInfo.query(updateGoods,(err)=>{
    if(err){
        // console.log(err)
    }else{
        res.send({
            successMessage: "Goods updated successfully",
            redirect:"/admin",
            message:"Click Here Go Back To Admin Page"
        })
    }
   })

}

export default updateGoodsByAdmin