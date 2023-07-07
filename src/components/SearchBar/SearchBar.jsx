import { userUsers } from "../../contexts/userContext"
import { actionTypes } from "../../utils/constants";
import { FiSearch } from '../../utils/icons'

const SearchBar = () => {
    const {userState : {searchInput}, userDispatch} = userUsers();
    const {SEARCH_USER} = actionTypes;

    return (
        <div>
            <div>
                <input 
                    type="text"
                    value={searchInput}
                    placeholder="Search Users..."
                    onChange={(e) => userDispatch({type:SEARCH_USER, payload:e.target.value})}
                />
                <FiSearch/>
            </div>

            {
                searchInput && (
                    <div>
                        {/* Searched users here */}
                    </div>
                )
            }
        </div>
    )
}