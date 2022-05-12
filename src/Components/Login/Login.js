import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";
import Loading from "../Loading/Loading";
import "./Login.css";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      setEmail("");
      setPassword("");
      const userId = user.user.uid;
      fetch("https://ema-john-itsproali.herokuapp.com/getToken", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId }),
      })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("accessToken", data.accessToken));
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const resetPassword = () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast.success("Email Sent");
    } else {
      toast.error("Please Enter a valid Email");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}`);
    }
  }, [error]);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Toaster />
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email : </label>
            <input
              className="input-field"
              type="email"
              name="email"
              id="email"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password : </label>
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right">
              <p onClick={resetPassword} className="text-orange-400 cursor-pointer inline-block">
                Forgot Password
              </p>
              </div>
          </div>

          <div className="input-group">
            <input type="submit" value="Login" className="form-btn" />
          </div>
        </form>
        <p className="toggle-text">
          New to Ema-John?
          <Link className="form-link" to="/signup">
            {" "}
            Create New Account
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
