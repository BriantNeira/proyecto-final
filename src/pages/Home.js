import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const { user } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);
  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }

  const nombre = "Michael Jordan";
  const url = process.env.REACT_APP_URL_APP + nombre;

  useEffect(() => {    
    console.log(key);

    Axios.get(url, { headers })
      .then(resp => { console.log(resp.data)
      setCelebrity(resp.data) 
      console.log(celebrity)
  })
      .catch(error => { console.log(error) });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h3>{user.name}</h3>
      Hola: {isAuthenticated ? user.name : "Invitado"}
      <div>
        
        {celebrity.map(cell=>{ return(
          <Fragment>
          <h4>{cell.name}</h4>
          <h2>{cell.age}</h2>
          </Fragment>          
        )})}
    </div>
    

    </div>
  );
};

export default Home;