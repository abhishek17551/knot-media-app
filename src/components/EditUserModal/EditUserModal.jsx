import { useState } from "react";
import { useAuth } from "../../contexts/authContext"
import { userUsers } from "../../contexts/userContext";
import {FaCamera, FaTimes, BsPersonCircle } from '../../utils/icons'
import { PrimaryButton } from "../Button/Button";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { Modal } from "@mui/material";
import { avatarImages, defaultBackgroundImage, styles } from "../../utils/constants";

const EditUserModal = ({setEditUserModal}) => {
    const {currentUser} = useAuth();
    const {editUserProfileHandler} = userUsers();

    const [avatarImage,setAvatarImage] = useState(null);
    const [showAvatarOptions,setShowAvatarOptions] = useState(null)
    const [profileImage,setProfileImage] = useState(null);
    const [coverImage,setCoverImage] = useState(null);
    const [editInput, setEditInput] = useState(currentUser)

    const editProfileHandler = async (e) => {
        e.preventDefault();
        editUserProfileHandler(editInput);
        setEditUserModal(false)
    }
    return (
        <div style={styles} className="text-sm p-4 w-80 mx-4 overflow-y-auto border rounded border-darkGrey bg-primaryLighter dark:bg-primaryDark dark:text-primaryLight">
            <form onSubmit={editProfileHandler} className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <button type="button" onClick={() => setEditUserModal(false)}>
                            <FaTimes/>
                        </button>
                        <span>Edit Profile</span>
                    </div>
                    <PrimaryButton type="submit">
                        Save
                    </PrimaryButton>
                </div>

                <label className="w-full">
                    <div className="w-full relative">
                        <img 
                            src={
                                coverImage ? URL.createObjectURL(coverImage) : editInput.backgroundImage ? editInput.backgroundImage : defaultBackgroundImage
                            } 
                            alt={coverImage ? "UpdatedCoverImage" : "CoverImage"} />
                        <div title="Change Cover Photo" className="absolute cursor-pointer rounded-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-2  bg-primaryLight">
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    setCoverImage(e.target.files[0]);
                                    setEditInput({...editInput, backgroundImage : URL.createObjectURL(e.target.files[0])})
                                }} 
                            />
                            <FaCamera/>
                        </div>
                    </div>
                </label>

                <div className="flex wrap mx-6">
                    <label className="cursor-pointer w-max mx-auto">
                        <div className="relative">
                            <UserAvatar
                                user={profileImage ? {
                                    ...currentUser, profileAvatar : URL.createObjectURL(profileImage)
                                } : avatarImage
                                  ? {...currentUser, profileAvatar: avatarImage}  
                                  : currentUser
                            }
                            />
                            <div title="Change Profile Picture" className="absolute cursor-pointer rounded-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-1  bg-primaryLight">
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={(e) => {
                                        setProfileImage(e.target.files[0]);
                                        setEditInput({...editInput,profileAvatar : URL.createObjectURL(e.target.files[0])})
                                    }}
                                />
                                <FaCamera/>
                            </div>
                        </div>
                    </label>

                    <label className="w-max cursor-pointer mx-auto">
                        <div className="relative">
                            <UserAvatar
                                user={
                                    profileImage ? {
                                        ...currentUser, profileAvatar: URL.createObjectURL(profileImage)
                                    } : avatarImage
                                    ? {...currentUser, profileAvatar : avatarImage}
                                    : currentUser
                                }
                            />
                            <div title="Add Avatar" onClick={() => setShowAvatarOptions(true)}
                                className="absolute cursor-pointer rounded-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 p-1  bg-primaryLight"
                            >
                                <BsPersonCircle/>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
                    <label className="w-full">
                        <div>First Name</div>
                        <input 
                            type="text"
                            name="firstName"
                            value={editInput.firstName}
                            onChange={(e) => setEditInput({...editInput,firstName: e.target.value})} 
                        />
                    </label>
                </div>

                <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
                    <label className="w-full">
                        <div>Last Name</div>
                        <input 
                            type="text"
                            name="lastName"
                            value={editInput.lastName}
                            onChange={(e) => setEditInput({...editInput,lastName: e.target.value})} 
                        />
                    </label>
                </div>

                <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
                    <label className="w-full">
                        <div>Bio</div>
                        <input 
                            type="text"
                            name="bio"
                            value={editInput.bio}
                            onChange={(e) => setEditInput({...editInput,bio: e.target.value})} 
                        />
                    </label>
                </div>

                <div className="flex flex-col items-center py-1 px-2 rounded border border-[grey] focus-within:border-primary">
                    <label className="w-full">
                        <div>Website</div>
                        <input 
                            type="text"
                            name="website"
                            value={editInput.website}
                            onChange={(e) => setEditInput({...editInput,website: e.target.value})} 
                        />
                    </label>
                </div>
            </form>

            <Modal open={showAvatarOptions} onClose={() => setShowAvatarOptions(false)}>
                <div style={styles} className="flex flex-col gap-4 p-4 w-60 mx-4 rounded-md overflow-y-auto text-sm border border-primaryDark bg-primaryLighter dark:bg-primaryDark dark:text-primaryLight">
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowAvatarOptions(false)}
                        >
                            <FaTimes/>
                        </button>
                        <span>Choose Your Avatar</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {
                            avatarImages.map((avatar, index) => (
                                <span
                                    key={index}
                                    onClick={() => {
                                        setAvatarImage(avatar);
                                        setEditInput({...editInput, profileAvatar : avatar});
                                        setShowAvatarOptions(false)
                                    }}
                                >
                                    <img
                                        src={avatar}
                                        alt={`Avatar${index}`}
                                    />

                                </span>
                            ))
                        }
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export {EditUserModal}