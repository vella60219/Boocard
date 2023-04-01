import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
// ^ router 相關
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from './theme';
// ^ theme 相關
import Home from "./pages/Home";
import Help from "./pages/Help";
import How from "./pages/How";
import AllEvent from "./pages/AllEvent";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// ^ page 元件們

function Router() {
    const theme = darkTheme;

    return (
        <ConfigProvider theme={theme} >
            <HelmetProvider context={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="static" >     {/* 靜態網頁們（非實際頁面） */}
                            <Route path="help" element={<Help />} />   {/* 說明（幫助）頁面 */}
                            <Route path="how" element={<How />} />    {/* 使用教學（遊戲方式）頁面 */}
                        </Route>
                        <Route path="event" >    {/* 父元件會一直出現在子元件，所以活動總覽不可以放這 */}
                            <Route path="" element={<AllEvent />} />  {/* 活動總覽頁面 */}
                            <Route path=":eventId" element={<Event />} />  {/* 活動主頁 */}
                            {/* 搜尋到時候會用 useSearchParams（吧），暫時先弄個暫定的網頁，我不知道 */}
                            <Route path="tag/:tagName" element={<AllEvent />} />  {/* 活動搜尋（tag）頁面 */}
                            <Route path="search/:searchKeyword" element={<AllEvent />} />  {/* 活動搜尋（關鍵字）頁面 */}
                        </Route>
                        <Route path="user" >
                            <Route path="login" element={<Login />} />     {/* 登入頁面 */}
                            <Route path="signup" element={<Signup />} />   {/* 註冊頁面 */}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ConfigProvider>
    );
}

export default Router;