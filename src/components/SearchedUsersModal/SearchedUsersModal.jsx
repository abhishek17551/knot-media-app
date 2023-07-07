import { useNavigate } from "react-router-dom"
import { userUsers } from "../../contexts/userContext";
import { actionTypes } from "../../utils/constants";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const SearchedUsersModal = () => {
    const navigate = useNavigate();
    const {searchedUsers,userDispatch} = userUsers();
    const {SEARCH_USER} = actionTypes;

    return (
        <div>
            {
                searchedUsers.length ? (
                    searchedUsers.map((user) => (
                        <div 
                            key={user._id}
                            onClick={() => {
                                navigate(`/profile/${user?.username}`)
                                userDispatch({type : SEARCH_USER, payload : ""})
                            }}
                        >
                            <UserAvatar user={user} className="h-8 w-8"  />
                            <div>
                                <span>{user.firstName + " " + user.lastName}</span>
                                <span>@{user.username}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Ooops! No match found for the entered User.</div>
                )
            }
        </div>
    )
}

export {SearchedUsersModal}