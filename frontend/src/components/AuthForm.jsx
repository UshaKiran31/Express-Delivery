import api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../token";
import "../styles/AuthForm.css";
import google from "../assets/google.png";


// eslint-disable-next-line react/prop-types
const AuthForm = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sucess, setSucess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSucess(null);

        try {
            const res = await api.post(route, { username, password, email });

            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/dashboard");
                window.location.reload();
            } else {
                setSucess("Registration successful. Please login.");
                setTimeout(() => {
                    navigate("/login");
                }, 2000)
            }
        }   catch (error) {
              console.error(error);
              if (error.response) {
                if (error.response.status === 401) {
                    setError("Invalid credentials");
                } else if (error.response.status === 400) {
                    setError("Username already exists");
                } else {
                    setError("Something went wrong. Please try again.");
                }
              } else if (error.request) {
                setError("Network error. Please check your internet connection.");
              } else {
                setError("Something went wrong. Please try again.");
              }
        }   finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/accounts/google/login/";
    };

    return (
        <div className="form-container-auth">
            {loading && (
                <div className="loading-indicator">
                    {error ? <span className="error-message">{error}</span> : <div className="spinner"></div>}
                </div>
            )}
            {!loading && (
                <form onSubmit={handleSubmit} className="form-auth">
                   
                    <h2>{method === 'register' ? 'Register' : 'Login' }</h2>
                    {error && <div className="error-message">{error}</div>}
                    {sucess && <div className="success-message">{sucess}</div>}
                    <div className="form-group-auth">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required />
                    </div>
                    <div className="form-group-auth">
                        <label htmlFor="username">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)} 
                            required />
                    </div>
                    {method === 'register' && (
                        <>
                            <div className="form-group-auth">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required />
                            </div>
                            <div className="form-group-auth">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input 
                                    type="text" 
                                    id="phoneNumber" 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    pattern="\d{10}" 
                                    required />
                            </div>
                        </>
                    )}
                    <button type="submit" className="form-button-auth">
                        {method === 'register'? 'Register' : 'Login'}
                    </button>
                    <button type="button" className="google-button" onClick={handleGoogleLogin}>
                        <img src={google} alt="Google icon" className="google-icon" />
                        {method === 'register'? 'Register with Google' : 'Login with Google'}
                    </button>
                    {method === 'login' && (
                        <p className="toggle-text">Dont have an account? 
                        <span className="toggle-link" onClick={() => navigate("/register")}>Register</span></p>
                    )}
                    {method ==='register' && (
                        <p className="toggle-text">Already have an account? 
                        <span className="toggle-link" onClick={() => navigate("/login")}>Login</span></p>
                    )}
                </form>
            )}
        </div>
    )


}

export default AuthForm;