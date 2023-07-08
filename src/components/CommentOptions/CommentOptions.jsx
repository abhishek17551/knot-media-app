import { useState } from "react";
import { useAuth } from "../../contexts/authContext"
import { usePosts } from "../../contexts/postContext"
import { userUsers } from "../../contexts/userContext"
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa"
import { RiUserUnfollowFill } from "react-icons/ri"
import { Modal } from "@mui/material"
import { CommentModal } from "../CommentModal/CommentModal"

const CommentOptions = ({comment, postId, setShowOptions}) => {
    const {
        userState : {users},
        unfollowUserHandler,
        followUserHandler,
        handleButtonsClick
    } = userUsers();
    const {currentUser} = useAuth();
    const {deleteCommentHandler} = usePosts();

    const [showCommentModal,setShowCommentModal] = useState(false);

    const userToFollow = users.find((user) => user.username === comment.username);

    const userAlreadyFollowing = userToFollow.followers.find((user) => user.username === currentUser.username);

    return (
        <div className="absolute flex flex-col border border-secondaryDark bg-primaryLight dark:bg-secondaryDark rounded-md shadow-lg right-1 top-7  ">
            {
                comment?.username === currentUser?.username ? (
                    <>
                        <button 
                            className="flex items-center justify-center py-2 px-4 text-left cursor-pointer rounded-md hover:bg-primaryLight dark:hover:bg-secondaryDark "
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowCommentModal(true)
                            }}
                        >   
                            <FaEdit className="mr-2.25"/>
                            Edit
                        </button>
                        <button
                            className="flex items-center justify-center py-2 px-4 text-left text-darkRed cursor-pointer rounded-md hover:bg-primaryLight dark:hover:bg-secondaryDark"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteCommentHandler(postId,comment?._id);
                                setShowOptions((prev) => !prev)
                            }}
                        >
                            <FaTrash className="mr-2.25"/>
                            Delete
                        </button>
                    </>
                ) : (
                    <button
                        className="flex items-center justify-center py-2 px-4 text-left cursor-pointer rounded-md hover:bg-primaryLight dark:hover:bg-secondaryDark"
                        onClick={(e) => {
                            e.stopPropagation();
                            userAlreadyFollowing ? handleButtonsClick(600,unfollowUserHandler,userToFollow?._id) : handleButtonsClick(600,followUserHandler,userToFollow?._id)
                            setShowOptions(false);
                        }}
                    >
                        {
                            userAlreadyFollowing ? (
                                <>
                                    <RiUserUnfollowFill className="mr-2.25"/> Unfollow
                                </>
                            ) : (
                                <>
                                    <FaUserPlus className="mr-2.25"/> Follow
                                </>
                            )
                        }
                    </button>
                )
            }

            <Modal open={showCommentModal} onClose={() => setShowCommentModal(false)}>
                <>
                    <CommentModal
                        comment={comment}
                        postId={postId}
                        setShowOptions={setShowOptions}
                        setShowCommentModal={setShowCommentModal}
                    />
                </>
            </Modal>
        </div>
    )
}

export {CommentOptions}