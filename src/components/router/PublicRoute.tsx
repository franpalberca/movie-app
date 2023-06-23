import { PRIVATE } from "../../config/routes/paths";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../config/context/AuthContext';

export const PublicRoute = () => {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}