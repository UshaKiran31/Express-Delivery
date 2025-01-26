import {useEffect, useState} from "react";
import api from '../api';
import '../styles/Dashboard.css';
import { ACCESS_TOKEN } from "../token";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "../auth";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const[isAdmin,setIsAdmin] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchUserData = async() => {
            try{
                const accessToken = localStorage.getItem(ACCESS_TOKEN);
                if(!accessToken){
                    throw new Error('No access token found');
                }
                const headers ={
                    Authorization: `Bearer ${accessToken}`,
                }

                //fetch the user data
                const userResponse = await api.get('http://127.0.0.1:8000/dashboard/',{headers})
                const user = userResponse.data;
                setUserData(user);
                setIsAdmin(user.is_staff);
            
            }catch (error) {
                console.error('Error fetching user data:', error);
                const errorMessage = error.response
                ? error.response.data.detail || 'An error occurred while fetching user data'
                : "An error occured: " + error.message;
                setError(errorMessage);
            }finally{
                setLoading(false);
            }
        }

        fetchUserData();
    },[]);
    const {logout} = useAuthentication();
    const handleLogout = () => {
        logout();
        navigate('//');
    }
    
    //set up function to render user data
    const renderUserData =() =>(
        <div>
            <h2>Welcome, {userData.username}!</h2>
            {isAdmin && <p>You are an admin.</p> }
            <p>Yoour email:{userData.email}</p>
            <p>Status {userData.is_active ? "Active" : "Inactive"}</p>
            <li className="dashboard-icon">
                <Link to = "/dashboard">DB</Link>
            </li>
             <li>
                <Link to = "/" onClick={handleLogout}  className="navbar-signin-button">Logout</Link>
            </li>
        </div>
    )
     const renderAdminFeatures =()=>(        <div>
            <h3>Admin Features</h3>
            {/* Admin-specific Features */}
        </div>
    )

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <>
                    {userData && renderUserData()}
                    {isAdmin && renderAdminFeatures()}
                </>
            )}
        </div>
    )
}

export default Dashboard;
