import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Perfil de Usuario</h2>
      </div>
      <div className="profile-info">
        <p>Email: usuario@example.com</p>
        <button className="btn logout">Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Profile;
