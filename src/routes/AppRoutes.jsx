const { Routes, Route } = require("react-router-dom")
const { ResetScroll } = require("../components/ResetScroll/ResetScroll")
const { PrivateRoutes } = require("./PrivateRoutes")
const { Home, Explore, Bookmarks, UserProfile, SinglePost, PageNotFound } = require("../pages")

const AppRoutes = () => {
    return (
        <ResetScroll>
            <Routes>
                <Route element={PrivateRoutes}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/bookmarks" element={<Bookmarks/>}/>
                    <Route path="/profile/:username" element={<UserProfile/>}/>
                    <Route path="/post/:postId" element={<SinglePost/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </ResetScroll>
    )
}