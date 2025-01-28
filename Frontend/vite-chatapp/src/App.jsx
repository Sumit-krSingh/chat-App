
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import  { Toaster } from 'react-hot-toast';
import { useAuthContext } from './Context/AuthContext'
import Navbar from './components/navbar/Navbar'
import { useThemeHook } from './hooks/useThemeHook'
import SettingsPage from './pages/setting/SettingsPage'

function App() {
  const {authUser} = useAuthContext();
  const{theme} = useThemeHook();


  return (
    <>
     <div className='p-4 h-screen flex items-center justify-center' data-theme ={theme}>
     <Navbar/>
      <Routes>
        <Route path='/' element ={authUser ? <Home/>: <Navigate to = {"/login" }/> }/>
        <Route path='/login' element ={authUser ? <Navigate to = "/" /> :<Login/>}/>
        <Route path='/signup' element ={authUser ? <Navigate to = "/" /> :<SignUp/>}/>
        <Route path='/settings' element ={<SettingsPage />} />
      </Routes>
      <Toaster/>
     </div>
    </>
  )
}

export default App
