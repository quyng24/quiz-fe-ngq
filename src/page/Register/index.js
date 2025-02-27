import { checkExits, register } from "../../serveces/usersService";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { generateToken } from "../../helper/generateToken";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const checkExitsEmail = await checkExits("email", email);
    if (checkExitsEmail.length > 0) {
        alert("Email already exists");
    } else {
        const option = {
          fullName: fullName,
          email: email,
          password: password,
          token: generateToken(),
        };
        const resposive = await register(option);
        if (resposive) {
            navigate('/login');
        } else {
          alert("Error: Registration failed");
        }
    }
  };
  return (
    <>
      <form className="form-register" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="fullName" placeholder="Enter User name..." />
        <input type="email" placeholder="Enter email..." />
        <input type="password" placeholder="Enter password..." />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
export default Register;
