import { useNavigate }  from "react-router-dom"
import { useAuth } from "../../contexts/authContext";
import { userUsers } from "../../contexts/userContext";
import { Loader } from "../Loader/Loader";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { PrimaryButton } from "../Button/Button";

const SuggestedUsers = () => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const {
        userState : {users},
        followUserHandler,
        handleButtonsClick,
        loading
    } = userUsers();

    const filteredUsers = users?.filter((dbUser) => dbUser.username !== currentUser?.username)?.filter((everyUser) => !currentUser?.following?.find((item) => item.username === everyUser.username));

    return (
        <>
         {
            loading ? (
                <Loader/>
            ) : (
                <>
                {
                    filteredUsers.length && (
                        <div className="flex flex-col overflow-hidden justify-start px-4 py-3 gap-4 m-4 mt-0 rounded-md max-h-[325px] sticky top-[95px] bg-primaryLight dark:bg-primaryDark">
                            <div className="text-lg font-bold tracking-wide">
                                Whom To Follow?
                            </div>

                            {filteredUsers?.map((user) => (
                                <div key={user._id} className="flex items-center gap-2 cursor-pointer">
                                    <UserAvatar user={user} className="h-9 w-9"/>
                                    <div 
                                        className="flex flex-col grow "
                                        onClick={() => navigate(`/profile/${user?.username}`)}>
                                        <span className="text-sm">  {user.firstName + " " + user.lastName} </span>
                                        <span className="text-sm text-[grey]"> @{user.username} </span>
                                    </div>

                                    <PrimaryButton
                                        className="py-1 px-2 rounded-md"
                                        onClick={() => handleButtonsClick(600,followUserHandler,user?._id)}>
                                        Follow
                                    </PrimaryButton>
                                </div>
                            ))}
                        </div>
                    )
                }
                </>
            )
         }
        </>
    )
}

export {SuggestedUsers}