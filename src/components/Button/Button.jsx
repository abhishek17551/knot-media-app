const PrimaryButton = (props) => {
    const {children,type,className,onClick,disabled} = props;

    const classes = className + "bg-primary text-primaryLight transition-all duration-500 hover:bg-primaryDark hover:ease-in-out active:scale-[0.97] ";

    const classesDisabled = className + "bg-primary text-primaryLight duration-500 hover:cursor-not-allowed transition-all";

    return (
        <button
            type={type}
            className={!disabled ? classes : classesDisabled}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

const SecondaryButton = (props) => {
    const { children, type, className, onClick } = props;

    const classes = className + "bg-primaryLight text-primaryDark outline outline-[0.75px] transition-all duration-500 hover:ease-in-out hover:bg-primary hover:text-primaryLight active:scale-[0.97] "

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export {PrimaryButton,SecondaryButton}