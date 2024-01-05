import express from "express"
import { loginController, registerController } from "../Controller/userController.js";
const router= express.Router();

router.post('/sign-up', registerController);
router.post('/log-in',loginController);

export default router;