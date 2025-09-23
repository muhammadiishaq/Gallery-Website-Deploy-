

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Sign up successful!', {
        position: 'top-right',
      });
      navigate('/login');
    } catch (error: any) {
      setError(error.message);
      toast.error(`Sign up failed: ${error.message}`, {
        position: 'top-left',
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Ngetich Pixels!</h1>
              <p className="py-6">Sign up to access all the features for free</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <p>Already have an account? <Link to="/login">Login Now</Link></p>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary bg-success">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;

