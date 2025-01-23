import { Navigate } from "react-router-dom";    
import { useAuthentication } from "../auth";    


// eslint-disable-next-line react/prop-types
function ProtectedRoute({children}) {
    const {isAuthorized} = useAuthentication();

    if (isAuthorized === null) {
        return <div>Loading...........</div>
    }

    if (
        isAuthorized &&
        (window.location.pathname === "/login" || window.location.pathname === "/register")
    ) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;