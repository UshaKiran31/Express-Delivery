
// import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
// // import Navbar from './components/Navbar'
// // import Navbar from './homepagecomponents/Navbar/Navbar'
// import NotFound from './pages/NotFound'
// import Home from './pages/Home'
// import AuthPage from './pages/AuthPage'
// import { useAuthentication } from './auth'
// import RedirectGoogleAuth from './components/GoogleRedirectHandler'
// import Dashboard from './components/Dashboard'


// function App() {
  
//   const {isAuthorized} = useAuthentication()
//   const ProtectedLogin = () =>{
//     return isAuthorized ? <Navigate to='/dashboard'  /> : <AuthPage initialMethod='login'/>
//   }
//   const ProtectedRegister = () => {
//     return isAuthorized ? <Navigate to = '/' /> : <AuthPage initialMethod= 'register' /> 
//   }

//   return (
//     <div>
//       <BrowserRouter>
       
//         <Routes>
//           <Route path="/login/callback" element={<RedirectGoogleAuth />} />
//           <Route path = "/login" element={<ProtectedLogin/>}/>
//           <Route path = "/register" element={<ProtectedRegister/>}/>
//           <Route path="/" element={<Home />} />
//           <Route path = "/dashboard" element={isAuthorized? <Dashboard/> : <Navigate to="/login"/>}/>
//           <Route path = "*" element={<NotFound/>}/>
//         </Routes>
          
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import { useAuthentication } from './auth';
import RedirectGoogleAuth from './components/GoogleRedirectHandler';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/dashboardcomponents/Layout/Layout';
import TrackShipment from './components/trackshipment/TrackShipment';
import CreateShipment from './components/createshipment/CreateShipment';
import SenderInfo from './components/createshipment/Sender/SenderInfo';
import ReceiverInfo from './components/createshipment/Receiver/ReceiverInfo';
import Shipping from './components/createshipment/shipping/Shipping';
import Payment from './components/createshipment/payment/Payment';
import DeliveryHistory from './components/deliveryhistory/DeliveryHistory';
import Support from './components/help/Support';
import FeedBack from './components/FeedBack/FeedBack';
import Notifications from './components/notifications/Notifications';
import Settings from './components/Settings/Settings';

function App() {
  const { isAuthorized } = useAuthentication();

  const ProtectedLogin = () => {
    return isAuthorized ? <Navigate to="/dashboard" /> : <AuthPage initialMethod="login" />;
  };

  const ProtectedRegister = () => {
    return isAuthorized ? <Navigate to="/" /> : <AuthPage initialMethod="register" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes that don't require the Layout */}
          <Route path="/login/callback" element={<RedirectGoogleAuth />} />
          <Route path="/login" element={<ProtectedLogin />} />
          <Route path="/register" element={<ProtectedRegister />} />
          <Route path="/" element={<Home />} />
          
          {/* Protected routes with Layout */}
          {isAuthorized ? (
            <Route path="/" element={<Layout />}>
              {/* All routes with Sidebar and Header inside Layout */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="trackshipment" element={<TrackShipment/>} />
              <Route path="create-shipment" element={<CreateShipment/>} />
              <Route path="sender-info" element={<SenderInfo/>}/>
              <Route path='receiver-info' element={<ReceiverInfo/>}/>
              <Route path='shipping' element={<Shipping/>}/>
              <Route path='payment' element={<Payment/>}/>
              <Route path='delivery-history' element={<DeliveryHistory/>}/>
              <Route path="help" element={<Support/>} />
              <Route path="feedback" element={<FeedBack />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
              {/* Add more routes here if needed */}
            </Route>
          ) : (
            <Route path="/dashboard" element={<Navigate to="/login" />} />
            
            )}

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

