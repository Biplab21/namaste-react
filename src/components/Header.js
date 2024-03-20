import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {

    const [ btnName, setBtnName ] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)

    return (
        <div className="flex justify-between bg-pink-100 mb-2 shadow-lg px-2">
            <div className='m-5'>
                <img className='w-24' src={ LOGO_URL } alt="logo" />
            </div>
            <div>
                <ul className="flex p-4 m-4 list-none text-xl items-center">
                    <li className="px-4">
                        Online Status: { onlineStatus ? '🟢' : '🔴' }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button
                        onClick={ () => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        } }
                        className="m-3"
                    >{ btnName }</button>
                    <li className="px-4 font-bold">{ loggedInUser }</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;