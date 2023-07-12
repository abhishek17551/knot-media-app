import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext'
import { usePosts } from '../../contexts/postContext';
import {  FaBookmark,FaHeart,FaRegBookmark,FaRegComments,FaRegHeart,HiDotsHorizontal,MdShare } from '../../utils/icons'
import { useRef, useState } from 'react';
import { userUsers } from '../../contexts/userContext';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { PostOptions } from '../PostOptions/PostOptions';
import { Modal } from '@mui/material';
import { CommentModal } from '../CommentModal/CommentModal';
import { getPostDate } from '../../utils/getPostDate';

const PostCard = ({post}) => {
    const {currentUser} = useAuth();
    const {likedByLoggedUser,likePostHandler,dislikePostHandler} = usePosts();
    const {
        userState : {users},
        addBookmarkHandler,
        removeBookmarkHandler,
        postAlreadyInBookmarks,
        handleButtonsClick
    } = userUsers();

    const navigate = useNavigate();
    const postModalRef = useRef();

    const [showOptions, setShowOptions] = useState(false)
    const [showCommentModal, setShowCommentModal] = useState(false)

    const postedByUser = users.find((user) => user.username === post?.username)

    return (
        <div ref={postModalRef}>
            <div onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${postedByUser?.username}`)
            }}>
                <UserAvatar user={postedByUser}/>
            </div>

            <div>
                <div>
                    <div>
                        <div onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/profile/${postedByUser?.username}`)
                        }}>
                            <span>{postedByUser?.firstName + " " + postedByUser?.lastName}</span>
                            <span>@{postedByUser?.username}</span>
                        </div>
                        <span></span>
                        <div>
                            {getPostDate(post?.createdAt)}
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
                                <PostOptions post={post} setShowOptions={setShowOptions}/>
                            )
                        }
                    </div>
                </div>

                <div onClick={() => navigate(`/post/${post?._id}`)}>
                    {post?.content}
                </div>

                {
                    (post?.mediaURL.split("/")[4] === "image" ? (
                        <img
                            src={post?.mediaURL}
                            alt={post?.mediaAlt}
                            onClick={() => navigate(`/post/${post?._id}`)}
                        />
                    ) : (
                        <video
                            controls
                            onClick={() => navigate(`/post/${post?._id}`)}
                        >
                        <source src={post?.mediaURL} type="video/mp4" />
                      </video>
                    ))
                }

                <div>
                    <div>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            likedByLoggedUser(post,currentUser) ? handleButtonsClick(500,dislikePostHandler,post?._id) : handleButtonsClick(500,likePostHandler,post?._id)
                        }}>
                            {
                                likedByLoggedUser(post,currentUser) ? <FaHeart/> : <FaRegHeart/>
                            }
                        </button>
                        {
                            post?.likes?.likeCount > 0 && <span>{post?.likes?.likeCount}</span>
                        }
                    </div>

                    <div>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setShowCommentModal(true)
                        }}>
                            <FaRegComments/>
                        </button>
                        {
                            post?.comments?.length > 0 && <span>{post?.comments?.length}</span>
                        }
                    </div>

                    <button onClick={(e) => {
                        e.stopPropagation();
                        postAlreadyInBookmarks(post?._id)
                            ? handleButtonsClick(500,removeBookmarkHandler,post?._id)
                            : handleButtonsClick(500,addBookmarkHandler,post?._id)
                    }}>
                        {
                            postAlreadyInBookmarks(post?._id) ? <FaBookmark/> : <FaRegBookmark/>
                        }
                    </button>
                </div>
            </div>

            <Modal open={showCommentModal} onClose={() => setShowCommentModal(false)}>
                <>
                        <CommentModal
                            postId={post?._id}
                            setShowCommentModal={setShowCommentModal}
                        />
                </>
            </Modal>
        </div>
    )
}

export {PostCard}