import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const navigate_uri =  location?.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(navigate_uri);
        })
    }
  return (
    <div>
      <h1 className="text-center my-5">Sign up</h1>
         <div className="d-flex justify-content-center mx-auto">
           <button onClick={handleGoogleLogin} className="btn btn-primary text-center mb-2 px-5">
             Sign in with Google
           </button>
         </div>
      <p className="text-center">already have an account ? please <Link to='/signin'>Sign in</Link></p>
  </div>
  );
};

export default Register;
