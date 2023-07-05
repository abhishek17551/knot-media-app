const UserAvatar = (props) => {
    const {className} = props;

    const imageClass = className + "rounded-full object-cover"

    const avatar = props?.user?.profileAvatar;

    return (
        <span className="user-avatar cursor-pointer select-none">
            {
                avatar ? (
                    <img
                        src={avatar}
                        alt={props?.user?.firstName}
                        className={imageClass}
                    />
                ) : (
                    <img
                        src='altProfileImage'
                        alt='altProfileImage'
                        className={imageClass}
                    />
                )
            }
        </span>
    )
}

export {UserAvatar}