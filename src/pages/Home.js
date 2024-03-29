import React, { Profiler } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Axios from "axios";
import { useEffect, useState } from "react";
import Celebrities_List from "../components/Celebrities_List";

export const Home = () => {
    //console.log("Ingreso al home");
    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);
    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key,
    }
    const nombre = 'Michael Jordan'
    const url = process.env.REACT_APP_URL_APP;
    useEffect(() => {
        console.log(key);
        Axios.get(url, { headers })
            .then(resp => {
                console.log(resp.data);
                setCelebrity(resp.data);
            })
            .catch(error => { console.log(error) })
            console.log("Pase condicionales");
    }, [])
    return (
        <div className="container mt-5">
            <img src={user.picture} alt="Briant Neira" />
            <h3>{user.name} </h3>
            
            <Celebrities_List celebrities={celebrity} />

        </div>
    )
}

