import React from "react";
import useAuth from "../../hooks/useAuth"
import {useNavigate, useLocation, Link} from 'react-router-dom'

const SignIn = () => {
    const {signInUsingGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const navigate_uri =  location?.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(navigate_uri);
        })
    };

  return (
    <div>
      <h1 className="text-center my-5">Sign in</h1>
      <div className="d-flex justify-content-center mx-auto">
        <button onClick={handleGoogleLogin} className="btn btn-primary text-center mb-2 px-5">
          Sign in with Google
        </button>
      </div>
      <p className="text-center">new in travel day ? please <Link to='/register'>Sign up</Link></p>
    </div>
  );
};

export default SignIn;
