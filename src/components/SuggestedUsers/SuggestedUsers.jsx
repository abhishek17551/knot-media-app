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
                        <div >
                            <div>
                                Whom To Follow?
                            </div>

                            {filteredUsers?.map((user) => (
                                <div key={user._id}>
                                    <UserAvatar user={user} className="h-9 w-9"/>
                                    <div>
                                        <span className="text-sm">  {user.firstName + " " + user.lastName} </span>
                                        <span className="className="text-sm> @{user.username} </span>
                                    </div>

                                    <PrimaryButton onClick={() => handleButtonsClick(600,followUserHandler,user?._id)}>
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