import instance from "../axios";




//* .......... Save a new scrum link .......... 
export const postNewScrumLink = async (scrumInfo) => {
    try{
        const response = await instance.post('api/v1/scrumLink/create-scrum',scrumInfo )
        const data = await response;
        console.log(data);
        return data;
    } 
    catch (error) {
        console.log(error.message);
    }
}



//* .......... Get all daily scrum link .......... 
export const getDailyScrumLink = async (scrumID) => {
    try {
        const response = await instance.get(`api/v1/scrumLink/daily-scrum/${scrumID}`);
        const data = await response;
        console.log(data);
        return data?.data;
        } 
    catch (error) {
        console.log(error.message);
        }
};