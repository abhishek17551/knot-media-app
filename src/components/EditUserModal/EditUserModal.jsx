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
        <div style={styles}>
            <form onSubmit={editProfileHandler}>
                <div>
                    <div>
                        <button type="button" onClick={() => setEditUserModal(false)}>
                            <FaTimes/>
                        </button>
                        <span>Edit Profile</span>
                    </div>
                    <PrimaryButton type="submit">
                        Save
                    </PrimaryButton>
                </div>

                <label htmlFor="">
                    <div>
                        <img 
                            src={
                                coverImage ? URL.createObjectURL(coverImage) : editInput.backgroundImage ? editInput.backgroundImage : defaultBackgroundImage
                            } 
                            alt={coverImage ? "UpdatedCoverImage" : "CoverImage"} />
                        <div title="Change Cover Photo">
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

                <div>
                    <label htmlFor="">
                        <div>
                            <UserAvatar
                                user={profileImage ? {
                                    ...currentUser, profileAvatar : URL.createObjectURL(profileImage)
                                } : avatarImage
                                  ? {...currentUser, profileAvatar: avatarImage}  
                                  : currentUser
                            }
                            />
                            <div title="Change Profile Picture">
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

                    <label htmlFor="">
                        <div>
                            <UserAvatar
                                user={
                                    profileImage ? {
                                        ...currentUser, profileAvatar: URL.createObjectURL(profileImage)
                                    } : avatarImage
                                    ? {...currentUser, profileAvatar : avatarImage}
                                    : currentUser
                                }
                            />
                            <div title="Add Avatar" onClick={() => setShowAvatarOptions(true)}>
                                <BsPersonCircle/>
                            </div>
                        </div>
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        <div>First Name</div>
                        <input 
                            type="text"
                            name="firstName"
                            value={editInput.firstName}
                            onChange={(e) => setEditInput({...editInput,firstName: e.target.value})} 
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        <div>Last Name</div>
                        <input 
                            type="text"
                            name="lastName"
                            value={editInput.lastName}
                            onChange={(e) => setEditInput({...editInput,lastName: e.target.value})} 
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        <div>Bio</div>
                        <input 
                            type="text"
                            name="bio"
                            value={editInput.bio}
                            onChange={(e) => setEditInput({...editInput,bio: e.target.value})} 
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
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
                <div style={styles}>
                    <div>
                        <button
                            type="button"
                            onClick={() => setShowAvatarOptions(false)}
                        >
                            <FaTimes/>
                        </button>
                        <span>Choose Your Avatar</span>
                    </div>
                    <div>
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