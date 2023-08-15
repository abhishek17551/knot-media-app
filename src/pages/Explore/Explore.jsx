import React, { useEffect, useRef } from 'react'
import { usePosts } from '../../contexts/postContext'
import { actionTypes } from '../../utils/constants';
import { SortPosts } from '../../utils/sortPosts';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loader } from '../../components/Loader/Loader';
import { PostCard } from '../../components/PostCard/PostCard';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

function Explore() {
  const {
    postState : {posts,page,isNextPostLoading},
    loading,
    postDispatch
  } = usePosts();

  const {SET_PAGE, SET_IS_NEXT_POST_LOADING } = actionTypes;

  const elementRef = useRef(null);

  const sortedPosts = SortPosts(posts,"Latest").slice(0,page*5);

  useEffect(() => {
    if (sortedPosts.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          postsDispatch({ type: SET_IS_NEXT_POST_LOADING, payload: true });
          postsDispatch({ type: SET_PAGE, payload: page + 1 });
        }
      });
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }
  }, [
    page,
    sortedPosts.length,
    SET_IS_NEXT_POST_LOADING,
    SET_PAGE,
    postsDispatch,
  ]);

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

  document.title = 'Explore | Knot'

  return (
    <div className='grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto dark:bg-darkBlack dark:text-primaryLight transition-all duration-500'>
      <Sidebar/>
      <div className="sm:border-x border-primaryDark dark:border-primaryLight">
        <h1 className='flex items-center justify-between gap-4 sticky top-0 p-4  backdrop-blur-md z-20 border-b border-primaryDark dark:border-primaryLight'>
          <span lassName="text-xl font-bold">Explore</span>
          <div className="block xl:hidden">
            <SearchBar/>
          </div>
        </h1>

        <div>
          <div>
            {
              loading ? (
                <Loader/>
              ) : sortedPosts.length > 0 ? (
                <>
                  {
                    sortedPosts.map((post,index) => {
                      return (
                        <React.Fragment key={post._id}>
                          <PostCard post={post}/>
                          {
                            index === sortedPosts?.length -1 && (
                              <div ref={elementRef}/>
                            )
                          }
                        </React.Fragment>
                      )
                    })
                  }
                  {
                    !sortedPosts?.length === posts?.length && 
                      isNextPostLoading && (
                        <div className="mt-2 text-center text-sm ">
                          Load More Posts
                        </div>
                      )
                  }
                </>
              ) : (
                <div className="text-center text-lg font-bold p-4">
                  No Posts Yet!
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

export {Explore} 