import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
const {user, isAuthenticated, isLoading} = useAuth0();

if(isLoading){
    return <div> Cargando ...</div>
}
  return (
    isAuthenticated && (
        <div>
           <img src={user.picture} alt={user.name}/>
           <h3> {user.name}</h3>
           <p>Correo electrónico: {user.email}</p>
        </div>
    )

  )
}

export default Profile