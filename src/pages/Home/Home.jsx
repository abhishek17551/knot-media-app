import React, { useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/authContext';
import { usePosts } from '../../contexts/postContext';
import { actionTypes } from '../../utils/constants';
import { SortPosts } from '../../utils/sortPosts';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { NewPost } from '../../components/NewPost/NewPost';
import { SortBar } from '../../components/SortBar/SortBar';
import { Loader } from '../../components/Loader/Loader';
import { PostCard } from '../../components/PostCard/PostCard';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

function Home() {
  const {currentUser} = useAuth();
  const {
    postState : {posts,filterType,page,isNextPostLoading},
    loading,postDispatch 
  } = usePosts();

  const {SET_PAGE,SET_IS_NEXT_POST_LOADING} = actionTypes;

  const elementRef = useRef();

  const sortedPosts = SortPosts(followingUsersPosts,filterType).slice(0,page*5);

  const followingUsersPosts = posts?.filter(
    (post) => currentUser?.following.some(
      (followingUser) => followingUser.username === post.username) || currentUser.username === post.username
  )

  useEffect(() => {
    if(sortedPosts.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(entry.isIntersecting) {
          postDispatch({type:SET_IS_NEXT_POST_LOADING,payload:true})
          postDispatch({type:SET_PAGE,payload:page+1})
        }
      })
      if(elementRef.current) {
        observer.observe(elementRef.current)
      }
    }
  },[page,sortedPosts.length,SET_IS_NEXT_POST_LOADING,SET_PAGE,postDispatch]);

  useEffect(() => {
    let timeoutId;
    if(isNextPostLoading) {
      timeoutId = setTimeout(() => {
        postDispatch({type:SET_IS_NEXT_POST_LOADING,payload:false})
      },1000)
    }
    return () => clearTimeout(timeoutId)
  },[SET_IS_NEXT_POST_LOADING,postDispatch,sortedPosts,isNextPostLoading]);

  useEffect(() => {
    window.scrollTo({top:0});
    postDispatch({type: SET_PAGE, payload: 1})
  },[SET_PAGE,postDispatch])

  document.title = 'Home | Knot'

  return (
   
    <div className='grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkBlack dark:text-primaryLight transition-all duration-500'>
      <Sidebar/>
      <div>
        <h1>
          <span>Home</span>
            <div>
              <SearchBar/>
            </div>
        </h1>

        <div>
          <NewPost/>
          <SortBar/>
          <div>
            {
              loading ? (
                <Loader/>
              ) : sortedPosts?.length > 0 ? (
                <>
                  {sortedPosts?.map((post,index) => {
                    return (
                      <React.Fragment key={post._id}>
                        <PostCard post={post}/>
                        {
                          index===sortedPosts?.length -1 && (<div ref={elementRef}/>)
                        }
                      </React.Fragment>
                    )
                  })}
                  {
                    !sortedPosts?.length === followingUsersPosts?.length && 
                      isNextPostLoading && (
                        <div>
                          Load More Posts
                        </div>
                      )
                  }
                </>
              ) : (
                <div>
                  No Posts Yet!
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div>
        <SearchBar/>
        <SuggestedUsers/>
      </div>
    </div>
  )
}

export {Home} 