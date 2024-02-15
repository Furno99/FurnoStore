//Packages
import { useEffect, useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios"
//API
import { loginUserAPI } from "../../utility/API"
//Components
import { LoginContainer } from "./Login.style"

import background from "../../assests/login-register/Background.jpg"

interface RegisterProps {
    isLoggedIn : boolean,
    setIsLoggedIn : (data : boolean)=>void
}

interface UserData {
    email : string,
    password : string,
}

export const Login = ({isLoggedIn,setIsLoggedIn} : RegisterProps) => {

    console.log('login')

    const navigate = useNavigate()

    const [userData,setUserData] = useState<UserData>({
        email : "",
        password : "",
    })

    useEffect(()=>{
      if(isLoggedIn) {
        navigate("/")
      }
    },[isLoggedIn])

    useEffect(()=>{
      console.log(userData)
    },[userData])

    const handleLogin = async ()=>{

      const {email,password} = userData

        if(email && password) {

          if(loginUserAPI){
            try {
                const request = await axios.post(`${loginUserAPI}`,{email,password})
                if(request.data.status){
                    console.log(request.data)
                    localStorage.setItem("logged-user-data",JSON.stringify(request.data.user))
                    setIsLoggedIn(true)
                    navigate("")
                }else {
                  console.log(request.data.msg)
                }
            } catch (error) {
                console.log(error)
            }
          } 
        }else {
          console.log("Please enter all the informations")
        }

    }
        
  return (
    <LoginContainer>
      <div className="background-container">
        <img src={background} alt="" />
      </div>
      <div className="login-container">
        <div className="inner-container">
          <div className="title-container">
            <h1>Log in</h1>
            <p>Enter your e-mail and password to buy our exclusive figures</p>
          </div>
          <form className="form-container"  action="">
            <div className="inner-title-container">
              <h3>E-mail</h3>
            </div>
            <input 
              name="email" 
              type="email" 
              placeholder="Enter your e-mail" 
              value={userData.email} 
              onChange={(e)=>setUserData((oldData : UserData)=>{
                return({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <div className="inner-title-container">
              <h3>Password</h3>
            </div>
            <input
              name="password"
              type="password" 
              placeholder="Enter your password"
              onChange={(e)=>setUserData((oldData : UserData)=>{
                return({...oldData,[e.target.name] : e.target.value})
              })}
            />
            <button onClick={(e)=>{
              e.preventDefault()
              handleLogin()
            }} >Log in</button>
            <p>Don't have an account? <Link to={"/register"} >Create one</Link></p> 
            <Link to={"/register"} >Forgot password</Link>
          </form>
        </div>
      </div>
    </LoginContainer>
  )
}
