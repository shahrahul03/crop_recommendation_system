import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { validateLoginForm, validateRegistrationForm, validateForgotPasswordForm } from './validation'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';
import Popup from '../LogiComponent/popupComponent';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(loginEmail, loginPassword);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('authToken', data.token);
        console.log(data.token)
        setPopupMessage('User logged in successfully');
        setTimeout(() => {
          setPopupMessage('');
          navigate('/homepage');
        }, 3000);
      } else {
        console.error('Error logging in:', data.message);
        setErrors({ loginEmail: data.message });
      }
    } catch (error) {
      console.error('Server error:', error);
      setErrors({ loginEmail: 'Server error' });
    }
  };
  

  const handleRegister = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegistrationForm(name, address, contact, registerEmail, registerPassword);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          contact,
          email: registerEmail,
          password: registerPassword,
        }),
      });
  
      const data = await response.json();
      if (response.status === 201) {
        
  
        setPopupMessage('User registered successfully');
        setTimeout(() => {
          setPopupMessage('');
          setIsLogin(true);
        }, 3000);
      } else {
        console.error('Error registering user:', data.message);
        setErrors({ registerEmail: data.message });
        
       
      }
    } catch (error) {
      console.error('Server error:', error);
      setErrors({ registerEmail: 'Server error' });
    }
  };
  

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const validationErrors = validateForgotPasswordForm(loginEmail);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setPopupMessage('Password reset email sent');
        setTimeout(() => {
          setPopupMessage('');
          setIsForgotPassword(false);
        }, 3000);
      } else {
        console.error('Error sending reset email:', data.message);
        setErrors({ loginEmail: data.message });
      }
    } catch (error) {
      console.error('Server error:', error);
      setErrors({ loginEmail: 'Server error' });
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Side - Image and Welcome Message */}
        <div className="md:w-1/2 p-6 bg-green-50 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Crop Recommendation System</h2>
          <p className="text-gray-700 mb-4 text-center">
            Explore our platform to get tailored crop recommendations based on your input. We are here to assist you in making informed decisions.
          </p>
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crop Recommendation"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
            {isLogin ? 'Sign In' : isForgotPassword ? 'Forgot Password' : 'Register'}
          </h2>
          
          {isForgotPassword ? (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.loginEmail ? 'border-red-500' : ''}`}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                {errors.loginEmail && <span className="text-red-500 text-sm">{errors.loginEmail}</span>}
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg transform transition hover:scale-105"
              >
                Send Reset Link
              </button>
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setIsForgotPassword(false)}
                  className="text-green-500 hover:underline"
                >
                  Back to Sign In
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.address ? 'border-red-500' : ''}`}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Contact"
                      className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.contact ? 'border-red-500' : ''}`}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    {errors.contact && <span className="text-red-500 text-sm">{errors.contact}</span>}
                  </div>
                </>
              )}
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.loginEmail ? 'border-red-500' : ''}`}
                  value={isLogin ? loginEmail : registerEmail}
                  onChange={(e) => isLogin ? setLoginEmail(e.target.value) : setRegisterEmail(e.target.value)}
                />
                {errors.loginEmail && <span className="text-red-500 text-sm">{errors.loginEmail}</span>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.loginPassword || errors.registerPassword ? 'border-red-500' : ''}`}
                  value={isLogin ? loginPassword : registerPassword}
                  onChange={(e) => isLogin ? setLoginPassword(e.target.value) : setRegisterPassword(e.target.value)}
                />
                {errors.loginPassword && <span className="text-red-500 text-sm">{errors.loginPassword}</span>}
                {errors.registerPassword && <span className="text-red-500 text-sm">{errors.registerPassword}</span>}
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg transform transition hover:scale-105"
              >
                {isLogin ? 'Sign In' : 'Register'}
              </button>
              <div className="text-center mt-4">
                {isLogin ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-green-500 hover:underline"
                    >
                      Forgot Password?
                    </button>
                    <div className="mt-4 text-gray-600">
                      <p className="text-center">
                        Don't have an account
                        <button
                          type="button"
                          onClick={() => setIsLogin(false)}
                          className="text-green-500 hover:underline ml-2" // Added ml-2 for margin-left
                        >
                          Register?
                        </button>
                      </p>
                    </div>

                    
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-green-500 hover:underline"
                  >
                    Already have an account? Sign In
                  </button>
                )}
              </div>
            </form>
          )}
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      {popupMessage && <Popup message={popupMessage} />}
    </div>
  );
};

export default Login;
