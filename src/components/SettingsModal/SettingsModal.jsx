import { useTheme } from "@emotion/react";
import { useAuth } from "../../contexts/authContext"
import { styles } from "../../utils/constants";
import {MdLogout,MdOutlineDarkMode,MdOutlineLightMode} from '../../utils/constants'

const SettingsModal = ({ setShowSettingsModal }) => {
    const {logoutHandler} = useAuth();
    const {darkTheme,setDarkTheme} = useTheme();

    return(
        <div style={styles}
            className="flex flex-col rounded-md shadow-lg p-4 border border-primaryDark bg-primaryLight dark:bg-primaryDark dark:text-primaryLight  "
        >
            <>
                <button
                    className="flex items-center justify-center text-left cursor-pointer rounded-md hover:bg-primaryLight dark:hover:bg-secondaryDark py-2 px-4"
                    onClick={() => {
                        setDarkTheme(!darkTheme);
                        setShowSettingsModal(false)
                    }}
                >
                    {
                        darkTheme ? "Light" : "Dark"
                    } Mode

                    {
                        darkTheme ? (
                            <MdOutlineLightMode className="ml-3.25"/>
                        ) : (
                            <MdOutlineDarkMode className="ml-3.25" />
                        )
                    }
                </button>

                <button
                    className="flex items-center justify-center text-left cursor-pointer rounded-md py-2 px-4 text-red hover:bg-primaryLight dark:hover:bg-secondaryDark py-2 px-4"
                    onClick={() => {
                        logoutHandler();
                        setShowSettingsModal(false)
                    }}
                >
                    Logout
                    <MdLogout className='ml-4.25'/>
                </button>
            </>
        </div>
    )
}

export {SettingsModal}