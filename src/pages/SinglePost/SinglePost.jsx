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
    <div>
      <Sidebar/>
      <div>
        <h1>
          <FaArrowLeft onClick={() => navigate(-1)}/>
          <span>
            <p>Post</p>
          </span>
        </h1>

        <div>
          {
            currentPost?.username ? (
              <div>
                <div>
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/profile/${currentPost?.username}`);
                    }}
                  >
                    <UserAvatar user={postedByUser}/>
                  </div>

                  <div>
                    <div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/profile/${currentPost?.username}`)
                        }}
                      >
                        <div>
                          <span>
                            { postedByUser?.firstName + " " + postedByUser?.lastName}
                          </span>
                          <span>@{postedByUser?.username}</span>
                        </div>
                        <span>.</span>
                        <div>
                          {getPostDate(currentPost?.createdAt)}
                        </div>
                      </div>

                      <div>
                        <HiDotsHorizontal
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowOptions((prev) => !prev)
                          }}
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
                          />
                        ) : (
                          <video>
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
                    >
                      <span>{currentPost?.likes?.likeCount}</span>
                      <span>Likes</span>
                    </button>
                  )
                }

                <div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        likedByLoggedUser(currentPost,currentUser)
                          ? handleButtonsClick(400,dislikePostHandler,currentPost?._id)
                          : handleButtonsClick(400,likePostHandler,currentPost?._id)
                      }}
                    >
                      {
                        likedByLoggedUser(currentPost,currentUser) ? (
                          <FaHeart/>
                        ) : (
                          <FaRegHeart/>
                        )
                      }
                    </button>
                    {
                      currentPost?.likes?.likeCount > 0 && (
                        <span>{currentPost?.likes?.likeCount}</span>
                      )
                    }
                  </div>

                  <div>
                    <button
                      onClick={() => newCommentRef.current && newCommentRef.current.focus()}
                    >
                      <FaRegComments/>
                    </button>
                    {
                      currentPost?.comments?.length > 0 && (
                        <span>
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
                    >
                      {
                        postAlreadyInBookmarks(currentPost?._id) ? (
                          <FaBookmark/>
                        ) : (
                          <FaRegBookmark/>
                        )
                      }
                    </button>
                    </div>

                    <div>
                      <UserAvatar user={currentUser}/>
                      <form onSubmit={commentSubmitHandler}>
                        <input 
                          type="text" 
                          value={commentData}
                          ref={newCommentRef}
                          placeholder='Post Your Reply'
                          onChange={(e) => setCommentData(e.target.value)}
                        />
                        <PrimaryButton
                          type="submit"
                          disabled={!commentData.trim()}
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

        <div>
          <SearchBar/>
          <SuggestedUsers/>
        </div>
      </div>
  )
}

export {SinglePost} 