import { SpinnerCircularFixed } from "spinners-react";
import { useTheme } from "../../contexts/themeContext"

const Loader = () => {
    const {darkTheme} = useTheme();

    return (
        <div className="flex items-center justify-center mt-20">
            <SpinnerCircularFixed
                size={65}
                thickness={200}
                speed={145}
                color="#22c55e"
                secondaryColor={
                    darkTheme ? '#374151' : '#010714'
                }
            />
        </div>
    )
}

export {Loader}