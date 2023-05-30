// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
// ^ route 相關
import { Button } from "antd";
// ^ 外部元件們
import Introduction from "../components/Introduction"
import BackTop from "../components/FloatButton";
import EventItemSwiper from "../components/EventItemSwiper";
import Searching from "../components/Searching";
import QACollapse from "../components/Collapse";
import { HomeBanner } from "../components/Banner";
// ^ 自家的元件們
import events from "../json/events.json"
// ^ json

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
            <HomeBanner/>
            <Searching/>
            <EventItemSwiper events={_events}/>
            <Introduction />
            <QACollapse />
            <BackTop />
        </div>
    );
}

export default Home;