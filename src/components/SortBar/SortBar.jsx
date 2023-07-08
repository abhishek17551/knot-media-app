import { useRef, useState } from "react";
import {FaArrowDown, FaArrowUp, FaFilter, FaFire } from '../../utils/icons'
import { usePosts } from "../../contexts/postContext"
import { actionTypes } from "../../utils/constants";

const SortBar = () => {
    const { postState: {filterType}, postDispatch} = usePosts();
    const modalRef = useRef();
    const {FILTER_POSTS} = actionTypes;

    const [showSortModal,setShowSortModal] = useState(false)

    return (
        <div className="flex justify-between items-center w-full px-4 py-2  border-b border-primaryDark dark:border-primaryLight">
            <h3>{filterType} Posts</h3>

            <div ref={modalRef} className="relative">
                <button onClick={() => setShowSortModal((prev) => !prev)}>
                    <FaFilter/>
                </button>
                {
                    showSortModal && (
                        <div className="flex flex-col gap-0.5 items-start absolute shadow-lg z-10  text-sm w-max py-1 px-1 right-0 shadow-lg border rounded border-primaryDark">
                            <button onClick={() => {
                                postDispatch({type: FILTER_POSTS, payload: "Trending"})
                                setShowSortModal((prev) => !prev)
                            }}>
                                <FaFire/>
                                Trending
                            </button>

                            <button onClick={() => {
                                postDispatch({type: FILTER_POSTS, payload: "Latest"})
                                setShowSortModal((prev) => !prev)
                            }}>
                                <FaArrowUp/>
                                Latest
                            </button>

                            <button onClick={() => {
                                postDispatch({type: FILTER_POSTS, payload: "Oldest"})
                                setShowSortModal((prev) => !prev)
                            }}>
                                <FaArrowDown/>
                                Oldest
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export {SortBar}