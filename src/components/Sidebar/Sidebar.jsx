import { useState } from "react";
import {HiDotsHorizontal,MdPerson,MdBookmarks,HiPlusCircle,MdHome,MdExplore} from '../../utils/icons'
import { useAuth } from "../../contexts/authContext"
import { Link, NavLink } from "react-router-dom";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { PrimaryButton } from "../Button/Button";
import { Modal } from "@mui/material";
import { SettingsModal } from "../SettingsModal/SettingsModal";

const Sidebar = () => {
    const {currentUser} = useAuth();

    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);

    const getActiveStyle = {
        fontWeight: "bold",
        transform: "scale(1.25)",
    }
    return(
        <aside>
            <ul>
                <li>
                    <Link to="/">
                        {/* logo image here */}
                        <span>Knot-Media</span>
                    </Link>
                </li>

                <li>
                    <NavLink 
                        to="/"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                    >
                        <MdHome/>
                        <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/bookmarks"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                    >
                        <MdBookmarks/>
                        <span>Bookmarks</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/explore"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                    >
                        <MdExplore/>
                        <span>Explore</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to={`/profile/${currentUser?.username}`}
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                    >
                        <MdPerson/>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li onClick={() => setShowPostModal(true)}>
                    <HiPlusCircle/>
                </li>

                <li onClick={() => setShowSettingsModal(true)}>
                    <UserAvatar user={currentUser}/>
                    <PrimaryButton>
                        <HiPlusCircle/>
                        <span>New Post</span>
                    </PrimaryButton>
                </li>
            </ul>

            <ul>
                <li onClick={() => setShowSettingsModal(true)}>
                    <UserAvatar user={currentUser}/>
                    <div>
                        <p>{currentUser?.firstName + " " + currentUser?.lastName}</p>
                        <p>@{currentUser?.username}</p>
                    </div>
                    <HiDotsHorizontal title="Settings Open"/>
                </li>
            </ul>

            <Modal
               open={showPostModal} 
               onClose={() => setShowPostModal(false)} 
            >
                {/* PostModal here */}
            </Modal>

            <Modal
                open={showSettingsModal}
                onClose={() => setShowSettingsModal(false)}
            >
                <SettingsModal setShowSettingsModal={setShowSettingsModal}/>
            </Modal>
        </aside>
    )
}

export {Sidebar}