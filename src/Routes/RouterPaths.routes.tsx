import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Logout } from '../pages/Logout';
import { Home } from '../pages/Home';
import { LOGIN, LOGOUT, PRIVATE } from '../config/routes/paths';
import { Login } from '../pages/Login';
import { Private } from '../pages/Private';
import { AuthContextProvider } from '../config/context/AuthContext';
import { PublicRoute } from '../components/router/PublicRoute';
import { PrivateRoute } from '../components/router/PrivateRoute';

export const RouterPaths = () => {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PublicRoute />}>
                            <Route index element={<Home />}/>
                            <Route path={LOGIN} element={<Login />}/>
                        </Route>
                        <Route path={PRIVATE} element={<PrivateRoute />}>
                            <Route index element={<Private />}/>
                            <Route path={LOGOUT} element={<Logout />}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    )
}