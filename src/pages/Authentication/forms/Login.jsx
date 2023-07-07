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
    <div>
      <div>
      {/* logo image here  */}
      </div>

      <h2>Login</h2>
      <p>Join the Knot, Unlock New Connections...</p>

      <form onSubmit={loginFormSubmitHandler}>
        <input 
          type="text" 
          name="username"
          value={loginDetails.username}
          placeholder='Enter Username.'
          onChange={loginFormInputHandler}
        />

        <div>
          <input 
            type={loginDetails.showPwd ? "text" : "password"}
            name='password'
            value={loginDetails.password}
            placeholder='Enter Password.'
            onChange={loginFormInputHandler}
          />
          {
              !loginDetails.showPwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setLoginDetails({
                    ...loginDetails, show : {...loginDetails, showPwd: !loginDetails.showPwd}
                  })}
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setLoginDetails({
                    ...loginDetails, show : {...loginDetails, showPwd: !loginDetails.showPwd}
                  })}
                />
              )
          }
        </div>

        <PrimaryButton type='submit'>
          Login
        </PrimaryButton>
        <SecondaryButton
          type='submit'
          onClick={() => setLoginDetails({
            ...loginDetails,
            username : guestUserLoginDetails.username,
            password : guestUserLoginDetails.password
          })}
        >
          Login As A Guest
        </SecondaryButton>
      </form>
      <p>
        New To Knot Media?
        <span onClick={() => navigate("/auth/signup")}>SignUp</span>
      </p>
    </div>
  )
}

export {Login} 