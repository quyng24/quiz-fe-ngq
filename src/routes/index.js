import LayoutDefault from '../layout/LayoutDefault';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import PrivateRouter from '../components/PrivateRouter';
import Quiz from '../page/Quiz';
import Result from '../page/Result';
import Topic from '../page/Topic';
import Logout from '../page/Logout';
import Answers from '../page/Answers';

export const route = [
    {
        path: '/',
        element: <LayoutDefault/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'logout',
                element: <Logout/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                element: <PrivateRouter/>,
                children: [
                    {
                        path: 'answers',
                        element: <Answers/>
                    },
                    {
                        path: 'quiz/:id',
                        element: <Quiz/>
                    },
                    {
                        path: 'result/:id',
                        element: <Result/>
                    },
                    {
                        path: 'topic',
                        element: <Topic/>
                    }
                ]
            }
        ]
    }
];
