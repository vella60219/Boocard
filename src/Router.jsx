import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Event from "./pages/Event";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/static" >     {/* 靜態網頁們（非實際頁面） */}
                    <Route path="/help" element={<Home />} />   {/* 說明（幫助）頁面 */}
                    <Route path="/how" element={<Home />} />    {/* 使用教學（遊戲方式）頁面 */}
                </Route>
                <Route path="/event" element={<Home />} >

                </Route>
                <Route path="/user" >

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;