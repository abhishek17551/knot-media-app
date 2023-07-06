const { useState, useRef } = require("react");
const { useAuth } = require("../../contexts/authContext");
const { usePosts } = require("../../contexts/postContext");
const { styles } = require("../../utils/constants");
const { UserAvatar } = require("../UserAvatar/UserAvatar");
const { PrimaryButton, SecondaryButton } = require("../Button/Button");

const CommentModal = ({comment,postId,setShowCommentModal,setShowOptions}) => {
    const {currentUser} = useAuth();
    const {addCommentHandler,editCommentHandler} = usePosts()

    const [commentData,setCommentData] = useState(comment?.commentData || "");
    const newCommentRef = useRef();

    const submitCommitHandler = (e) => {
        e.preventDefault();
        if(comment) {
            editCommentHandler(postId, comment?._id, {commentData})
        }
        else {
            addCommentHandler(postId,{commentData})
        }
        setCommentData("");
        setShowCommentModal(false)
        comment && setShowOptions(false)
    }

    return (
        <div
            style={styles}
            className="grid grid-cols-[2.75rem_1fr] items-start gap-2 text-sm px-4.25 py-3.25 cursor-text shadow-lg shadow-dark w-[90%] sm:w-[60%] xl:w-[45%] rounded-md border-primaryDark bg-primaryLight dark:bg-primaryDark"     
        >
            <UserAvatar user={currentUser} className="h-10.5 w-10.5"/>
            <form className="flex flex-col gap-4" onSubmit={submitCommitHandler}>
                <div className="bg-primaryLight dark:bg-primaryDark mt-1.5 outline-none w-full break-all ">
                    <textarea
                        value={commentData}
                        ref={newCommentRef}
                        placeholder="Post Your Reply."
                        onChange={(e) => setCommentData(e.target.value)}
                        className="bg-primaryLight dark:bg-primaryDark dark:text-primaryDark resize-none outline-none h-[3rem] w-full break-all "
                    />
                </div>

                <div className="flex gap-3 ml-auto">
                    <PrimaryButton
                        type='submit'
                        disabled = {!commentData?.trim()}
                        className="border-primaryLight rounded-md px-5.25 py-1.75 disabled:opacity-70"
                    >
                        {comment ? 'Save' : 'Reply'}
                    </PrimaryButton>

                    <SecondaryButton
                        type='reset'
                        onClick={() => {
                            setShowCommentModal((prev) => !prev);
                            comment && setShowOptions((prev) => !prev)
                        }}
                        className="px-4.25 py-1.25 border-none rounded-md"
                    >
                        Cancel
                    </SecondaryButton>
                </div>
            </form>


        </div>
    )
}

export {CommentModal}