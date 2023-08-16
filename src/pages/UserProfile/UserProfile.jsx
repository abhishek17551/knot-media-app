import React, { useEffect } from 'react'
import { FaArrowLeft } from '../../utils/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { usePosts } from '../../contexts/postContext';
import { useAuth } from '../../contexts/authContext';
import { userUsers } from '../../contexts/userContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Loader } from '../../components/Loader/Loader';
import { ProfileDetails } from '../../components/ProfileDetails/Profiledetails';
import { SortPosts } from '../../utils/sortPosts';
import { PostCard } from '../../components/PostCard/PostCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

const UserProfile = () => {
  const {postState : {posts}} = usePosts();
  const {currentUser} = useAuth();
  const {
    userState,
    loading,
    getUserByUsername,
  } = userUsers();

  const {username} = useParams();
  const navigate = useNavigate();

  const userPosts = posts?.filter((post) => post.username === user?.username)

  document.title = `${user?.firstName} ${user?.lastName} | Knot`;

  useEffect(() => {
    getUserByUsername(username);
    window.scroll({ top: 0, behavior: "smooth" });
  },[username, currentUser])


  return (
    <div className='grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 dark:bg-primaryBlack dark:text-primaryLight'>
      <Sidebar/>
      <div className='sm:border-x border-primaryDark dark:border-primaryLight'>
        {
          loading ? (
            <Loader/>
          ) : (
            <>
              <h1 className='flex items-center sticky top-0 p-3  backdrop-blur-md z-20 border-b border-primaryDark dark:border-primaryLight'>
                <FaArrowLeft onClick={() => navigate(-1)} className="cursor-pointer mr-5 mx-1"/>
                <span>
                  <p className="font-bold tracking-wide">{user.firstName + " " + user.lastName}</p>
                  <p className="text-sm text-[grey]">{userPosts?.length} posts</p>
                </span>
              </h1>

              <div>
                {
                  user ? <ProfileDetails user={user}/> :<></>
                }
                {
                  loading ? (
                    <Loader/>
                  ) : !user ? (
                    <p className="text-center p-4 font-bold">User not found.</p>
                  ) : (
                    userPosts?.length ? (
                      SortPosts(userPosts,"Latest")?.map((post) => (
                        <PostCard key={post._id} post={post}/>
                      ))
                    ) : (
                      <p className="text-center p-4 font-bold">No posts to display.</p>
                    )
                  )
                }
              </div>
            </>
          )
        }
      </div>

      <div className="hidden xl:block">
        <SearchBar/>
        <SuggestedUsers/>
      </div>
    </div>
  )
}

export {UserProfile} 