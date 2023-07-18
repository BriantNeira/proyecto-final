import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Axios  from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const key = process.env.REACT_APP_KEY;
  const headers= {
    'X-Api-Key': key
  }

  const nombre = 'Michael Jordan';
  const url = process.env.REACT_APP_URL_APP + nombre;
  useEffect(()=>{    
    console.log(key);
    Axios.get(url, {headers})
    .then ( resp=>{console.log(resp.data)})
    .catch(error=>{console.log(error)})
  },[]
  )
/*
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h3> {user.name}</h3>
      </div>
    )
  ); */

  return (<div>Hola: </div>);
}; 

export default Home