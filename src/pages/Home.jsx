// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import { Button } from "antd";
import Introduction from "../components/Introduction"
import BoothInfoCard from "../components/BoothInfoCard";
import { EventItemListL } from "../components/EventItemList";
import BackTop from "../components/FloatButton";
import EventItemSwiper from "../components/EventItemSwiper";

import events from "../json/events.json"

function Home() {
    const title = "布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
                <EventItemSwiper />
            {/* <EventItemSwiper /> */}
            {/* <EventItemListL events={events} /> */}
            <Introduction />
            <BackTop />
        </div>
    );
}

export default Home;