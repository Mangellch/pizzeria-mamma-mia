import React from 'react'

const Profile = () => {
    const userEmail = "usuario@ejemplo.com"

  return (
    <div className='container mt-4 vh-100 align-items-center justify-content-center' style={{maxWidth: '400px'}}>
        <div className='card text-center'>
            <div className='card-header'>
                <h2 className='card-title'>Perfil de Usuario</h2>
            </div>
        
            <div className='card-body '>
                <p className='card-text'>Email: {userEmail}</p>
            </div>
        </div>
  </div>
  );
};

export default Profile