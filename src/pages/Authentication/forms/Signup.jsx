import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext';
import { PrimaryButton } from '../../../components/Button/Button';

function Signup() {
  const navigate = useNavigate();
  const { signupHandler } = useAuth();

  const [signupDetails,setSignupDetails] = useState*{
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    pwdMatch: true,
    show: { pwd: false, confirmPwd: false },
  }

  document.title = "Signup | Knot"

  const signupFormInputHandler = (e) => {
    const {name, value} = e.target;
    if(name === 'confirmPassword') {
      setSignupDetails({
        ...signupDetails,
        [name] : value,
        pwdMatch : value === signupDetails.password ? true : false
      })
    } else if (name === 'password') {
      setSignupDetails({
        ...signupDetails,
        [name] : value,
        pwdMatch: value === signupDetails.confirmPassword ? true : false
      })
    } else {
      setSignupDetails({ ...signupDetails, [name]: value });
    }
  }

  const signupFormSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupDetails)
  }
  return (
    <div className='md:w-1/2 px-16 pb-4'>
      <div>
        {/* logo image here */}
      </div>

      <h2 className="text-center font-bold text-2xl">SignUp</h2>
      <p className="text-center text-sm text-sm">Join the Knot, Unlock New Connections...</p>

      <form onSubmit={signupFormSubmitHandler} className='flex flex-col gap-4'>
        <div className='flex flex-row gap-3 mt-4'>
          <input 
            type="text"
            name="firstName" 
            value={signupDetails.firstName}
            placeholder="Enter First Name."
            onChange={signupFormInputHandler}
            required
            className="rounded-md border p-[0.45rem]  w-1/2"
          />

          <input
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Enter Last Name."
            onChange={signupFormInputHandler}
            required
            className="rounded-md border p-[0.45rem]  w-1/2"
          />

          <input
            type="text"
            name="username"
            value={signupDetails.username}
            placeholder="Enter Username."
            onChange={signupFormInputHandler}
            required
            className="rounded-md border p-[0.45rem]"
          />

          <div className="relative">
            <input 
              type={signupDetails.show.pwd ? "text" : "password"}
              name="password"
              value={signupDetails.password}
              placeholder="Enter Password."
              onChange={signupFormInputHandler}
              required
              className="rounded-md border p-[0.45rem] w-full"
            />
            {
              !signupDetails.show.pwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, pwd: !signupDetails.show.pwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, pwd: !signupDetails.show.pwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              )
            }
          </div>

          <div className="relative">
            <input
              type={signupDetails.show.confirmPwd ? "text" : "password"}
              name="confirmPassword"
              value={signupDetails.confirmPassword}
              placeholder="Confirm Password"
              onChange={signupFormInputHandler}
              required
              className="rounded-md border p-[0.45rem] w-full"
            />
            {
              !signupDetails.show.confirmPwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, confirmPwd: !signupDetails.show.confirmPwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, confirmPwd: !signupDetails.show.confirmPwd}
                  })}
                  className="absolute cursor-pointer top-[0.75rem] right-3.25"
                />
              )
            }
            { !signupDetails.pwdMatch && (
              <p>Password do not match!</p>
            )}
          </div>

          <PrimaryButton
            type='submit'
            disabled={!signupDetails.pwdMatch}
            className="rounded-md py-2.25"
          >
            SignUp
          </PrimaryButton>
        </div>
      </form>
      <p className="text-sm my-[1.25rem]">Already have an account?
      <span onClick={() => navigate("/auth/login")}
            className='text-secondaryDark font-bold hover:underline hover:cursor-pointer'
            >
              Login</span>
      </p>
    </div>
  )
}

export  {Signup}