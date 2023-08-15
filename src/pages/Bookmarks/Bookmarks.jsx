import React from 'react'
import { userUsers } from '../../contexts/userContext'
import { usePosts } from '../../contexts/postContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loader } from '../../components/Loader/Loader';
import { PostCard } from '../../components/PostCard/PostCard';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

function Bookmarks() {
  const {userState:{bookmarks}, loading} = userUsers();
  const {postState:{posts}} = usePosts();

  document.title = "Bookmarks | Knot"
  return (
    <div className='grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkBlack dark:text-primaryLight transition-all duration-500'>
      <Sidebar/>
      <div className="sm:border-x border-primaryDark dark:border-primaryLight">
        <h1 className='flex items-center justify-between gap-4 sticky top-0 p-4  backdrop-blur-md z-20 border-b border-primaryDark dark:border-primaryLight'>
          <span className="text-xl font-bold">Bookmarks</span>
          <div className="block xl:hidden">
            <SearchBar/>
          </div>
        </h1>

        <div>
          <div>
            {
              loading ? (
                <Loader/>
              ) : bookmarks?.length > 0 ? (
                [...bookmarks]?.reverse()?.map((bookmarkPostId) => {
                  const post = posts.find(({_id}) => _id === bookmarkPostId);
                  return <PostCard key={post._id} post={post}/>
                })
              ) : (
                <div className="text-center text-lg font-bold p-4">
                  No Bookmarks Yet!
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar/>
        <SuggestedUsers/>
      </div>
    </div>
  )
}

export {Bookmarks} 