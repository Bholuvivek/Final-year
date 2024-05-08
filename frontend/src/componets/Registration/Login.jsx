import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobileNumber })
      });
      const responseData = await response.json();
      if (response.ok) {
        setOtpSent(true);
      } else {
        setErrorMessage(responseData.error || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setErrorMessage('Failed to send OTP');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobileNumber, otp })
      });
      const responseData = await response.json();
      if (response.ok && responseData.message) {
        console.log('Logged in successfully');
        // Redirect to home page or perform other actions after successful login
      } else {
        setErrorMessage(responseData.error || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setErrorMessage('Failed to verify OTP');
    }
  };

  return (
    <div className="form">
      <div className="borde">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Login</h4>
          <p className="text-center">Enter your mobile number</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          {!otpSent ? (
            <button className="btn btn-primary btn-block" onClick={handleSendOTP}>Send OTP</button>
          ) : (
            <>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
            </>
          )}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <p className="reg">Don't have an account? <Link to="/registration" className="regt">Create account</Link></p>
        </article>
      </div>
    </div>
  );
};

export default Login;
