import React, { useState } from 'react';
import axios from 'axios';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from '@heroicons/react/20/solid'
import { UserContext } from '../App/App';




export default function Login({ setCurrentUser }) {
    const value = React.useContext(UserContext)
    
    const [showLogin, setShowLogin] = useState(value.length ===[] ? false : true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log('value in login', value.length)
    //Add new user
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
            //logs in after creating
            loginUser(e)
        }).catch((err) => {
            console.log('error registering', err)
            //TODO: Add Alert here
        })
    }
    //Login current user
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

    function logoutUser(e){
        e.preventDefault()
        try {
            const config = {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            };
        
            // the config includes credentials which
            // allow the server session to recognize the user
            // when the server recognizes the user session
            // it will end the session
            axios.post('/api/user/logout', config)
                .then((response) =>{
                    setCurrentUser([])
                    setShowLogin(true)
                });
        
            // now that the session has ended on the server
            // remove the client-side user object to let
            // the client-side code know the user is logged out
          } catch (error) {
            console.log('Error with user logout:', error);
          }
    }




    //login and registration modal
  return (
    <>

              <>
      {value.length === 0 ? (<button
        className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent "
        type="button"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>) : 
      <button onClick={logoutUser}
      className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >Logout</button> }
      {showLogin ? (
      <div className="flex min-h-full min-w-full items-center justify-center shadow-xl py-24 px-4 sm:px-6 lg:px-8 rounded-xl absolute bg-slate-800 opacity-90">
        <div className="w-full max-w-sm space-y-8 bg-purple-800 bg-opacity-90 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative font-bold block w-full appearance-none rounded-none rounded-t-md border border-gray-800 px-3 py-2 text-black placeholder-black focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
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
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="relative font-bold block w-full appearance-none rounded-none rounded-b-md border border-gray-800 px-3 py-2 text-black placeholder-black focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
              onClick={loginUser}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-100 py-2 px-4 my-4 text-md font-medium text-purple-800 hover:text-white 
                hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-600 group-hover:text-white" aria-hidden="true" />
                </span>
                Sign in
              </button>
              <button
                onClick={registerUser}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-100 py-2 px-4 my-4 text-md font-medium text-purple-600 hover:text-white 
                hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <PlusIcon className="h-5 w-5 text-purple-600 group-hover:text-white" aria-hidden="true" />
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

// shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white 
// hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2