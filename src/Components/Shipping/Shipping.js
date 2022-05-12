import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, address, phone);
    navigate("/");
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="form-title">Shipping Info</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name : </label>
            <input
              className="input-field"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email : </label>
            <input
              className="input-field"
              type="email"
              name="email"
              id="email"
              value={user.email}
              required
              readOnly
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address : </label>
            <input
              className="input-field"
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone : </label>
            <input
              className="input-field"
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input type="submit" value="Place Order" className="form-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
