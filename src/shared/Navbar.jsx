import { useContext, useEffect, useState } from "react";
import { getCurrentUserInfo } from "../apis/userOperations";
import { AuthContext } from "../context/AuthProvider";
import LargeScreenNav from "../components/Navbar/LargeScreenNav";
import MobileScreenNav from "../components/Navbar/MobileScreenNav";
import Header from "./Header";


const Navbar = () => {
    const {user} = useContext(AuthContext)

    const [logUser, setLogUser] = useState()

    useEffect(()=>{
        getCurrentUserInfo(user)
        .then((response)=> {
            console.log(response?.data);
            setLogUser(response?.data);
        })
    },[user])


    return (
        <div>
            <Header />
            <LargeScreenNav logUser={logUser} />
            <MobileScreenNav />
        </div>
    );
};

export default Navbar;