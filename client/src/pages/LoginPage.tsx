import React from 'react'

const LoginPage = () => {
  return (
    <div className='mt-4'>
        <h1 className='text-4xl text-center'>Login</h1>
        <form className='max-w-md mx-auto'>
            <input type="email" name="" id="" placeholder='your@email.com'/>
            <input type="password" name="" id="" placeholder='password'/>
            <button className='primary'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage