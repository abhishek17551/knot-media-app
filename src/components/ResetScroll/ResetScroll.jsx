const { useEffect } = require("react");
const { useLocation } = require("react-router-dom")

const ResetScroll = ({children}) => {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0,0)
    },[location])

    return children;
}

export {ResetScroll}