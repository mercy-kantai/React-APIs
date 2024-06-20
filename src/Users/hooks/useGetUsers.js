import { getUsers } from "../utils";
import { useEffect, useState } from "react";

 export const useGetUsers = () =>{
   const [users, SetUsers] = useState([]);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchUsers = async ()  =>{
            try{
            const users = await getUsers();
            console.log(users);
           SetUsers(users.users)
           setLoading(false)
    }
    catch(error){
        setError(error.message)
        setLoading(false)
    }
        
      
    };
        fetchUsers();
    },[]);
    return{ 
        users,
        error,
        loading
    }
}

