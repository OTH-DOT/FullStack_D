import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/react.svg'

const Layout = () => {
  return (
    <>
      <header>
        <div className='flex items-center justify-between bg-slate-500 p-4 ' >
          <div className='flex items-center' >
            <img src={logo} className='mr-2' alt="" />
            <span className='text-white' >School management</span>
          </div>
          <div>
            <ul className='flex text-white ' >
              <li className='ml-5 px-2 py-1'><Link to={'/'} >Home</Link></li>
              <li className='ml-5 px-2 py-1'><Link to={'/login'} >Login</Link></li>
              <li className='ml-5 px-2 py-1'><Link to={'/signup'} >Signup</Link></li>
              <li className='ml-5 px-2 py-1'><Link to={'/users'} >Users</Link></li>
              <li className='ml-5 px-2 py-1 bg-white rounded-md text-slate-500 p-3 '><a href="#">Dark Mode</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main className='container mx-auto ' >
        <Outlet /> 
      </main>
    </>
  )
}

export default Layout