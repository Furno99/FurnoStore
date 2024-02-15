
//Packages
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//Images
import logo from "../../../assests/furno/logo.jpg"
//Styles
import { FiMenu,FiSearch } from "react-icons/fi"
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { countries } from 'country-flag-icons'
import { DE } from 'country-flag-icons/react/3x2'
//Components
import { NavbarContainer } from "./Navbar.style";

interface HomeNavbarProps {
    isLoggedIn : boolean,
    setIsLoggedIn : (data : boolean)=> void
}

const Navbar = ({isLoggedIn,setIsLoggedIn} : HomeNavbarProps) => {

    const [searchValue,setSearchValue] = useState<string>("")
    const [isFocused,setIsFocused] = useState<boolean>(false)
    const [selectedLanguage,setSelectedLanguage] = useState<string>("english")

    const handleLogOut = ()=>{
        localStorage.removeItem("logged-user-data")
        setIsLoggedIn(false)
    }

  return (
    <NavbarContainer isFocused={isFocused} >
        <div className="left-container">
        <div className="menu">
                <FiMenu />
                Menu
            </div>
            <div className="logo-container">
                <img src={logo} />
            </div>
            <div className="search-input">
                <form action="">
                    <input type="text" placeholder="Search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} size={100} />
                    <FiSearch />
                </form>
            </div>
        </div>
        <div className="middle-container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/all">All Products</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
            </ul>
        </div>
        <div className="right-container">
            <div className="user-logo-container">
                {isLoggedIn ? <button onClick={handleLogOut} >Log Out</button> : (
                    <>
                        <div className="login-container">
                            <Link to={"/Login"} >Log In  </Link> 
                            <CiLogin />
                        </div>
                        <div className="register-container">
                            <Link to={"/Register"} >Register</Link>
                            <CiLogout /> 
                        </div>
                    </>
                )}
            </div>
            <div className="language-container">
                <button>{selectedLanguage}<MdOutlineKeyboardArrowDown /></button>
            </div>
        </div>
    </NavbarContainer>
  )
}

export default Navbar
