import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import '../../css/success.css'

const RegistrationSuccess = (props) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 30000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="logo-msg">
        <img src={'./icons/logo.png'} alt="Logo" />
      </div>
      <div className="message">
      <h1>Registration Successful</h1>
        <p>Thank you for registering for our yoga teacher training course.</p>
        <p>Your registration has been received, and our team will review your application shortly.</p>
        <p>You will receive an email confirmation with further details. If you have any questions or need assistance, please feel free to <Link to="/contact">contact us</Link>.</p>
        <p>
          You will be redirected to the home page in {count} seconds.
          Alternatively, you can click <Link to="/">here</Link> to go back to the homepage now.
        </p>
      </div>
    </div>
  );
};

const RegistrationFailure = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="logo-msg">
        <img src={'./icons/logo.png'} alt="Logo" />
      </div>
      <div className="message">
        <h1>Registration Failed!</h1>
        <p>We apologize for the inconvenience. Please try again later or <a href="/contact">contact us</a> if the problem persists.</p>
        <p>You will be redirected to the home page in {count} seconds.</p>
        <p>
            Alternatively, you can click <Link to="/">here</Link> to go back to
            the homepage now.
        </p>
      </div>
    </div>
  );
};

const RegistrationPaymentCancelled = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="logo-msg">
        <img src={'./icons/logo.png'} alt="Logo" />
      </div>
      <div className="message">
        <h1>Registration Failed!</h1>
        <p>Payment cancelled. Your booking request has not been processed. Please try again later or <a href="/contact">contact us</a> If you have any queries.</p>
        <p>You will be redirected to the home page in {count} seconds.</p>
        <p>
            Alternatively, you can click <Link to="/">here</Link> to go back to
            the homepage now.
        </p>
      </div>
    </div>
  );
};

export { RegistrationSuccess, RegistrationFailure, RegistrationPaymentCancelled };
