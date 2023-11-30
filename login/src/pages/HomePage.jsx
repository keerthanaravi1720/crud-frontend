import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      navigate('/PostPage');
    }
  }, [navigate]);
  return (
    <>
    <Navbar/>
    
   
   
    <div>
      <h2 className='h'>Welcome to the Home Page</h2></div>
      <div className="button-container">
          <Link to="/register" className="button-link">
            <button className="button">Register</button>
          </Link>
          <Link to="/login" className="button-link">
            <button className="button">Login</button>
          </Link>
        </div>
    {/* <div className="cover"> */}
   

     
     
      
      <img
  src="https://static.wixstatic.com/media/c837a6_4577a1db5cfd48e5b5b655294b288c71~mv2.png/v1/fill/w_732,h_621,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shutterstock_1806326989.png"
  alt=""
  style={{
    width: '488px',
    height: '410px',
    objectFit: 'cover',
    objectPosition: '50% 50%'
  }}
  fetchpriority="high"
/>

      
    {/* </div> */}
  
    

    </>
  );
};

export default HomePage;
