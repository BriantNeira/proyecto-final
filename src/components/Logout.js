import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Logout = () => {
    const {logout} = useAuth0();
  return (
    <button className="btn btn-orange" onClick={()=>logout({returnTo: window.location.origin})}>
        Cerrar sesión
    </button>
  )
}

export default Logout