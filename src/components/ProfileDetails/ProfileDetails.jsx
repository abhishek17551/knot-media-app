import { useState } from "react";
import { useAuth } from "../../contexts/authContext"
import { userUsers } from "../../contexts/userContext";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { SecondaryButton } from "../Button/Button";
import {HiLink, MdDateRange} from '../../utils/icons'
import { Link } from "react-router-dom";
import { getPostDate } from "../../utils/getPostDate";
import { Modal } from "@mui/material";
import { UserModal } from "../UserModal/UserModal";
import { EditUserModal } from "../EditUserModal/EditUserModal";
import { defaultBackgroundImage } from "../../utils/constants";

const ProfileDetails = ({user}) => {
    const {followUserHandler, unfollowUserHandler, handleButtonsClick} = userUsers();
    const {currentUser, logoutHandler} = useAuth();

    const [editUserModal,setEditUserModal] = useState(false);
    const [usersListModal, setUsersListModal] = useState({
        show:false,
        title:"",
        list:[]
    });

    const userAlreadyFollowing = user?.followers?.find((user) => user.username === currentUser.username)

    return(
        <div className="relative flex flex-col items-center w-full border-b border-primaryDark dark:border-primaryLight">
            <>
                <img
                    src={user?.backgroundImage ? user?.backgroundImage : defaultBackgroundImage}
                    alt={user?.username ? user?.username+"background_image" : "Knot_Background_Image"}
                />
                <div className="flex flex-col gap-2 w-full px-4 py-2">
                    <div className="flex justify-between w-full">
                        <UserAvatar
                            user={user}
                        />
                        <div className="flex justify-center items-center gap-4 mb-2">
                            {
                                user?.username === currentUser?.username ? (
                                    <>
                                        <SecondaryButton
                                            onClick={()=>setEditUserModal(true)}
                                        >
                                            Edit Profile
                                        </SecondaryButton>
                                        <SecondaryButton
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </SecondaryButton>
                                    </>
                                ) : (
                                    <>
                                        <SecondaryButton
                                            onClick={() => userAlreadyFollowing 
                                                ? handleButtonsClick(500,unfollowUserHandler,user?._id)
                                                : handleButtonsClick(500,followUserHandler,user?._id)
                                            }
                                        >
                                            {userAlreadyFollowing ? "Unfollow" : "Follow"}
                                        </SecondaryButton>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <p>
                            {user?.firstName + " " + user?.lastName}
                        </p>
                        <span>@{user?.username}</span>
                    </div>
                    {user?.bio && <span>{user?.bio}</span>}
                    {user?.website && (
                        <div className="flex gap-2 items-center">
                            <HiLink/>
                            <Link to={user?.website} target="_blank">
                                <span>{user?.website?.split("/")[2]}</span>
                            </Link>
                        </div>
                    )}

                <div className="flex gap-2 items-center">
                    <MdDateRange/>
                    <span>{getPostDate(user?.createdAt)}</span>
                </div>

                <div className="flex items-center gap-4">
                    <span 
                        onClick={() => setUsersListModal(() => ({
                            show: true,
                            title: "Following",
                            list: user?.following
                        }))}
                    >
                        <span>Following</span>
                        <span
                            onClick={() => setUsersListModal(() => ({
                                show: true,
                                title: "Followers",
                                list: user?.followers
                            }))}
                        >
                            Followers
                        </span>
                    </span>
                </div>
                </div>
            </>

            {
                usersListModal.show && (
                    <Modal
                        open={usersListModal.show}
                        onClose={() => setUsersListModal(() => ({
                            show: false,
                            title: "",
                            list: []
                        }))}
                    >
                        <>
                            <UserModal
                                usersListModal={usersListModal}
                                setUsersListModal={setUsersListModal}
                            />
                        </>
                    </Modal>
                )
            }

            {
                editUserModal && (
                    <Modal open={editUserModal} onClose={() => setEditUserModal(false)}>
                        <>
                            <EditUserModal setEditUserModal={setEditUserModal}/>
                        </>
                    </Modal>
                )
            }
        </div>
    )
}

export {ProfileDetails}