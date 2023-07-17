import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { usePosts } from "../../contexts/postContext";
import { useTheme } from "../../contexts/themeContext"
import { toast } from "react-hot-toast";
import { uploadMedia } from "../../utils/uploadMedia";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import {MdCancel,MdInsertEmoticon, MdOutlineAddPhotoAlternate} from '../../utils/icons'
import { PrimaryButton } from "../Button/Button";
import { Modal } from "@mui/material";
import { Picker } from "emoji-mart";
import { styles } from "../../utils/constants";

const NewPost = () => {
    const {darkTheme} = useTheme();
    const {createPostHandler} = usePosts();
    const {currentUser} = useAuth();

    const newPostRef = useRef();

    const [showEmojiPicker,setShowEmojiPicker] = useState(false);
    const [media,setMedia] = useState(null);
    const [content,setContent] = useState("");

    const submitPostHandler = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Creating New Post...")
        if(media) {
            const response = await uploadMedia(media);
            createPostHandler({
                content,
                media : response.url,
                mediaAlt : response.original_filename
            })
        } else {
            createPostHandler({content,media : "", mediaAlt : ""})
        }

        toast.success("New Post added successfully!", {id:toastId})
        setContent("");
        setMedia(null);
        setShowEmojiPicker(false);
        newPostRef.current.innerText = ""
    }

    return (
        <div className='grid grid-cols-[2.25rem_1fr] gap-2 items-start text-sm px-4 py-3 cursor-text  border-b border-primaryDark dark:border-primaryLight'>
            <UserAvatar user={currentUser} className="h-9 w-9"/>
            <form onSubmit={submitPostHandler} className="flex flex-col gap-2">
                <div className="w-full outline-none h-auto mt-1.5 ">
                    <textarea
                        value={content}
                        ref={newPostRef}
                        placeholder="What are your thoughts brewing???"
                        rows={2}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full outline-none resize-none h-auto dark:bg-primaryBlack"
                    />
                    {
                        media ? (
                            <div className="relative">
                        {
                            media?.type?.includes("video") ? (
                            <video controls className="w-full h-auto rounded-md">
                                <source src={URL.createObjectURL(media)} type="video/mp4"/>
                            </video>
                        ) : (
                            <img 
                                src={URL.createObjectURL(media)}
                                alt="newPostPicture" 
                                className="w-full h-auto rounded-md"
                            />
                        )
                    }
                    <button
                        type="button"
                        onClick={() => setMedia(null)}
                        className="absolute text-lg top-1.5 left-2"
                    >
                        <MdCancel/>
                    </button>
                    </div>
                        ) : (
                            <></>
                        )
                    }
                </div>

                <div className="ml-auto flex items-center gap-4 mt-1.5">
                    <label className="cursor-pointer">
                        <input 
                            type="file"
                            accept="image/*, video/*"
                            onChange={(e) => setMedia(e.target.files[0])}
                            className="hidden"
                        />
                        <MdOutlineAddPhotoAlternate title="Add Photo/GIF/Video" className="text-xl scale-110 hover:scale-125"/>
                    </label>
                    <label onClick={() => setShowEmojiPicker((prev) => !prev)} className="cursor-pointer">
                        <MdInsertEmoticon title="Add Emoji" className="text-xl scale-110 hover:scale-125"/>
                    </label>
                    <PrimaryButton
                        type="submit"
                        disabled={!content.trim() && !media}
                        className="py-1 px-4 rounded-md disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                        Post
                    </PrimaryButton>
                </div>
            </form>

            <Modal open={showEmojiPicker} onClose={() => setShowEmojiPicker(false)}>
                <div style={styles}>
                    <Picker
                        data={data}
                        navPosition="bottom"
                        previewPosition="none"
                        maxFrequentRows={0}
                        emojiSize={20.5}
                        emojiButtonSize={28.5}
                        theme={darkTheme ? "dark" : "light"}
                        onEmojiSelect={(emoji) => {
                            setContent(content + emoji.native)
                            setShowEmojiPicker(false)
                        }}
                    />
                </div>
            </Modal>
        </div>
    )
}

export { NewPost }