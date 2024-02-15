
import {Router} from "express"
import { registerUser } from "../controllers/registerController"

export const registerRouter = Router()

registerRouter.post("/",registerUser)
