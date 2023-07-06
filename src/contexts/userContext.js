import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "./authContext";
import { initialUserState, userReducer } from "../reducers/userReducer";
import { actionTypes } from "../utils/constants";
import { addBookmarkService, editUserProfileService, followUserService, getAllUsersService, getBookmarksService, getUserByUsernameService, removeBookmarkService, unfollowService } from "../services/usersService";
import { toast } from "react-hot-toast";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const {token,setCurrentUser} = useAuth();

    const [loading,setLoading] = useState(false)
    const [userState,userDispatch] = userReducer(userReducer,initialUserState)

    const timerId = useRef();

    const {
        GET_ALL_USERS,
        GET_ALL_BOOKMARKS,
        ADD_BOOKMARK,
        REMOVE_BOOKMARK,
        GET_ONE_USER,
        UPDATE_FOLLOW_USER,
        EDIT_USER_PROFILE, 
    } = actionTypes;

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const { status, data:{users}} = await getAllUsersService();
            if(status === 200){
                userDispatch({ type : GET_ALL_USERS, payload : users})
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    const getUserByUsername = async (username) => {
        setLoading(true);
        try {
            const { status, data:{user}} = await getUserByUsernameService(username);
            if(status === 200) {
                userDispatch({ type : GET_ONE_USER, payload : user })
            }
        }
        catch(error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    const getAllBookMarks = async () => {
        setLoading(true);
        try {
            const {status, data: { bookmarks }} = await getBookmarksService(token);
            if(status === 200){
                userDispatch({ type : GET_ALL_BOOKMARKS, payload : bookmarks})
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const addBookmarkHandler = async (postId) => {
        setLoading(true);
        try {
            const {status, data: { bookmarks }} = await addBookmarkService(postId,token)
            if(status === 200){
                userDispatch({ type : ADD_BOOKMARK, payload : bookmarks});
                toast.success('Added to Bookmarks!')
            }
        }
        catch (error) {
            const { response:{status}} = error;
            if(status === 400 ) {
                toast.error('This Post is already Bookmarked!')
            } else {
                toast.error('Woohoo! Something went wrong.')
            }
        }
    }

    const removeBookmarkHandler = async (postId) => {
        setLoading(true);
        try {
            const {status, data: { bookmarks }} = await removeBookmarkService(postId, token);
            if(status === 200){
                userDispatch({ type : REMOVE_BOOKMARK, payload : bookmarks});
                toast.success('Removed from bookmarks!');
            }
        }
        catch (error) {
            const { response:{status}} = error;
            if(status === 400 ) {
                toast.error('This Post is not yet Bookmarked!')
            } else {
                toast.error('Woohoo! Something went wrong.')
            }
        }
    }

    const postAlreadyInBookmarks = (postId) => userState?.bookmarks?.find((id) => id === postId);

    const followUserHandler = async (followUserId) => {
        setLoading(true);
        try {
            const {status, data: { user, followUser }} = await followUserService(followUserId, token);
            if(status === 200){
                userDispatch({ type : UPDATE_FOLLOW_USER, payload : [followUser, user]});
                setCurrentUser(user);
                toast.success(`Following @${followUser.username}`)
            }
        }
        catch (error) {
            console.log(error);
            toast.error('Woohoo! Something went wrong.')
        }
        finally {
            setLoading(false)
        }
    }

    const unfollowUserHandler = async (followUserId) => {
        setLoading(true);
        try {
            const {status, data : {user, followUser} } = await unfollowService(ollowUserId, token)
            if(status === 200){
                userDispatch({ type : UPDATE_FOLLOW_USER, payload : [followUser, user]});
                setCurrentUser(user);
                toast.success(`Unfollowed @${followUser.username}`);
            }
        }
        catch (error) {
            console.log(error)
            toast.error('Woohoo! Something went wrong.');
        }
        finally {
            setLoading(false)
        }
    }

    const editUserProfileHandler = async (editInput) => {
        setLoading(true);
        try {
            const {status, data: {user}} = await editUserProfileService(editInput, token)
            if(status === 201){
                userDispatch({ type : EDIT_USER_PROFILE, payload : user});
                setCurrentUser(user);
                toast.success("Profile updated successfully!");
            }
        }
        catch (error) {
            console.log(error);
            toast.error('Woohoo! Something went wrong.');
        }
        finally {
            setLoading(false)
        }
    }

    const searchedUsers = userState.searchInput && userState.users.filter((user) => 
            user.username.toLowerCase().includes(userState.searchInput.toLowerCase())
        );

    const handleButtonsClick = (delay,callback,...args) => {
        clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            callback(...args)
        }, delay);
    }

    useEffect(() => {
        getAllUsers();
        if(token) {
            getAllBookMarks();
        }
    }, [token])

    return (
        <UserContext.Provider
            value={{
                userState,
                userDispatch,
                loading,
                searchedUsers,
                getUserByUsername,
                followUserHandler,
                unfollowUserHandler,
                editUserProfileHandler,
                addBookmarkHandler,
                removeBookmarkHandler,
                postAlreadyInBookmarks,
                handleButtonsClick
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const userUsers = () => useContext(UserContext)