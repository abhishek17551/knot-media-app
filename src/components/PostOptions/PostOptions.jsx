import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { usePosts } from "../../contexts/postContext";
import { userUsers } from "../../contexts/userContext";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaUserPlus, RiUserUnfollowFill } from '../../utils/icons'
import { Modal } from "@mui/material";
import { PostModal } from "../PostModal/PostModal";

const PostOptions = ({post, setShowOptions}) => {
    const { currentUser } = useAuth();
    const { deletePostHandler } = usePosts();
    const {
        userState : {users},
        followUserHandler,
        unfollowUserHandler,
        handleButtonsClick
    } = userUsers();

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { _id, username } = post;

    const [showPostModal, setShowPostModal] = useState(false);

    const userToFollow = users.find((user) => user.username === username);

    const userAlreadyFollowing = userToFollow.followers.find((user) => user.username === currentUser.username);

    useEffect(() => {},[currentUser, users])

    return (
        <div className="flex flex-col absolute right-1 top-7 w-max rounded-md shadow-lg border border-darkGrey bg-primaryLighter dark:bg-primaryDark ">
            {
                username === currentUser.username ? (
                    <>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setShowPostModal(true)
                        }}
                        className="flex items-center justify-center cursor-pointer rounded-md text-left py-2 px-4  hover:bg-primaryLight dark:hover:bg-secondaryDark "
                        >
                            <FaEdit className="mr-2"/>
                            Edit
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deletePostHandler(_id);
                                if(pathname !== "/") {
                                    setTimeout(() => {
                                        navigate("/")
                                        window.scroll({top: 0, behavior: "smooth"})
                                    },2500)
                                }
                                setShowOptions((prev) => !prev)
                            }}
                            className="flex items-center justify-center cursor-pointer rounded-md text-left text-red py-2 px-4  hover:bg-primaryLight dark:hover:bg-secondaryDark "
                        >
                            <FaTrash className="mr-2"/>
                            Delete
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            userAlreadyFollowing ? 
                            handleButtonsClick(500,unfollowUserHandler,userToFollow?._id) :
                            handleButtonsClick(500,followUserHandler,userToFollow?._id) 
                        }}
                        className="flex items-center justify-center cursor-pointer rounded-md text-left text-red py-2 px-4  hover:bg-primaryLight dark:hover:bg-secondaryDark "
                    >
                        {
                            userAlreadyFollowing ? (
                                <>
                                    <RiUserUnfollowFill className="mr-2"/> Unfollow
                                </>
                            ) : (
                                <>
                                    <FaUserPlus className="mr-2"/> Follow
                                </>
                            )
                        }
                    </button>
                )
            }

            <Modal open={showPostModal} onClose={() => setShowPostModal(false)}>
                <>
                    <PostModal
                        post={post}
                        setShowOptions={setShowOptions}
                        setShowPostModal={setShowPostModal}
                    />
                </>
            </Modal>
        </div>
    )
}
export {PostOptions}