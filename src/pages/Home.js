import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Axios  from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const key = "RG2UILx1XXAFoKVo+aO44Q==HJ7tXPIQE0ZglnES";
  const headers= {
    'X-Api-Key': key
  }

  useEffect(()=>{
    const nombre = 'Michael Jordan'
    const url = 'https://api.api-ninjas.com/v1/celebrity?name=' + nombre;
    Axios.get(url)
    .then ( res=>{console.log(res.data)}
    ).catch(error=>{console.log(error)})
  },[]
  )

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h3> {user.name}</h3>
      </div>
    )
  );
};

export default Home