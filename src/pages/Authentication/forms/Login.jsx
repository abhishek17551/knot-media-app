import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext';
import { PrimaryButton, SecondaryButton } from '../../../components/Button/Button';
import { guestUserLoginDetails } from '../../../utils/constants';

function Login() {
  const navigate = useNavigate();
  const {loginHandler} = useAuth();

  const [loginDetails,setLoginDetails] = useState({
    username: "",
    password: "",
    showPwd: false,
  })

  document.title = "Login | Knot"

  const loginFormInputHandler = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails, [name]: value})
  }

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails)
  }
  return (
    <div className='md:w-1/2 px-16 pb-4'>
      <div>
      {/* logo image here  */}
      </div>

      <h2 className="text-center font-bold text-2xl">Login</h2>
      <p className="text-center text-sm my-4">Join the Knot, Unlock New Connections...</p>

      <form onSubmit={loginFormSubmitHandler} className='flex flex-col gap-4'>
        <input 
          type="text" 
          name="username"
          value={loginDetails.username}
          placeholder='Enter Username.'
          onChange={loginFormInputHandler}
          className="rounded-md border p-[0.45rem] mt-4 "
        />

        <div>
          <input 
            type={loginDetails.showPwd ? "text" : "password"}
            name='password'
            value={loginDetails.password}
            placeholder='Enter Password.'
            onChange={loginFormInputHandler}
            className="rounded-md border p-[0.45rem]  w-full"
          />
          {
              !loginDetails.showPwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setLoginDetails({
                    ...loginDetails, show : {...loginDetails, showPwd: !loginDetails.showPwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setLoginDetails({
                    ...loginDetails, show : {...loginDetails, showPwd: !loginDetails.showPwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              )
          }
        </div>

        <PrimaryButton type='submit' className="rounded-md py-2.25">
          Login
        </PrimaryButton>
        <SecondaryButton
          type='submit'
          onClick={() => setLoginDetails({
            ...loginDetails,
            username : guestUserLoginDetails.username,
            password : guestUserLoginDetails.password
          })}
          className="rounded-md py-2.25"
        >
          Login As A Guest
        </SecondaryButton>
      </form>
      <p className="text-sm my-[1rem] ">
        New To Knot Media?
        <span onClick={() => navigate("/auth/signup")}
              className='text-secondaryDark font-bold hover:underline hover:cursor-pointer'
        >SignUp</span>
      </p>
    </div>
  )
}

export {Login} 