import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login = () => {

    const { loginWithRedirect } = useAuth0();
    
    function handleLogin() {
        loginWithRedirect();
    }
    return (
        <button onClick={()=> (handleLogin())}>
            Login
        </button>
    )
}

export default Login
