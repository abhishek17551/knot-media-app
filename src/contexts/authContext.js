import { createContext, useContext, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/authService";
import { toast } from "react-hot-toast";

export const AuthConext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const localStorageToken = JSON.parse(localStorage.getItem('loginDetails'));

    const [loading,setLoading] = useState(false)
    const [token,setToken] = useState(localStorageToken?.token || "")
    const [currentUser,setCurrentUser] = useState(localStorageToken?.user)

    const signupHandler = async ({firstName, lastName, username, password}) => {
        setLoading(true);
        try {
            const response = await signupService(firstName,lastName,username,password);
            const {status, data:{createdUser,encodedToken} } = response;
            if(status === 201) {
                localStorage.setItem(
                    "loginDetails",
                    JSON.stringify({token: encodedToken, user: createdUser})
                );
                setToken(encodedToken)
                setCurrentUser(createdUser)
                toast.success(`Hello, ${createdUser.firstName}` , {
                    icon:'👋'
                })
                navigate("/", {replace:true})
            }
        }

        catch(error) {
            console.error(error)
            toast.error('Ooops! Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const loginHandler = async ({username, password}) => {
        setLoading(true);
        try {
            const response = await loginService(username,password);
            const { status, data: {encodedToken,foundUser}} = response;
            if(status === 200 ) {
                localStorage.setItem(
                    "loginDetails", 
                    JSON.stringify({token: encodedToken, user: foundUser})
                )
                setToken(encodedToken)
                setCurrentUser(foundUser)
                toast.success(`Aloha! Welcome back ${foundUser.firstName}`,{
                    icon: "👋"
                })
                navigate(location?.state?.from?.pathname || "/", {replace:true})
            }
        }

        catch(error) {
            console.log(error)
            toast.error('Please ensure to enter correct details')
        }
        finally {
            setLoading(false)
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem("loginDetails")
        setToken(null)
        setCurrentUser(null)
        toast.success("Logged Out Successfully!")
        navigate('/auth/login')
    }

    return (
        <AuthConext.Provider
            value={{
                token,
                currentUser,
                setCurrentUser,
                loading,
                signupHandler,
                loginHandler,
                logoutHandler
            }}
        >
            {children}
        </AuthConext.Provider>
    )
}

export const useAuth = () => useContext(AuthConext)