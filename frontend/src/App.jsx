import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from  './pages/HomePage.jsx'
import SignupPage from  './pages/SignupPage.jsx'
import LoginPage from  './pages/LoginPage.jsx'
import SettingsPage from  './pages/SettingsPage.jsx'
import ProfilePage from  './pages/ProfilePage.jsx'
import {useAuthStore} from './store/useAuthStore.js'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'
import {Toaster} from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore.js'
function App() {
  const [count, setCount] = useState(0)
  const {authUser,checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();
  const {theme} = useThemeStore()
  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  console.log({authUser})

  if(isCheckingAuth && !authUser){
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'>

        </Loader>

      </div>
    )
  }

  return (
    <div data-theme={theme}>
      <Navbar>Navbar</Navbar>
      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/login'></Navigate>  }/>
        <Route path='/signup' element={ !authUser ? <SignupPage/>  :  <Navigate to='/'></Navigate> }/>
        <Route path='/login' element={!authUser ? <LoginPage/> :  <Navigate to='/'></Navigate>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to='/login'></Navigate>}/>
           
        
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
