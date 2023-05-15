import express from 'express'
const router = express.Router()
import {register,login,logout,currentUser,forgetPassword,resetPassword} from '../controllers/auth'
// middleware
import { requireSignin } from '../middlewares';

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/current-user', requireSignin, currentUser);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);








module.exports = router