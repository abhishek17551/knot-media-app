import { useRef, useState } from "react";
import { useAuth } from "../../contexts/authContext"
import { usePosts } from "../../contexts/postContext";
import { useTheme } from "../../contexts/themeContext"
import { toast } from "react-hot-toast";
import { uploadMedia } from "../../utils/uploadMedia";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import {  MdCancel, MdInsertEmoticon, MdOutlineAddPhotoAlternate } from '../../utils/icons'
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import { Modal } from "@mui/material";
import { Picker } from "emoji-mart";
import { styles } from "../../utils/constants";

const PostModal = ({post, setShowPostModal, setShowOptions}) => {
    const {darkTheme} = useTheme();
    const {currentUser} = useAuth();
    const {createPostHandler, editPostHandler} = usePosts();

    const postRef = useRef();

    const [showEmojiPicker,setShowEmojiPicker] = useState(false)
    const [media,setMedia] = useState(null);
    const [content,setContent] = useState(post || {})

    const submitHandler = async (e) => {
        e.preventDefault();
        if(post) {
            const toastId = toast.loading("Updating Post....")
            if(media) {
                const response = await uploadMedia(media);
                editPostHandler(post._id, {
                    content: content?.content,
                    media: response.url,
                    mediaAlt: response.original_filename,
                })
            } else {
                editPostHandler(post._id, {
                    content: content?.content,
                    media: content?.mediaURL,
                    mediaAlt: content?.mediaAlt,
                })
            }
            toast.success("Post updated successfully!", {id: toastId });
            setShowOptions(false);
        } else {
            const toastId = toast.loading("Creating new post..");
            if(media) {
                const response = await uploadMedia(media);
                createPostHandler({
                    content: content?.content,
                    media: response.url,
                    mediaAlt: response.original_filename,
                })
            } else {
                createPostHandler({
                    content: content?.content,
                    media: "",
                    mediaAlt: "",
                })
            }
            toast.success("New Post added successfully!", { id: toastId });
        }
        setShowPostModal(false);
        setShowEmojiPicker(false);
        setContent({});
        setMedia(null);
        postRef.current.innerText = ""
    }

    return (
        <div
            style={styles}
            className="grid grid-cols-[2.5rem_1fr] gap-2 items-start text-sm px-4 py-3 w-[90%] cursor-text shadow-dark shadow-lg rounded-md border bg-primaryLighter border-primaryDark dark:bg-primaryDark  sm:w-[60%] xl:w-[45%]"
        >
            <UserAvatar user={currentUser} className="h-10 w-10"/>
            <form onSubmit={submitHandler} className="flex flex-col gap-4">
                <div className="w-full break-all outline-none mt-1.5 bg-primaryLighter dark:bg-primaryDark
">
                <textarea 
                    value={content?.content}
                    ref={postRef}
                    placeholder="What are your thoughts brewing???"
                    onChange={(e) => setContent((prev) => ({ ...prev, content: e.target.value })) }
                    className="w-full break-all outline-none resize-none h-[6rem] bg-primaryLighter dark:bg-primaryDark dark:text-primaryLight"
                />

                {
                    content?.mediaURL || media ? (
                        <div className="relative">
                            {
                                content?.mediaURL?.split("/")[4] === "video" || media?.type?.includes("video") ? (
                                    <video controls className="w-full h-auto rounded-md">
                                        <source src={media ? URL.createObjectURL(media) : content?.mediaURL} type="video/mp4"/>
                                    </video>
                                ) : (
                                    <img
                                        src={media ? URL.createObjectURL(media) : content?.mediaURL}
                                        alt={content?.mediaAlt || media.name.split(".")[0]} 
                                        className="w-full max-h-[350px] rounded-md object-cover"
                                    />
                                )
                            }

                            <button
                                type="button"
                                onClick={() => content?.mediaURL ? setContent((prev) => ({...prev,mediaURL:null,mediaAlt:""})) : setMedia(null)}
                                className="absolute top-1.5 left-2 text-lg"
                            >
                                <MdCancel/>
                            </button>
                        </div>
                    ) :    (
                        <></>
                    )
                }
                </div>

                <div className="flex justify-between gap-2">
                    <div className="flex justify-center items-center gap-3">
                        <label htmlFor="media-input" className="cursor-pointer text-lg">
                            <input
                                type="file"
                                accept="image/*, video/*"
                                onChange={(e) => setMedia(e.target.files[0])}
                            />
                            <MdOutlineAddPhotoAlternate title="Add Photo/Video/GIF" className="text-xl scale-110 hover:scale-125 dark:text-primaryLight"/>
                        </label>

                        <label htmlFor="emojis" onClick={() => setShowEmojiPicker((prev) => !prev)}>
                            <MdInsertEmoticon title="Add Emojis" className="text-xl scale-110 hover:scale-125 dark:text-primaryLight"/>
                        </label>
                    </div>

                    <div className="flex gap-3">
                        <PrimaryButton
                            type="submit"
                            disabled={!content?.content?.trim() && !media}
                            className="py-1.5 px-5 rounded-md disabled:opacity-80 border-primaryLight"
                        >
                            {post ? "Save" : "Post"}
                        </PrimaryButton>
                        <SecondaryButton
                            type="reset"
                            onClick={() => {
                                setShowPostModal((prev) => !prev);
                                post && setShowOptions((prev) => !prev)
                            }}
                            className="py-1 px-4 rounded-md border-none"
                        >
                            Cancel
                        </SecondaryButton>
                    </div>
                </div>
            </form>

            <Modal open={showEmojiPicker} onClose={() => setShowEmojiPicker(false)}>
                <div  style={styles}>
                    <Picker
                        data={data}
                        navPosition="bottom"
                        previewPosition="none"
                        emojiSize={22.5}
                        emojiButtonSize={28.75}
                        maxFrequentRows={0}
                        theme={darkTheme ? "dark" : "light"}
                        onEmojiSelect = {
                            (emoji) => {
                                setContent((prev) => ({
                                    ...prev,
                                    content : prev.content ? prev.content + emoji.native : emoji.native
                                }))
                                setShowEmojiPicker(false)
                            }
                        }

                    />
                </div>
            </Modal>
        </div>
    )
}

export {PostModal}