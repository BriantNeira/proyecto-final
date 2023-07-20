import { User, useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';

const Login = () => {

    const {loginWithRedirect, isAuthenticated, user, isLoading} = useAuth0();
    const dispatch = useDispatch();
    const handleLogin = async() => {
            try {
                await loginWithRedirect();
            } catch (error) {
                console.log(error);
            }
    };
    useEffect(() => {
    if(isAuthenticated && user ){
        dispatch(login(user))};
}, [isAuthenticated, user, dispatch]);

if (isLoading){
    <div> Cargando ...</div>
}
    return (<button type="button" className="btn btn-orange" onClick={handleLogin}>LOG IN</button>)
};

export default Login;