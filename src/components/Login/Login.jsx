import React, { useState } from 'react';
import axios from 'axios';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from '@heroicons/react/20/solid'
import { UserContext } from '../App/App';




export default function Login({ setCurrentUser }) {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const value = React.useContext(UserContext)
    console.log('value in login', value.length)
    
    function registerUser(e){
        e.preventDefault()
        console.log('username, password', username, password)

        axios({
        method: 'POST',
        url: '/api/user/register',
        data: {
            username: username,
            password: password
        }
        }).then((response) => {
            loginUser(e)
        }).catch((err) => {
            console.log('error registering', err)
            //TODO: Add Alert here
        })
    }

    function loginUser(e){
        e.preventDefault()
        console.log('here CS?')
        const config ={
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        axios.post('/api/user/login', {username: username, password: password}, config)
            .then((response) => {
                console.log('response', response)
                setCurrentUser(username)
                setPassword('')
                setUsername('')
                setShowLogin(false)
            }).catch((err) =>{
                console.log('error in login', err)
            })
                
    }





  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
              <>
      {value.length === 0 ? (<button
        className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        type="button"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>) : <button>Logout</button> }
      {showLogin ? (
      <div className="flex min-h-full items-center justify-center shadow-xl py-12 px-4 sm:px-6 lg:px-8 rounded-xl absolute bg-slate-800">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className='my-8'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
              onClick={loginUser}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
              <button
                onClick={registerUser}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 my-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <PlusIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Create account
              </button>
            </div>
        </div>
      </div>
      ) : null}
    </>
    </>
    
  )
}
