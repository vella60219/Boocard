import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
// ^ router 相關
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from './theme';
import { useSelector } from "react-redux";
import { selectLightMode } from "./redux/themeSlice";
// ^ theme 相關
import PageLayout from "./pages/Layout";
import Home from "./pages/Home";
import How from "./pages/How";
import Fee from "./pages/Fee";
import Help from "./pages/Help";
import AllEvent from "./pages/AllEvent";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserEdit from "./pages/UserEdit";
// ^ page 元件們

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

function Router() {
    const lightMode = useSelector(selectLightMode);     // redux-persist 變數
    const theme = lightMode ? lightTheme : darkTheme;
    // ^ 判斷 dark 或 light mode
    return (
        <ConfigProvider theme={theme} >     {/* theme 的 provider */}
            <HelmetProvider context={{}}>     {/* 網頁頁籤的字的 provider */}
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/*" element={<PageLayout />}>
                            <Route index element={<Home />} />

                            <Route path="static" >     {/* 靜態網頁們（非實際頁面） */}
                                <Route path="how" element={<How />} />    {/* 使用教學（遊戲方式）頁面 */}
                                <Route path="fee" element={<Fee />} />    {/* 收費方案頁面 */}
                                <Route path="help" element={<Help />} />   {/* 說明（幫助）頁面 */}
                            </Route>
                            <Route path="event/*" >    {/* 父元件會一直出現在子元件，所以活動總覽不可以放這 */}
                                <Route path="" element={<AllEvent />} />  {/* 活動總覽頁面 */}
                                <Route path=":eventId/*" element={<Event />} />  {/* 活動主頁 */}
                                <Route path=":eventId/:actID/:areaID/:zoneID" element={<Event />} />  {/* 活動攤位一覽 */}
                                {/* 搜尋到時候會用 useSearchParams（吧），暫時先弄個暫定的網頁，我不知道 */}
                                <Route path="tag/:tagName" element={<AllEvent />} />  {/* 活動搜尋（tag）頁面 */}
                                <Route path="search/:searchKeyword" element={<AllEvent />} />  {/* 活動搜尋（關鍵字）頁面 */}
                            </Route>
                            <Route path="user" >   
                                <Route path="userEdit" element={<UserEdit />} />   {/* 帳號資訊 */}
                            </Route>
                        </Route>
                        <Route path="user" >     {/* 通常在登入、註冊頁面不出現通用 nav 和 footer */}
                            <Route path="login" element={<Login />} />     {/* 登入頁面 */}
                            <Route path="signup" element={<Signup />} />   {/* 註冊頁面 */}
                            {/*<Route path="userEdit" element={<UserEdit />} />    帳號資訊 */}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ConfigProvider>
    );
}

export default Router;