import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Help from "./pages/Help";
import How from "./pages/How";

import AllEvent from "./pages/AllEvent";
import Event from "./pages/Event";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="static" >     {/* 靜態網頁們（非實際頁面） */}
                    <Route path="help" element={<Help />} />   {/* 說明（幫助）頁面 */}
                    <Route path="how" element={<How />} />    {/* 使用教學（遊戲方式）頁面 */}
                </Route>
                <Route path="event" element={<AllEvent />} >    {/* 活動總覽頁面 */}
                    <Route path="tag/:tagName" element={<AllEvent />} />  {/* 活動搜尋（tag）頁面 */}
                    <Route path="search/:searchKeyword" element={<AllEvent />} />  {/* 活動搜尋（關鍵字）頁面 */}
                    <Route path=":eventId" element={<Event />} />  {/* 活動主頁 */}
                </Route>
                <Route path="user" >
                    <Route path="login" element={<Login />} />     {/* 登入頁面 */}
                    <Route path="signup" element={<Signup />} />   {/* 註冊頁面 */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;