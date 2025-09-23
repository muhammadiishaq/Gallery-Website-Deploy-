
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/config";

// const Login = () => {
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login Now!</h1>
//             <p className="py-6">Login to access all the features for free</p>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <div className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="input input-bordered"
//                   required
//                   name="email"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="input input-bordered"
//                   required
//                   name="password"
//                 />
//               </div>
//               <p>
//                 Don't have an account? <Link to="/signup">Sign Up</Link>
//               </p>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary bg-success">
//                   Login Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful!', {
        position: "top-right"
      });
      navigate("/");
    } catch (err: any) {
      setError(err.message);
      toast.error(`Login failed❌: ${err.message}`, {
        position: "top-right"
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
              <h1 className="text-5xl font-bold">Login Now!</h1>
              <p className="py-6">Login to access all the features for free</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                </div>
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary bg-success">
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
