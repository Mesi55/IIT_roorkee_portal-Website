import express from 'express'
import forGoods from '../middleware/forgoodspic.js'
import uploadGoodsFile from '../controllers/uploadgoodsC.js'
import {deleteGoods} from '../Resources/goodsPicture/deleteGoods.js'
import {getYourSingleGoods} from '../controllers/updateDeleteEka.js'


let goodsFileUploadR = express.Router()

goodsFileUploadR.post('/uploadGoods',forGoods,uploadGoodsFile)
goodsFileUploadR.delete('/deleteUserGoods/:id',deleteGoods)
goodsFileUploadR.get('/getUserGoods/:userInfo_ID',getYourSingleGoods)

export default goodsFileUploadR;