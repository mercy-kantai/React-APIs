import './index.css'
import { useState } from 'react';  
import { login } from './utils';

const Login =() => {
    const [userName, setUserName] = useState('');
    console.log({userName});
    const [password, setpassword] = useState('');
    console.log({password});

    const handleLogin = async (e) =>{
        e.preventDefault();
        console.log('are we here');
        const result = await login ({username:userName, password});
        console.log(result);
    }


    
    return(
        <form onSubmit={handleLogin}>
        <h2>Login Form</h2>
            <input   placeholder="Enter username"  type="text"  onChange={(e) =>setUserName(e.target.value)}/>
            <br/>
            <input   placeholder="Enter password"  type="password"  onChange={(e) => setpassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>
        </form>
      
    )
}

export default Login;