export const actionTypes = {
    GET_ALL_POSTS: "GET_ALL_POSTS",
    GET_SINGLE_POST: "GET_SINGLE_POST",
    GET_ALL_USERS: "GET_ALL_USERS",
    GET_ONE_USER: "GET_ONE_USER",
    GET_ALL_BOOKMARKS: "GET_ALL_BOOKMARKS",
    SET_PAGE: "SET_PAGE",
    SET_IS_NEXT_POST_LOADING: "SET_IS_NEXT_POST_LOADING",
    ADD_BOOKMARK: "ADD_BOOKMARK",
    ADD_NEW_COMMENT: "ADD_NEW_COMMENT",
    REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
    DELETE_POST: "DELETE_POST",
    DELETE_COMMENT: "DELETE_COMMENT",
    EDIT_POST: "EDIT_POST",
    EDIT_USER_PROFILE: "EDIT_USER_PROFILE",
    EDIT_COMMENT: "EDIT_COMMENT",
    LIKE_POST: "LIKE_POST",
    DISLIKE_POST: "DISLIKE_POST",
    FILTER_POSTS: "FILTER_POSTS",
    CREATE_NEW_POST: "CREATE_NEW_POST",
    SEARCH_USER: "SEARCH_USER",
    UPDATE_FOLLOW_USER: "UPDATE_FOLLOW_USER",
}

export const styles = {
    position : 'absolute',
    left : '50%',
    top : '50%',
    transform : 'translate(-50%, -50%)',
    boxShadow : 25,
    bgcolor : 'background.paper',
    p : '3.5'
}