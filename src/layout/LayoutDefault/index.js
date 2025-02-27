import { NavLink, Outlet } from 'react-router-dom';
import './LayoutDefault.scss';
import { getCookie } from '../../helper/cookie';
import { useSelector } from 'react-redux';

function LayoutDefault() {
    const token = getCookie('token');
    const isLogin = useSelector(state => state.loginReducer);
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className='container'>
                        <div className="logo">Quiz</div>
                        <div className="menu">
                            <ul>
                                <li> <NavLink to='/'>Home</NavLink> </li>
                                {token && (<>
                                    <li> <NavLink to='/topic'>Topic</NavLink> </li>
                                    <li> <NavLink to='/answers'>Answer</NavLink> </li>
                                </>)}
                            </ul>
                        </div>
                        <div className='accout'>
                            {token ? (<>
                                <NavLink to='/logout'>Logout</NavLink>
                            </>) : (<>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </>)}
                        </div>
                    </div>
                </header>
                <main className='layout-default__main'>
                    <div className='container'>
                        <Outlet/>
                    </div>
                </main>
                <footer className="layout-default__footer text-center">Copyright @ 2025 by Nguyen Quy IT</footer>
            </div>
        </>
    )
}
export default LayoutDefault;