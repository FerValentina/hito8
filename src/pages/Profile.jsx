import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useUser();

  return (
    <div className="container text-center mt-5">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;

  