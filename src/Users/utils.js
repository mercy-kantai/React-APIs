// import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

export const getUsers = async() =>{
    const baseurl = process.env.REACT_APP_BASE_URL;
    try{
        const response = await fetch (`${baseurl}/users`)
        return response.json();
    }catch (error) {

     throw new Error(error.message) 
    }

}