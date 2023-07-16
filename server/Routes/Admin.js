import express from 'express';
import {forAdmin_allGoods,forAdmin_allNotification,forAdmin_allUsers,forAdmin_education_phd,forAdmin_education_Mtech,forAdmin_education_Btech} from '../controllers/adminPageC.js';

let adminRouter = express.Router()

adminRouter.get('/adminGoods',forAdmin_allGoods)
adminRouter.get('/adminNotification',forAdmin_allNotification)
adminRouter.get('/adminManagerUsers',forAdmin_allUsers)
adminRouter.get('/adminPhd',forAdmin_education_phd)
adminRouter.get('/adminMtech',forAdmin_education_Mtech)
adminRouter.get('/adminBtech',forAdmin_education_Btech)

export default adminRouter ;