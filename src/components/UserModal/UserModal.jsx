import { FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { UserAvatar } from "../UserAvatar/UserAvatar"
import { styles } from "../../utils/constants";

const UserModal = ({usersListModal,setUsersListModal}) => {
    const {title,list} = usersListModal;
    const navigate = useNavigate();

    return (
        <div style={styles}>
            <div className="flex justify-between items-center mb-4.5">
                <div className="text-xl font-semibold">{title}</div>
                <button
                    className="h-min w-min p-1.25 hover:rounded-full hover:bg-primaryDark hover:text-primaryLight dark:hover:text-primaryDark dark:hover:bg-primaryLight "
                    onClick={() => setUsersListModal(false)}
                >
                    <FaTimes/>
                </button>
            </div>

            <div className="flex flex-col justify-center gap-4">
                {
                    list?.length ? (
                        list?.map((user) => (
                            <div
                                className="flex gap-2 cursor-pointer"
                                key={user?._id}
                                onClick={() => {
                                    navigate(`/profile/${user?.username}`);
                                    setUsersListModal({show:false, title:"", list:[]})
                            }}
                            >
                                <UserAvatar
                                    user={user}
                                    className="h-9 w-9"
                                />
                                <div className="flex flex-col ">
                                    <span>{user?.firstName + " " + user?.lastName}</span>
                                    <span className="text-sm text-[grey]">@{user?.username}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            Ooops! No {title} found.
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export {UserModal}