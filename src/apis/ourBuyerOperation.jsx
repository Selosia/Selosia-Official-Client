import instance from "../axios";





//* .......... Get all actual buyers .......... 

export const getAllActualBuyers = async (role) => {
    try {
        const response = await instance.get(`api/v1/user/all-buyers?role=${role}`);
        const data = await response;
        console.log(data);
        return data?.data;
        } 
    catch (error) {
        console.log(error.message);
        }
};