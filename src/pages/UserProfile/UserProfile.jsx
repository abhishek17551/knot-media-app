import React, { Suspense, useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext';
import { userUsers } from '../../contexts/userContext';
import { usePosts } from '../../contexts/postContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Loader } from '../../components/Loader/Loader';
import { FaArrowLeft } from '../../utils/icons'
import { ProfileDetails } from '../../components/ProfileDetails/Profiledetails';
import { SortPosts } from '../../utils/sortPosts';
import { PostCard } from '../../components/PostCard/PostCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

const UserProfile = () => {
  const {username} = useParams();
  const navigate = useNavigate();

  const {currentUser} = useAuth();
  const {
    userState : {user},
    loading,
    getUserByUsername
  } = userUsers();
  const { postState : {posts} } = usePosts();

  const userPosts = posts?.filter((post) => post.username === user?.username);

  document.title = `${user?.firstName} ${user?.lastName} | Knot`

  useEffect(() => {
    getUserByUsername(username);
    window.scroll({top:0, behavior:'smooth'})
  },[username,currentUser]);

  return (
    <div>
      <Sidebar/>
      <div>
        {
          loading ? (
            <Loader/>
          ) : (
            <>
              <h1>
                <FaArrowLeft
                  onClick={() => navigate(-1)}
                />
                <span>
                  <p>{user.firstName + " " + user.lastName }</p>
                  <p>{userPosts?.length} posts</p>
                </span>
              </h1>

              <div>
                {
                  user ? <ProfileDetails user={user}/> : <></>
                }
                {
                  loading ? (
                    <Loader/>
                  ) : !user ? (
                      <p>User not found!</p>
                    ) : userPosts?.length ? (
                      SortPosts(userPosts,"Latest")?.map((post) => (
                        <PostCard key={post._id} post={post}/>
                      ))
                    ) : (
                      <p>No posts to display...</p>
                    )
                }
              </div>
            </>
          )
        }
      </div>
      
      <div>
        <SearchBar/>
        <SuggestedUsers/>
      </div>
    </div>
  )


  }


export {UserProfile} 