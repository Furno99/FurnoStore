import { Request , Response } from "express"
import { hashPassword, isUsernameValid } from "../../database/databaseFunctions"
import {query} from "../../database/intex"
import { isEmailValid } from "../../database/databaseFunctions"

export const registerUser = async(req : Request,res : Response)=>{

    const {first_name,last_name,username,email,password} = req.body
    
    const hashedPassword = await hashPassword(password) 

    if(await isEmailValid(email)){
        if(await isUsernameValid(username)){
            try {
                await query("INSERT INTO furno_user (id,first_name,last_name,username,email,password) VALUES (uuid_generate_v4(),$1,$2,$3,$4,$5)",[first_name,last_name,username,email,hashedPassword])
                res.json({
                    status : true,
                    msg : "The user has been successfuly created",
                    user : {
                        username,
                        email,
                    }
                })
    
            } catch (error) {
                console.log(error)
                res.json({
                    status : false,
                    msg : "Failed creating the user : " + error,
                })
            }
        }else {
            res.json({
                status : false,
                msg : "Failed creating the user : This username is already used.",
                problem : username
            })
        }
        
    }else {
        res.json({
            status : false,
            msg : "Failed creating the user : This email is already used.",
            problem : email
        })
    } 

}
