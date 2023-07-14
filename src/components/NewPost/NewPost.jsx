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
        <div>
            <UserAvatar user={currentUser}/>
            <form onSubmit={submitPostHandler}>
                <div>
                    <textarea
                        value={content}
                        ref={newPostRef}
                        placeholder="What are your thoughts brewing???"
                        rows={2}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {
                        media ? (
                            <div>
                        {
                            media?.type?.includes("video") ? (
                            <video controls>
                                <source src={URL.createObjectURL(media)} type="video/mp4"/>
                            </video>
                        ) : (
                            <img 
                                src={URL.createObjectURL(media)}
                                alt="newPostPicture" 
                            />
                        )
                    }
                    <button
                        type="button"
                        onClick={() => setMedia(null)}
                    >
                        <MdCancel/>
                    </button>
                    </div>
                        ) : (
                            <></>
                        )
                    }
                </div>

                <div>
                    <label>
                        <input 
                            type="file"
                            accept="image/*, video/*"
                            onChange={(e) => setMedia(e.target.files[0])}
                        />
                        <MdOutlineAddPhotoAlternate title="Add Photo/GIF/Video"/>
                    </label>
                    <label onClick={() => setShowEmojiPicker((prev) => !prev)}>
                        <MdInsertEmoticon title="Add Emoji"/>
                    </label>
                    <PrimaryButton
                        type="submit"
                        disabled={!content.trim() && !media}
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