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

  // const switchToForm = (formName) => {
  //   setActiveForm(formName);
  //   setErrors({});
  // };

  // const [activeForm, setActiveForm] = useState('login');

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
    console.log('Logging in with', { loginEmail, loginPassword });
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
        name: name,
        address: address,
        contact: contact,
        email: registerEmail,
        password: registerPassword,
      }),
    });

    const data = await response.json();
    if (response.status === 201) {
      // Store the token
      localStorage.setItem('authToken', data.token);

      setPopupMessage('User registered successfully');
      setTimeout(() => {
        setPopupMessage('');
        setIsLogin(true); // Change to login form after successful registration
      }, 3000);
    } else {
      console.error('Error registering user:', data.message);
      setErrors({ registerEmail: data.message });
    }
  } catch (error) {
    console.error('Server error:', error);
    setErrors({ registerEmail: 'Server error' });
  }
  console.log('Registering with', { name, address, contact, registerEmail, registerPassword });
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
          setIsForgotPassword(false); // Change to login form after successful forgot password request
        }, 3000);
      } else {
        console.error('Error sending reset email:', data.message);
        setErrors({ loginEmail: data.message });
      }
    } catch (error) {
      console.error('Server error:', error);
      setErrors({ loginEmail: 'Server error' });
    }
    console.log('Sending forgot password request for', { loginEmail });
  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 -mt-9 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          {isLogin ? 'Sign In' : isForgotPassword ? 'Forgot Password' : 'Register'}
        </h2>
        {isForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.loginEmail ? 'border-red-500' : ''}`}
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              {errors.loginEmail && <span className="text-red-500 text-sm">{errors.loginEmail}</span>}
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg transform transition hover:scale-105"
            >
              Send Reset Link
            </button>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-500 hover:underline"
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
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.address ? 'border-red-500' : ''}`}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Contact"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.contact ? 'border-red-500' : ''}`}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  {errors.contact && <span className="text-red-500 text-sm">{errors.contact}</span>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Register E-mail"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.registerEmail ? 'border-red-500' : ''}`}
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  {errors.registerEmail && <span className="text-red-500 text-sm">{errors.registerEmail}</span>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Register Password"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.registerPassword ? 'border-red-500' : ''}`}
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                  {errors.registerPassword && <span className="text-red-500 text-sm">{errors.registerPassword}</span>}
                </div>
              </>
            )}
            {isLogin && (
              <>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.loginEmail ? 'border-red-500' : ''}`}
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  {errors.loginEmail && <span className="text-red-500 text-sm">{errors.loginEmail}</span>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.loginPassword ? 'border-red-500' : ''}`}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {errors.loginPassword && <span className="text-red-500 text-sm">{errors.loginPassword}</span>}
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg transform transition hover:scale-105"
            >
              {isLogin ? 'Sign In' : 'Register'}
            </button>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                {isLogin ? "Don't have an account? Register" : 'Already have an account? Sign In'}
              </button>
            </div>
          </form>
        )}
        {isLogin && (
          <div className="flex justify-center items-center mt-6">
            <span className="mr-2">Or Sign in with:</span>
            <div>
              <button className="text-blue-700 flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transform transition hover:scale-105">
                <FaGoogle size={24} />
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {popupMessage && (
        <Popup message={popupMessage} onClose={() => setPopupMessage('')} />
      )}
    </div>
  );
};

export default Login;