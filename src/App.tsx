
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { AuthProvider } from './context/auth'
import PublicRoutes from './routes/PublicRoutes'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    
    <AuthProvider>
      <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<PublicRoutes><SignUp /></PublicRoutes>} />
   </Routes>
   
   </div>
    </AuthProvider>
    <Footer />
   
    </>
    
    
  )
}

export default App
