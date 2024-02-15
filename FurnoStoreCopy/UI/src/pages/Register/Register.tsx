//Packages
import { useEffect, useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios"
//API
import { registerUserAPI } from "../../utility/API"
//Components
import { RegisterContainer } from "./Register.style"
import background from "../../assests/login-register/Background.jpg"

interface RegisterProps {
    isLoggedIn : boolean,
    setIsLoggedIn : (data : boolean)=>void
}

interface UserData {
  username : string,
    first_name : string,
    last_name : string
    email : string,
    confirmEmail : string,
    password : string,
    confirmPassword : string
}

export const Register = ({isLoggedIn} : RegisterProps) => {

    const navigate = useNavigate()

    useEffect(()=>{
      if(isLoggedIn) {
        navigate("/")
      }
    },[isLoggedIn])

    const [userData,setUserData] = useState<UserData>({
        username : "",
        first_name : "",
        last_name : "",
        email : "",
        confirmEmail : "",
        password : "",
        confirmPassword : ""
    })

    useEffect(()=>{
      console.log(userData)
    },[userData])

    const handleRegister = async ()=>{

        const {username,first_name,last_name,email,confirmEmail,password,confirmPassword} = userData

        if( first_name && last_name && username && email && confirmEmail && password && confirmPassword) {

          if (confirmPassword === password) {

              if(email === confirmEmail){
                if(registerUserAPI){
                  try {
                      const request = await axios.post(`${registerUserAPI}`,{first_name,last_name,username,email,password})
                      await axios({method : "post"})
                      if(request.data.status){
                          console.log(request.data)
                      }else {
                        console.log(request.data.msg)
                      }
                  } catch (error) {
                      console.log(error)
                  }
                } 
              }else {
                console.log("Email and confirm email must be same")
              }

          }else {
            console.log("Password and confirm password must be same")
          }

        }else {
          console.log("Please enter all the informations")
        }
 
    }

  return (
    <RegisterContainer>
      <div className="background-container">
        <img src={background} alt="" />
      </div>
      <div className="register-container">
        <div className="inner-container">
          <div className="title-container">
            <h1>Sign up</h1>
            <p>Enter your information to get started!</p>
          </div>
          <form className="form-container"  action="">
            <div className="inner-title-container">
              <h3>First Name</h3>
            </div>
            <input 
              name="first_name"
              type="text" 
              placeholder="First name" 
              value={userData.first_name} 
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>Last Name</h3>
            </div>
            <input 
              name="last_name"
              type="text" 
              placeholder="Last name" 
              value={userData.last_name} 
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>Username</h3>
            </div>
            <input 
              name="username"
              type="text" 
              placeholder="Enter your username" 
              value={userData.username} 
              onChange={(e)=>setUserData((oldData : UserData )=>{
                console.log(e.target.name,e.target.value)
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>E-mail</h3>
            </div>
            <input 
              name="email"
              type="email" 
              placeholder="Enter your e-mail"
              value={userData.email} 
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>E-mail Confirmation</h3>
            </div>
            <input 
              name="confirmEmail"
              type="email" 
              placeholder="Enter your e-mail" 
              value={userData.confirmEmail}
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>Password</h3> 
            </div>
            <input 
              name="password"
              type="password" 
              placeholder="Enter your password" 
              value={userData.password}
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>Password Confirmation</h3>
            </div>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Enter your password" 
              value={userData.confirmPassword}
              onChange={(e)=>setUserData((oldData : UserData )=>{
                return ({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <button onClick={(e)=>{
              e.preventDefault()
              handleRegister()
              }} >Sign up</button>
            <p>Already have an account? <Link to={"/login"}>Log in</Link></p> 
            <Link to={"/register"} >Forgot password</Link>
          </form>
        </div>
      </div>
    </RegisterContainer>
  )
}
