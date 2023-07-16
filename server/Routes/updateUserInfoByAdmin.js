
import express from 'express';
import adminUdateUserProfile from '../controllers/adminUpdateUserProfile.js'

let updatedInformation = express.Router();

updatedInformation.post('/updateUserInfo',adminUdateUserProfile)

export default updatedInformation;
