import express from 'express';
import {deletePhdDocument,deleteMtchDocument,deleteBtchDocument,deleteUserNotification,deleteUserGoods,deleteUserData,deleteUserEmail} from '../controllers/adminDeleteC.js'

let adminDeleteRoute = express.Router();

adminDeleteRoute.delete('/deletePhd/:id',deletePhdDocument)
adminDeleteRoute.delete('/deleteMtech/:id',deleteMtchDocument)
adminDeleteRoute.delete('/deleteBtech/:id',deleteBtchDocument)
adminDeleteRoute.delete('/deleteGoods/:id',deleteUserGoods)
adminDeleteRoute.delete('/deleteNotification/:id',deleteUserNotification)
adminDeleteRoute.delete('/deleteUserInfo/:id',deleteUserData)
adminDeleteRoute.delete('/deleteUserEmailOnly/:id',deleteUserEmail)

export default adminDeleteRoute 