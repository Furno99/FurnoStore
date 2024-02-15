// Packages
import {query} from "./intex"
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt';

// Implementing Functions

export const hashPassword = async(password : string)=> await bcrypt.hash(password,10) //Returns bcrypted password for user

export const comparePasswords = async(password : string , hashedPassword : string) => await bcrypt.compare(password,hashedPassword) // Compares the original password and the hashed one if same returns true

export const createUniqueID = ()=> uuidv4() // creates unique ID for users

export const isEmailValid = async(email : string) : Promise<boolean> =>{ //returns true if there's no email in DB which is same with argument

    try {
        const emailData = (await query("SELECT email FROM furnouser WHERE email = $1",[email])).rows[0]
        
        if (emailData) return false
        else return true

    } catch (error) {
        console.log("Problem on checking the validation of email : ",error)
        return false                
    }
}

export const isUsernameValid = async (username : string) : Promise<boolean> => {

    try {

        const usernameData = (await query("SELECT username FROM furnouser WHERE username = $1",[username])).rows[0]
        
        if(usernameData) return false
        else return true

    } catch (error) {
        console.log("Problem on checking username : ",error)
        return false
    }

}


