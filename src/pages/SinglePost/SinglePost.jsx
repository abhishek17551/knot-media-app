import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext';
import { usePosts } from '../../contexts/postContext';
import { userUsers } from '../../contexts/userContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FaArrowLeft, FaBookmark, FaHeart, FaRegBookmark, FaRegComments, FaRegHeart, HiDotsHorizontal, MdShare } from '../../utils/icons'
import { UserAvatar } from '../../components/UserAvatar/UserAvatar';
import { getPostDate } from '../../utils/getPostDate';
import { PostOptions } from '../../components/PostOptions/PostOptions';
import { Modal } from '@mui/material';
import { PrimaryButton } from '../../components/Button/Button';
import { CommentCard } from '../../components/CommentCard/CommentCard';
import { Loader } from '../../components/Loader/Loader';
import { UserModal } from '../../components/UserModal/UserModal';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

const SinglePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const {
    postState : { post : currentPost },
    getSinglePost,
    likePostHandler,
    dislikePostHandler,
    likedByLoggedUser,
    addCommentHandler,
  } = usePosts();
  const {
    userState : { users },
    addBookmarkHandler,
    removeBookmarkHandler,
    postAlreadyInBookmarks,
    handleButtonsClick
  } = userUsers();
  const { currentUser } = useAuth();

  const newCommentRef = useRef();

  const [commentData,setCommentData] = useState("");
  const [showOptions,setShowOptions] = useState(false);
  const [likesModal,setLikesModal] = useState({
    show : false,
    title : "",
    list : []
  })

  const postedByUser = users?.find((user) => user.username === currentPost?.username);

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    addCommentHandler(currentPost?._id, {commentData});
    setCommentData("")
  }

  document.title = "Post | Knot";

  useEffect(() => {
    getSinglePost(postId);
  },[postId,currentPost]);

  return (
    <div className='grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[13rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 dark:bg-primaryBlack dark:text-primaryLight'>
      <Sidebar/>
      <div className='border-primaryDark dark:border-primaryLight sm:border-x'>
        <h1 className='flex items-center sticky top-0 p-3  backdrop-blur-md z-20 border-b border-primaryDark dark:border-primaryLight'>
          <FaArrowLeft onClick={() => navigate(-1)} className="cursor-pointer mr-5 mx-1"/>
          <span>
            <p>Post</p>
          </span>
        </h1>

        <div>
          {
            currentPost?.username ? (
              <div className='flex flex-col gap-2 px-4 py-3 text-sm border-b break-words border-primaryDark'>
                <div className="grid grid-cols-[2.25rem_1fr] gap-2">
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/profile/${currentPost?.username}`);
                    }}
                    className="cursor-pointer"
                  >
                    <UserAvatar user={postedByUser} className="h-9 w-9"/>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/profile/${currentPost?.username}`)
                        }}
                        className="flex gap-2"
                      >
                        <div className="flex flex-col cursor-pointer">
                          <span className="font-bold tracking-wide">
                            { postedByUser?.firstName + " " + postedByUser?.lastName}
                          </span>
                          <span className="text-[grey] -mt-1">@{postedByUser?.username}</span>
                        </div>
                        <span className="text-[grey]">.</span>
                        <div className="text-[grey]">
                          {getPostDate(currentPost?.createdAt)}
                        </div>
                      </div>

                      <div className="relative">
                        <HiDotsHorizontal
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowOptions((prev) => !prev)
                          }}
                          className="text-lg cursor-pointer m-2 hover:scale-105"
                        />
                        {
                          showOptions && (
                            <PostOptions post={currentPost} setShowOptions={setShowOptions}/>
                          )
                        }
                      </div>
                    </div>

                    <div>{currentPost?.content}</div>

                    {
                      currentPost?.mediaURL && (
                        currentPost?.mediaURL.split("/")[4] === "image" ? (
                          <img
                            src={currentPost?.mediaURL}
                            alt={currentPost?.mediaAlt}
                            className="w-full h-auto rounded-md"
                          />
                        ) : (
                          <video controls className="w-full h-auto rounded-md">
                            <source src={currentPost?.mediaURL} type='video/mp4'/>
                          </video>
                        )
                      )
                    }
                  </div>
                </div>

                {
                  currentPost?.likes?.likeCount > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLikesModal(() => ({
                          show : true,
                          title : "Liked By",
                          list : currentPost?.likes?.likedBy
                        }))
                      }}
                      className='text-left cursor-pointer  hover:underline pt-2 mt-2 border-t border-primaryDark'
                    >
                      <span className="font-bold">{currentPost?.likes?.likeCount}</span>
                      <span className="text-[grey]">Likes</span>
                    </button>
                  )
                }

                <div className='flex justify-evenly gap-6 mt-1 -mb-1 border-t border-primaryDark'>
                  <div className="flex justify-center p-2 mr-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        likedByLoggedUser(currentPost,currentUser)
                          ? handleButtonsClick(400,dislikePostHandler,currentPost?._id)
                          : handleButtonsClick(400,likePostHandler,currentPost?._id)
                      }}
                      className="cursor-pointer"
                    >
                      {
                        likedByLoggedUser(currentPost,currentUser) ? (
                          <FaHeart className="text-lg text-red hover:scale-125"/>
                        ) : (
                          <FaRegHeart className="text-lg hover:scale-125"/>
                        )
                      }
                    </button>
                    {
                      currentPost?.likes?.likeCount > 0 && (
                        <span className="ml-2">{currentPost?.likes?.likeCount}</span>
                      )
                    }
                  </div>

                  <div className="flex justify-center p-2 mr-4">
                    <button
                      onClick={() => newCommentRef.current && newCommentRef.current.focus()}
                      className="cursor-pointer"
                    >
                      <FaRegComments className="text-lg hover:scale-125"/>
                    </button>
                    {
                      currentPost?.comments?.length > 0 && (
                        <span className="ml-2">
                          {currentPost?.comments?.length}
                        </span>
                      )
                    }
                  </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        postAlreadyInBookmarks(currentPost?._id) 
                          ? handleButtonsClick(400,removeBookmarkHandler,currentPost?._id)
                          : handleButtonsClick(400,addBookmarkHandler,currentPost?._id)
                      }}
                      className="cursor-pointer p-2 mr-4"
                    >
                      {
                        postAlreadyInBookmarks(currentPost?._id) ? (
                          <FaBookmark className="text-lg hover:scale-125"/>
                        ) : (
                          <FaRegBookmark className="text-lg hover:scale-125"/>
                        )
                      }
                    </button>
                    </div>

                    <div className='grid grid-cols-[2.25rem_1fr] gap-2 pt-3 border-t border-primaryDark'>
                      <UserAvatar user={currentUser} className="h-9 w-9"/>
                      <form onSubmit={commentSubmitHandler} className="flex justify-between">
                        <input 
                          type="text" 
                          value={commentData}
                          ref={newCommentRef}
                          placeholder='Post Your Reply'
                          onChange={(e) => setCommentData(e.target.value)}
                          className="w-full outline-none bg-inherit dark:bg-primaryBlack"
                        />
                        <PrimaryButton
                          type="submit"
                          disabled={!commentData.trim()}
                          className="rounded-md px-3 ml-4 disabled:opacity-80 disabled:cursor-not-allowed"
                        >
                          Reply
                        </PrimaryButton>
                      </form>
                    </div>

                    {
                      currentPost?.comments?.length > 0 &&
                      currentPost?.comments?.reverse?.map((comment) => (
                        <CommentCard
                          key={comment?._id}
                          comment={comment}
                          postId={currentPost?._id}
                        />
                      ))
                    }
                </div>
            ) : (
              <Loader/>
            )
          }
            </div>
        </div>

        {
          likesModal.show && (
            <Modal
              open={likesModal.show}
              onClose={() => setLikesModal(() => ({show: false, title: "", list: []}))}
            >
              <>
                <UserModal
                  usersListModal={likesModal}
                  setUsersListModal={setLikesModal}
                />
              </>
            </Modal>
          )
        }

        <div className="hidden xl:block">
          <SearchBar/>
          <SuggestedUsers/>
        </div>
      </div>
  )
}

export {SinglePost} 