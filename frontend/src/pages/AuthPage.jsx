import {useState, useEffect } from "react";
import AuthForm from "../components/AuthForm"


// eslint-disable-next-line react/prop-types
const AuthPage = ({initialMethod}) => {
    const [method,setMethod] = useState(initialMethod);

    useEffect(()=>{
        setMethod(initialMethod);
    },[initialMethod]);

    const route = method === 'login' ? '/api/token/' :'/api/user/register';
  return (
    <div>
      <AuthForm route ={route} method ={method} />
    </div>
  );
};

export default AuthPage;

