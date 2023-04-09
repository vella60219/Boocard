// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import { Button } from "antd";
import Introduction from "../components/Introduction"
import BackTop from "../components/FloatButton";
import EventItemSwiper from "../components/EventItemSwiper";

import events from "../json/events.json"

function Home() {
    const title = "布卡 Boocard";
    const _events = events
        .sort((a, b) => b.id - a.id) // 排序
        .slice(0, 10); // 截取前十筆資料

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <EventItemSwiper events={_events}/>
            <Introduction />
            <BackTop />
        </div>
    );
}

export default Home;