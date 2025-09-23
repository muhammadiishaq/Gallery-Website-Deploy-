import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth)
      toast.success('Logged out successfully!');
      navigate('/login')
    } catch (error: any) {
      toast.error(`Error logging out: ${error.message}`);
    }
  }

  return (
    <>
      <div className="navbar bg-base-200 px-4">
        {/* Left side */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">📸 Gallery App</a>
        </div>

        {/* Center: GitHub info */}
        <div className="flex-none flex items-center gap-2 text-lg">
          <span className="font-semibold">GitHub Account:</span>
          <a
            href="https://github.com/muhammadishaq"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            Muhammad Ishaq
          </a>
        </div>

        {/* Right side: Logout */}
        <div className="flex-none ml-4">
          <button
            onClick={handleLogOut}
            className="btn btn-sm btn-outline"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Navbar

