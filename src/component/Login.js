import React from 'react'
import './login.css'

export default function login() {

  return (
    <>
      <div className='main'>
        <form className='content container'>

          <h1>Welcome Back</h1>
          <h2>Sign in with
            <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://gmail.com" target="_blank"><i class="bi bi-google"></i></a>
          </h2>
          <input type="text" placeholder='Username' id='email' className='inputdiv' required />
          <input type="password" placeholder='Password' className='inputdiv' required />
          <div className='checkbox'>
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Remember me</label>
          </div>

          <button type='button' className='submit btn btn-success btn-lg'>Login</button>
          <p>Don't have an account?

          </p>


          <button type='button' className='btn btn-success btn-lg'>Create your Account</button>

        </form>


      </div>
    </>
  )
}
