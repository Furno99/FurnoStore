
//Controller
import { loginUser } from "../controllers/loginController"
//Defining Router
import {Router} from "express"

export const loginRouter = Router()

loginRouter.post("/",loginUser)
