import { userUsers } from "../../contexts/userContext"
import { actionTypes } from "../../utils/constants";
import { FiSearch } from '../../utils/icons'
import { SearchedUsersModal } from "../SearchedUsersModal/SearchedUsersModal";

const SearchBar = () => {
    const {userState : {searchInput}, userDispatch} = userUsers();
    const {SEARCH_USER} = actionTypes;

    return (
        <div className="sticky top-[15px] z-50 mr-1 xl:mr-0">
            <div className="relative border border-primaryDark rounded-lg bg-primaryLight dark:bg-primaryDark focus-within:border-secondaryDark xl:mx-4 2xl:my-3">
                <input 
                    type="text"
                    value={searchInput}
                    placeholder="Search Users..."
                    onChange={(e) => userDispatch({type:SEARCH_USER, payload:e.target.value})}
                    className="bg-primaryLight dark:bg-primaryDark dark:text-primaryLight outline-none rounded-lg text-sm text-primaryDark py-2 px-4 w-[90%] xl:text-base"
                />
                <FiSearch className="absolute right-4 top-2.5 xl:top-3.25"/>
            </div>

            {
                searchInput && (
                    <div className="absolute top-15 w-[90%] mx-4">
                       <SearchedUsersModal/>
                    </div>
                )
            }
        </div>
    )
}

export {SearchBar}