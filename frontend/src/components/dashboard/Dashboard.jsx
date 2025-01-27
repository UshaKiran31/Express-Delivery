import {useEffect, useState} from "react";
import api from '../../api';
import './Dashboard.css';
import { ACCESS_TOKEN } from "../../token";
import { Link } from "react-router-dom";
import img1 from './Dashboard-icons/imges/TruckWithTracking.png';
import img2 from './Dashboard-icons/imges/twoPeople.png';
import img3 from './Dashboard-icons/imges/ClockBehindMan.png';



const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const[isAdmin,setIsAdmin] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
   

    //set up function to render user data
    const renderUserData =() =>(
        <div>
            <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome {userData.username} !</h1>
        <p>Welcome back to ExpressDelivery dashboard</p>
      </header>

      <div className="stats-grid">
        <div className="stats-card">
          <div className="icon-container orange-bg">
            <img src={img1} alt="Active Shipments" />
          </div>
          <div>
            <h3>3</h3>
            <p>Active Shipments</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="icon-container green-bg">
            <img src={img2} alt="Delivered Shipments" />
          </div>
          <div>
            <h3>5</h3>
            <p>Delivered Shipments</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="icon-container blue-bg">
            <img src={img3} alt="Pending Shipments" />
          </div>
          <div>
            <h3>1</h3>
            <p>Pending Shipments</p>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        
        <button className="create-shipment"><Link to="/sender-info" className="cs">Create Shipment</Link></button>
        
        <button className="reschedule-delivery"><Link to="/shipping" className="cs">Reschedule Delivery</Link></button>
        <button className="track-shipment"><Link to="/trackshipment" className="cs">Track Shipment</Link></button>
        <button className="provide-feedback"><Link to="/feedback" className="cs">Provide Feedback</Link></button>
      </div>

      <div className="shipment-table">
        <h2>Shipment</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Recipient Name</th>
              <th>Destination</th>
              <th>Current Status</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AWB20251201</td>
              <td>Ravi Chandra Kakumanu</td>
              <td>Kochi, Kerala</td>
              <td>Pending Pickup</td>
              <td>Jan 4, 2025</td>
            </tr>
            <tr>
              <td>AWB20251202</td>
              <td>Prabhas Mandadapu</td>
              <td>Hyderabad, Telangana</td>
              <td>Delivered</td>
              <td>Jan 5, 2025</td>
            </tr>
            <tr>
              <td>AWB20251203</td>
              <td>Charishma Jakka</td>
              <td>Chennai, Tamil Nadu</td>
              <td>In Transit</td>
              <td>Jan 6, 2025</td>
            </tr>
            <tr>
              <td>AWB20251204</td>
              <td>Usha Kiran Paruchuri</td>
              <td>Hyderabad, Telangana</td>
              <td>Delivered</td>
              <td>Jan 6, 2025</td>
            </tr>
            <tr>
              <td>AWB20251205</td>
              <td>Ramya</td>
              <td>Hyderabad, Telangana</td>
              <td>In Transit</td>
              <td>Jan 7, 2025</td>
            </tr>
            <tr>
              <td>AWB20251206</td>
              <td>Usha Kiran Paruchuri</td>
              <td>Hyderabad, Telangana</td>
              <td>Delivered</td>
              <td>Jan 6, 2025</td>
            </tr>
            <tr>
              <td>AWB20251207</td>
              <td>Asritha</td>
              <td>Hyderabad, Telangana</td>
              <td>Delivered</td>
              <td>Jan 6, 2025</td>
            </tr>
            <tr>
              <td>AWB20251208</td>
              <td>Usha Kiran Paruchuri</td>
              <td>Hyderabad, Telangana</td>
              <td>In Transit</td>
              <td>Jan 2, 2025</td>
            </tr>
            <tr>
              <td>AWB20251209</td>
              <td>Vyshanavi</td>
              <td>Guntur, Andhra Pradesh</td>
              <td>Delivered</td>
              <td>Dec 24, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
    )
     const renderAdminFeatures =()=>(        <div>
            <h3>Admin Features</h3>
            {/* Admin-specific Features */}
        </div>
    )

    return (
        <div className="dashboard">
            {/* <h1>Dashboard</h1> */}
            
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
