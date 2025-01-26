
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Navbar from './homepagecomponents/Navbar/Navbar'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import { useAuthentication } from './auth'
import RedirectGoogleAuth from './components/GoogleRedirectHandler'
import Dashboard from './components/Dashboard'


function App() {
  
  const {isAuthorized} = useAuthentication()
  const ProtectedLogin = () =>{
    return isAuthorized ? <Navigate to='/dashboard'  /> : <AuthPage initialMethod='login'/>
  }
  const ProtectedRegister = () => {
    return isAuthorized ? <Navigate to = '/' /> : <AuthPage initialMethod= 'register' /> 
  }

  return (
    <div>
      <BrowserRouter>
       
        <Routes>
          <Route path="/login/callback" element={<RedirectGoogleAuth />} />
          <Route path = "/login" element={<ProtectedLogin/>}/>
          <Route path = "/register" element={<ProtectedRegister/>}/>
          <Route path="/" element={<Home />} />
          <Route path = "/dashboard" element={isAuthorized? <Dashboard/> : <Navigate to="/login"/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default App
