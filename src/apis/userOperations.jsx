import instance from "../axios";




//* .......... Save a new user in sign up page .......... 

export const postAUserInSignUp = async (userData) => {
    try{
        const response = await instance.post('api/v1/user/create-user',userData )
        const data = await response;
        console.log(data);
        return data;
    } 
    catch (error) {
        console.log(error.message);
    }
}




//* .......... Get current user information in context API .......... 

export const getCurrentUserInfo = async (user) => {
    try {
        const response = await instance.get(`api/v1/user?email=${user?.email}`);
        const data = await response;
        // console.log(data);
        return data;
        } 
    catch (error) {
        console.log(error.message);
        }
};