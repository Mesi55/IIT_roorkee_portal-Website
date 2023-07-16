import updateNotificatioByAdmin from '../controllers/adminUpdateNotificationC.js';
import updateEducationalByAdmin from '../controllers/adminUpdatesEducationalC.js'
import updateGoodsByAdmin from '../controllers/adminUpdateGoodsC.js';
import express from 'express';

let update = express.Router();

update.post('/adminUpdateNotification',updateNotificatioByAdmin)
update.post('/adminUpdateEducational',updateEducationalByAdmin)
update.post('/updateGoods',updateGoodsByAdmin)


export default update;
