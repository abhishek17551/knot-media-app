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
        <aside className="flex w-full items-center bg-[white] fixed bottom-0 left-0 sm:sticky sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto sm:border-0 sm:z-0 overflow-x-hidden  border-t-2 border-primaryDark dark:border-primaryLight dark:text-primaryLight dark:bg-darkBlack z-40">
            <ul className="flex justify-around items-center px-2 py-1 tracking-wide grow sm:items-start  sm:justify-start  sm:py-4 sm:flex-col gap-3 sm:gap-2 ">
                <li className="hidden sm:pb-2 sm:px-1 sm:block">
                    <Link to="/" className="flex items-center">
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

                <li onClick={() => showPostModal(true)} className="cursor-pointer w-max px-0 sm:flex sm:px-1 lg:p-0 lg:w-full">
                    <HiPlusCircle/>
                    <PrimaryButton>
                        <HiPlusCircle/>
                        <span>New Post</span>
                    </PrimaryButton>
                </li>

                <li onClick={() => setShowSettingsModal(true)} className="flex p-2 w-max sm:hidden" >
                    <UserAvatar  user={currentUser} />
                </li>
            </ul>

            <ul className="hidden pr-2 sm:flex ">
                <li onClick={() => setShowSettingsModal(true)} className="flex items-center justify-center gap-2  cursor-pointer p-3 w-max ">
                    <UserAvatar user={currentUser}/>
                    <div className="hidden text-sm lg:inline">
                        <p>{currentUser?.firstName + " " + currentUser?.lastName}</p>
                        <p>@{currentUser?.username}</p>
                    </div>
                    <HiDotsHorizontal title="Settings Options"/>
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