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
    <div>
      <div>
        {/* logo image here */}
      </div>

      <h2>SignUp</h2>
      <p>Join the Knot, Unlock New Connections...</p>

      <form onSubmit={signupFormSubmitHandler}>
        <div>
          <input 
            type="text"
            name="firstName" 
            value={signupDetails.firstName}
            placeholder="Enter First Name."
            onChange={signupFormInputHandler}
            required
          />

          <input
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Enter Last Name."
            onChange={signupFormInputHandler}
            required
          />

          <input
            type="text"
            name="username"
            value={signupDetails.username}
            placeholder="Enter Username."
            onChange={signupFormInputHandler}
            required
          />

          <div>
            <input 
              type={signupDetails.show.pwd ? "text" : "password"}
              name="password"
              value={signupDetails.password}
              placeholder="Enter Password."
              onChange={signupFormInputHandler}
              required
            />
            {
              !signupDetails.show.pwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, pwd: !signupDetails.show.pwd}
                  })}
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, pwd: !signupDetails.show.pwd}
                  })}
                />
              )
            }
          </div>

          <div>
            <input
              type={signupDetails.show.confirmPwd ? "text" : "password"}
              name="confirmPassword"
              value={signupDetails.confirmPassword}
              placeholder="Confirm Password"
              onChange={signupFormInputHandler}
              required
            />
                        {
              !signupDetails.show.pwd ? (
                <AiOutlineEyeInvisible
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, confirmPwd: !signupDetails.show.confirmPwd}
                  })}
                />
              ) : (
                <AiOutlineEye 
                  onClick={() => setSignupDetails({
                    ...signupDetails, show : {...signupDetails.show, confirmPwd: !signupDetails.show.confirmPwd}
                  })}
                />
              )
            }
          </div>

          <PrimaryButton
            type='submit'
            disabled={!signupDetails.pwdMatch}
          >
            SignUp
          </PrimaryButton>
        </div>
      </form>
      <p>Already have an account?
      <span onClick={() => navigate("/auth/login")}>Login</span>
      </p>
    </div>
  )
}

export  {Signup}