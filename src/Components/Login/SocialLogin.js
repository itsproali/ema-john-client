import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const googleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const fbSignIn = () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };

  const [signInWithGithub] = useSignInWithGithub(auth);
  const githubSignIn = () => {
    signInWithGithub().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="or-container">
        <div className="or-line"></div>
        <p className="or-text">or</p>
        <div className="or-line"></div>
      </div>

      <div className="input-group">
        <button className="google-btn" onClick={googleSignIn}>
          <img
            src="https://i.ibb.co/s3GpLz5/google-logo.png"
            alt="Google"
          />
          <p className="google-text">Continue with Google</p>
        </button>
      </div>

      <div className="input-group">
        <button className="fb-btn" onClick={fbSignIn}>
          <img src="https://i.ibb.co/HKCqP2d/facebook-new.png" alt="Facebook" />
          <p className="fb-text">Continue with Facebook</p>
        </button>
      </div>

      <div className="input-group">
        <button className="github-btn" onClick={githubSignIn}>
          <img src="https://i.ibb.co/KqGjRQt/github.png" alt="Github" />
          <p className="github-text">Continue with GitHub</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
