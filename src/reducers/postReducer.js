import { actionTypes } from "../utils/constants";

export const initialPostData = {
    input : "",
    media : null,
    mediaAlt : "",
};

export const initialPostState = {
    posts : [],
    postData : initialPostData,
    post : {}.initialPostData,
    filterType : 'Latest',
    page : 1,
    isNextPostLoading : false,
}

const {
    GET_ALL_POSTS,
    GET_SINGLE_POST,
    FILTER_POSTS,
    CREATE_NEW_POST,
    DELETE_POST,
    EDIT_POST,
    LIKE_POST,
    DISLIKE_POST,
    SET_IS_NEXT_POST_LOADING,
    SET_PAGE,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
} = actionTypes;

const postReducer = (state, {type,payload}) => {
    switch(type) {
        case GET_ALL_POSTS :
            return {...state, posts: payload }
        case GET_SINGLE_POST :
            return {...state, post: payload}
        case FILTER_POSTS :
            return {...state, filterType: payload}
        case CREATE_NEW_POST :
            return {...state, posts: payload}
        case LIKE_POST :
            return {...state, posts: payload}
        case DISLIKE_POST:
            return {...state, posts: payload}
        case DELETE_POST :
            return {...state, posts: payload}
        case EDIT_POST :
            return {...state, posts: payload}
         case SET_IS_NEXT_POST_LOADING :
            return {...state, isNextPostLoading: payload}
        case SET_PAGE :
            return {...state, page: payload}
        case ADD_NEW_COMMENT :
            return {
                ...state,
                posts: payload,
                post : payload.find((eachPost) => 
                    eachPost._id === state?.post?._id ? eachPost : state.post)
            }
        case DELETE_COMMENT :
            return {
                ...state,
                posts: payload,
                post: payload.find((eachPost) =>
                eachPost._id === state?.post?._id ? eachPost : state.post)
            }
        case EDIT_COMMENT :
            return {
                ...state,
                posts: payload,
                post: payload.find((eachPost) =>
                  eachPost._id === state?.post?._id ? eachPost : state.post),
            }
        default : return state;

    }
}

export {initialPostState,postReducer}