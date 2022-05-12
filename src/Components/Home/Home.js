import React from 'react';
import "./Home.css"
import Model from "../../images/red-jacket-model.png"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const shopNow = () => {
        navigate('/shop')
    }
    return (
        <div className='container'>
            <div className="text">
                <p className='save'>Save up to 70% off</p>
                <h1 className="title">New Collection For Fall</h1>
                <h2 className='discover'>Discover all the new arrivals of ready-to-wear collection.</h2>
                <button className="btn" onClick={shopNow}>SHOP NOW</button>
            </div>
            <div className="main-image">
                <img src={Model} alt="Red Jacket Model" />
            </div>
        </div>
    );
};

export default Home;