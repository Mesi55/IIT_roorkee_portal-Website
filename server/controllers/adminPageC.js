import connectionInfo from "../server.js"
let allUsers = `SELECT * FROM userinfo`
let allNotification =`SELECT * FROM notifications`
let allGoods = `SELECT * FROM market`
let bTech = `SELECT * FROM educationaldocument WHERE section = "Btech" `
let mTech = `SELECT * FROM educationaldocument WHERE section = "Mtech"`
let pTech =`SELECT * FROM educationaldocument WHERE section = "Phd"`

let forAdmin_allUsers = (req,res)=>{
    connectionInfo.query(allUsers,(err,result,field)=>{
        if(err){
            // console.log(err)
        }else{
           return res.send(
            result
           )
        }
    })
}
let forAdmin_allNotification = (req,res)=>{
    connectionInfo.query(allNotification,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
          return  res.send(
            result
           )
        }
    })
}

let forAdmin_allGoods = (req,res)=>{
    connectionInfo.query(allGoods,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
          return  res.send(
            result
           )
        }
    })

  
}

let forAdmin_education_phd= (req,res)=>{
    connectionInfo.query(pTech,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
          return  res.send(
            result
           )
        }
    })
}
let forAdmin_education_Mtech= (req,res)=>{
    connectionInfo.query(mTech,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
          return  res.send(
            result
           )
        }
    })
}
let forAdmin_education_Btech= (req,res)=>{
    connectionInfo.query(bTech,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
          return  res.send(
            result
           )
        }
    })
}

export {forAdmin_allGoods,forAdmin_allNotification,forAdmin_allUsers,forAdmin_education_phd,forAdmin_education_Mtech,forAdmin_education_Btech}; 





