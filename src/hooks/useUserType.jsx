import { useEffect, useState } from "react";

const useUserType = (email) => {

    const [userType,setUserType] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://web-tech-official-server.vercel.app/email/${email}`)
            .then(res => res.json())
            .then(data => {
                // response was in result ...
                setUserType(data.result.role)
                setLoading(false)
            })
        }
    },[email])

    
 

     return [userType,loading]


};

export default useUserType;


 // use this code . where u want to get the user type
// const [userType,loading] = useUserType(user?.email)  