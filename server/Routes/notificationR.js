import express from 'express';
import {notificationC,getYourNotfication,deleteNotification,getAllNotfication} from '../controllers/notificationC.js'
// import {notificationC,deleteNotification,getAllNotfication} from '../controllers/notificationC.js'
import {protect} from '../controllers/aut.js'

let notificationRoute = express.Router();

notificationRoute.post('/notification',notificationC)
notificationRoute.get('/getUserNotfication/:userInfo_ID',getYourNotfication)
notificationRoute.get('/getAllNotfication',getAllNotfication)
notificationRoute.delete('/deleteUserNotfication/:id',deleteNotification)

export default notificationRoute;