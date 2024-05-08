import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './registraion.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      
      if (responseData.message === 'Registration successful') {
        window.alert('Registration successful');
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      <div className="form">
        <div className="container borde">
          <article className="card-body mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="fullName" {...register('fullName')} className="form-control" placeholder="Full name" type="text" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input name="email" {...register('email')} className="form-control" placeholder="Email address" type="email" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                </div>
                <select {...register('countryCode')} className="custom-select" style={{ maxWidth: "120px" }}>
                  <option value="+91">+91</option>
                  <option value="+001">+001</option>
                  <option value="+020">+020</option>
                  <option value="+011">+011</option>
                </select>
                <input name="phoneNumber" {...register('phoneNumber')} className="form-control" placeholder="Phone number" type="text" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                </div>
                <select name="jobType" {...register('jobType')} className="form-control">
                  <option value="">Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                </select>
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input name="password" {...register('password')} className="form-control" placeholder="Create password" type="password" />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input name="repeatPassword" {...register('repeatPassword')} className="form-control" placeholder="Repeat password" type="password" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
              </div>
              <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Registration;
