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
        <div ref={postModalRef} className='grid grid-cols-[2.25rem_1fr] gap-2 text-sm px-3 py-3 cursor-pointer border-b border-primaryDark dark:border-primaryLight'>
            <div onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${postedByUser?.username}`)
            }}>
                <UserAvatar user={postedByUser}/>
            </div>

            <div className='flex flex-col gap-2 break-words'>
                <div className="flex justify-between">
                    <div className="flex items-start gap-1.5 2xl:items-center">
                        <div onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/profile/${postedByUser?.username}`)
                        }}
                        className="flex flex-col gap-0 2xl:flex-row 2xl:gap-1"
                        >
                            <span className="font-bold tracking-wide">{postedByUser?.firstName + " " + postedByUser?.lastName}</span>
                            <span className="text-[grey]">@{postedByUser?.username}</span>
                        </div>
                        <span className="text-[grey]">.</span>
                        <div className="text-[grey]">
                            {getPostDate(post?.createdAt)}
                        </div>
                    </div>

                    <div className="relative">
                        <HiDotsHorizontal
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowOptions((prev) => !prev)
                            }}
                            className="cursor-pointer m-2 text-lg  hover:scale-105"
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
                            className="w-full h-auto rounded-md"
                        />
                    ) : (
                        <video
                            controls
                            onClick={() => navigate(`/post/${post?._id}`)}
                            className="w-full h-auto rounded-md"
                        >
                        <source src={post?.mediaURL} type="video/mp4" />
                      </video>
                    ))
                }

                <div className="flex gap-6 -ml-2 mt-1">
                    <div className="flex justify-center p-2 mr-4">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            likedByLoggedUser(post,currentUser) ? handleButtonsClick(500,dislikePostHandler,post?._id) : handleButtonsClick(500,likePostHandler,post?._id)
                        }}>
                            {
                                likedByLoggedUser(post,currentUser) ? <FaHeart className="text-lg text-red hover:scale-125"/> : <FaRegHeart className="text-lg hover:scale-125"/>
                            }
                        </button>
                        {
                            post?.likes?.likeCount > 0 && <span>{post?.likes?.likeCount}</span>
                        }
                    </div>

                    <div className="flex justify-center p-2 mr-4">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setShowCommentModal(true)
                        }}
                        className="cursor-pointer"
                        >
                            <FaRegComments className="text-lg hover:scale-125"/>
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
                    }}
                    className="cursor-pointer p-2 mr-4"
                    >
                        {
                            postAlreadyInBookmarks(post?._id) ? <FaBookmark className="text-lg hover:scale-125"/> : <FaRegBookmark className="text-lg hover:scale-125"/>
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