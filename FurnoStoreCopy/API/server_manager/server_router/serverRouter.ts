// Defining the Compiler
import {Router} from "express"
const router = Router()

// Adding Routers
import { registerRouter } from "../routes/registerRouter"
import { loginRouter } from "../routes/loginRouter"
import { adminRouter } from "../routes/adminRouter"

// Routes
router.use("/register",registerRouter)
router.use("/login",loginRouter)
router.use("/admin",adminRouter)

export default router