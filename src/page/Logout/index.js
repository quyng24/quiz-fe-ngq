import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../helper/cookie";
import { useEffect } from "react";
import { checkLogin } from "../../actions/login";
import { useDispatch } from "react-redux";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookie();
    useEffect(() => {
        dispatch(checkLogin(false));
        navigate('/login');
    }, []);
    return (
        <></>
    )
}
export default Logout;