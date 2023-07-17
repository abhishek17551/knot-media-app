import { Outlet } from "react-router-dom"
import { loginHeroImage } from "../../utils/constants"

const Authentication = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primaryLighter">
            <div className="flex m-4 min-h-[600px] max-w-3xl rounded-2xl shadow-2xl md:p-5 bg-[white]">
                <Outlet/>
                <div className="md:flex hidden w-1/2">
                    <img src={loginHeroImage} alt="loginHeroImage"  className="object-cover rounded-2xl"/>
                </div>
            </div>
        </div>
    )
}

export {Authentication}