import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-init";
import SocialLogin from "../Login/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchError, setMatchError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMatchError("Password Not Matched");
      return;
    }
    if (password.length < 6) {
      setMatchError("Password Should be at least 6 character");
      return;
    }
    setMatchError("");
    createUserWithEmailAndPassword(email, password).then(() => {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email : </label>
            <input
              className="input-field"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password : </label>
            <input
              className="input-field"
              type="password"
              name="confirm-password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {matchError ? <p className="text-red-500">!! {matchError}</p> : <></>}
          <p className="text-red-500">{error?.message}</p>
          {loading && <p>Loading ...</p>}

          <div className="input-group">
            <input type="submit" value="Sign Up" className="form-btn" />
          </div>
        </form>
        <p className="toggle-text">
          Already have an account ?
          <Link className="form-link" to="/login">
            {" "}
            Login
          </Link>
        </p>

        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
