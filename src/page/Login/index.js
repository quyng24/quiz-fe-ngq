import { login } from '../../serveces/usersService';
import { useNavigate } from'react-router-dom';
import './Login.scss';
import { setCookie } from '../../helper/cookie';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../actions/login';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const resposive = await login(email, password);
        if(resposive.length > 0) {
            setCookie("id", parseInt(resposive[0].id), 1);
            setCookie("fullName", resposive[0].fullName, 1);
            setCookie("email", resposive[0].email, 1);
            setCookie("token", resposive[0].token, 1);
            dispatch(checkLogin(true));
            navigate('/');
        } else {
            alert('Wrong account or password')
        }
    }
    return (
        <>
            <form className='form-login' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type='email' placeholder="Enter email..." />
                <input type='password' placeholder="Enter password..." />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}
export default Login;