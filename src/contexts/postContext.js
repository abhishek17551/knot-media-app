import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useAuth } from "./authContext";
import { initialPostState, postReducer } from "../reducers/postReducer";
import { actionTypes } from "../utils/constants";
import { addCommentService, createPostService, deleteCommentService, deletePostService, dislikePostService, editCommentService, editPostService, getAllPostsService, getSinglePostService, likePostService } from "../services/postsService";
import { toast } from "react-hot-toast";

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const {token} = useAuth();

    const [postState,postDispatch] = useReducer(postReducer,initialPostState);
    const [loading,setLoading] = useState(false);

    const {
        GET_ALL_POSTS,
        GET_SINGLE_POST,
        EDIT_POST,
        LIKE_POST,
        DISLIKE_POST,
        CREATE_NEW_POST,
        DELETE_POST, 
        ADD_NEW_COMMENT,
        DELETE_COMMENT,
        EDIT_COMMENT,
    } = actionTypes;

    const getAllPosts = async () => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts }, 
            } = await getAllPostsService();
            if(status === 200){
                postDispatch({type: GET_ALL_POSTS, payload: posts})
            }
        }
        catch(error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    const getSinglePost = async (postId) => {
        setLoading(true);
        try {
            const {
                status,
                data: { post },
            } = await getSinglePostService(postId);
            if(status === 200) {
                postDispatch({type: GET_SINGLE_POST, payload: post})
            }
        }
        catch(error) {
            console.error(error)
        }
        finally {
            setLoading(false); 
        }
    }

    const createPostHandler = async ({ content, media, mediaAlt }) => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts },
            } = await createPostService(content, media, mediaAlt, token);
            if(status === 201) {
                postDispatch({type: CREATE_NEW_POST, payload: posts})
            }

        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
        finally {
            setLoading(false)
        }
    }

    const deletePostHandler = async (postId) => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts },
            } = await deletePostService(postId,token);
            if(status === 201) {
                postDispatch({type: DELETE_POST, payload: posts});
                toast.success('Post deleted successfully!')
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
        finally {
            setLoading(false);
        }
    }

    const editPostHandler = async (postId, { content, media, mediaAlt }) => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts },
            } = await editPostService(postId,content,media,mediaAlt,token);
            if(status === 201) {
                postDispatch({type: EDIT_POST, payload: posts})
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
        finally {
            setLoading(false)
        }
    }

    const likePostHandler = async (postId) => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts }, 
            } = await likePostService(postId,token);
            if(status === 201) {
                postDispatch({type: LIKE_POST, payload: posts})
                toast.success("Post liked")
            }
        }
        catch(error) {
            const {response : {status}} = error;
            if(status === 400) {
                toast.error('This Post is already liked!')
            } else {
                console.error(error);
                toast.error("Woohoo! Something went wrong.")
            }
        }
        finally {
            setLoading(false)
        }
    }

    const dislikePostHandler = async (postId) => {
        setLoading(true)
        try {
            const {
                status,
                data: { posts }, 
            } = await dislikePostService(postId,token);
            if(status === 201) {
                postDispatch({type: DISLIKE_POST,, payload: posts})
                toast.success("Post disliked")
            }
        }
        catch(error) {
            const {response : {status}} = error;
            if(status === 400) {
                toast.error('This Post is already disliked!')
            } else {
                console.error(error);
                toast.error("Woohoo! Something went wrong.")
            }
        }
        finally {
            setLoading(false)
        }
    }



    const addCommentHandler = async (postId,commentData) => {
        try {
            const {
                status,
                data: { posts },
            } = await addCommentService(postId,commentData,token);
            if(status === 201) {
                postDispatch({type: ADD_NEW_COMMENT, payload: posts});
                toast.success('Posted comment successfully.')
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
        
    }

    const deleteCommentHandler = async (postId,commentData) => {
        try {
            const {
                status,
                data: { posts },
            } = await deleteCommentService(postId,commentData,token);
            if(status === 201) {
                postDispatch({type: DELETE_COMMENT, payload: posts});
                toast.success('Comment deleted successfully.')
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
        
    }




    const editCommentHandler = async (postId,commentId,commentData) => {
        try {
            const {
                status,
                data: { posts },
            } = await editCommentService(postId,commentId,commentData,token);
            if(status === 201) {
                postDispatch({type: EDIT_COMMENT, payload: posts});
                toast.success('Comment updated successfully.')
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Woohoo! Something went wrong.")
        }
    }

    const likedByLoggedUser = (post,user) => {
        return post?.likes?.likedBy?.find((likedUser) => likedUser.username === user.username);
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <PostContext.Provider
            value={{
                postState,
                postDispatch,
                loading,
                getSinglePost,
                createPostHandler,
                deleteCommentHandler,
                editPostHandler,
                likePostHandler,
                dislikePostHandler,
                likedByLoggedUser,
                addCommentHandler,
                deleteCommentHandler,
                editCommentHandler,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export const usePosts = () => useContext(PostContext)