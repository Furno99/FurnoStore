
import {Request , Response} from "express"
import {query} from "../../database/intex"
import { comparePasswords } from "../../database/databaseFunctions"

export const loginUser = async(req : Request , res : Response)=>{

    const {email,password} = req.body

    const userData = (await query("SELECT * FROM furno_user WHERE email = $1 ",[email])).rows[0]

    if(userData){
        if(await comparePasswords(password,userData.password)){
            res.json({
                status : true,
                msg : "Login successful",
                user : {
                    email
                }
            })
        }else {
            res.json({
                status : false,
                msg : "Problem on login : Wrong password"
            })
        }
    }else {
        res.json({
            status : false,
            msg : "Problem on login : Invalid email"
        })
    }

}
