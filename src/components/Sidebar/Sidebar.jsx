import { useState } from "react";
import {HiDotsHorizontal,MdPerson,MdBookmarks,HiPlusCircle,MdHome,MdExplore} from '../../utils/icons'
import { useAuth } from "../../contexts/authContext"
import { Link, NavLink } from "react-router-dom";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { PrimaryButton } from "../Button/Button";
import { Modal } from "@mui/material";
import { SettingsModal } from "../SettingsModal/SettingsModal";
import { logoImage } from "../../utils/constants";
import { PostModal } from "../PostModal/PostModal";

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
                        <img src={logoImage} alt="knot-logo" className="h-12 w-12 mr-2"/>
                        <span className="font-semibold hidden text-2xl lg:inline">Knot-Media</span>
                    </Link>
                </li>

                <li>
                    <NavLink 
                        to="/"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                        className="flex justify-center items-center p-2 w-max lg:py-1 lg:pl-2 lg:pr-4 hover:rounded-full hover:bg-primaryLighter dark:hover:bg-primaryLight dark:hover:text-darkBlack active:dark:text-darkBlack"
                    >
                        <MdHome/>
                        <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/bookmarks"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                        className="flex justify-center items-center p-2 w-max lg:py-1 lg:pl-2 lg:pr-4 hover:rounded-full hover:bg-primaryLighter dark:hover:bg-primaryLight dark:hover:text-darkBlack active:dark:text-darkBlack"
                    >
                        <MdBookmarks/>
                        <span>Bookmarks</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/explore"
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                        className="flex justify-center items-center p-2 w-max lg:py-1 lg:pl-2 lg:pr-4 hover:rounded-full hover:bg-primaryLighter dark:hover:bg-primaryLight dark:hover:text-darkBlack active:dark:text-darkBlack"
                    >
                        <MdExplore/>
                        <span>Explore</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to={`/profile/${currentUser?.username}`}
                        style={({isActive}) => (isActive ? getActiveStyle : undefined)}
                        className="flex justify-center items-center p-2 w-max lg:py-1 lg:pl-2 lg:pr-4 hover:rounded-full hover:bg-primaryLighter dark:hover:bg-primaryLight dark:hover:text-darkBlack active:dark:text-darkBlack"
                    >
                        <MdPerson/>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li onClick={() => showPostModal(true)} className="cursor-pointer w-max px-0 sm:flex sm:px-1 lg:p-0 lg:w-full">
                    <HiPlusCircle className="text-[2.75rem] px-2 lg:hidden hover:rounded-full hover:bg-primaryLighter dark:hover:bg-primaryLight dark:hover:text-darkBlack "/>
                    <PrimaryButton className="justify-center items-center rounded-lg hidden w-max mx-2  lf:w-full py-1 pl-2 pr-4  lg:flex">
                        <HiPlusCircle className="text-3xl px-0.5 g:pr-2"/>
                        <span>New Post</span>
                    </PrimaryButton>
                </li>

                <li onClick={() => setShowSettingsModal(true)} className="flex p-2 w-max sm:hidden" >
                    <UserAvatar  user={currentUser} />
                </li>
            </ul>

            <ul className="hidden pr-2 sm:flex ">
                <li onClick={() => setShowSettingsModal(true)} className="flex items-center justify-center gap-2 cursor-pointer p-3 w-max ">
                    <UserAvatar user={currentUser} className="h-10 w-10"/>
                    <div className="hidden text-sm lg:inline">
                        <p className="font-bold">{currentUser?.firstName + " " + currentUser?.lastName}</p>
                        <p className="font-normal">@{currentUser?.username}</p>
                    </div>
                    <HiDotsHorizontal title="Settings Options" className="ml-4 hidden lg:inline hover:scale-105"/>
                </li>
            </ul>

            <Modal
               open={showPostModal} 
               onClose={() => setShowPostModal(false)} 
            >
                <PostModal setShowPostModal={setShowPostModal}/>
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