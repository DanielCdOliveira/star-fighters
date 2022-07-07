import { Router } from "express";
import battle from "../controllers/battleController.js";
import verifyUser from "../middlewares/verifyUser.js";
const battleRouter =  Router()

battleRouter.post("/battle",verifyUser, battle)

export default battleRouter