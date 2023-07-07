import { useNavigate } from "react-router-dom"
import { userUsers } from "../../contexts/userContext";
import { actionTypes } from "../../utils/constants";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const SearchedUsersModal = () => {
    const navigate = useNavigate();
    const {searchedUsers,userDispatch} = userUsers();
    const {SEARCH_USER} = actionTypes;

    return (
        <div className="flex flex-col gap-4 text-sm xl:text-base w-full p-4 z-40 sticky top-0 mt-2">
            {
                searchedUsers.length ? (
                    searchedUsers.map((user) => (
                        <div 
                            key={user._id}
                            onClick={() => {
                                navigate(`/profile/${user?.username}`)
                                userDispatch({type : SEARCH_USER, payload : ""})
                            }}
                            className="flex flex-start gap-2 cursor-pointer"
                        >
                            <UserAvatar user={user} className="h-8 w-8"  />
                            <div className="flex flex-col grow ">
                                <span className="text-sm -mt-0.5">{user.firstName + " " + user.lastName}</span>
                                <span className="text-sm text-[grey] -mt-1">@{user.username}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">Ooops! No match found for the entered User.</div>
                )
            }
        </div>
    )
}

export {SearchedUsersModal}