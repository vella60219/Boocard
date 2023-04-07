// 活動主頁
// boocard.vercel.app/event/:eventId
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
import { Tabs } from 'antd';

import ActInfoItemList from "../components/ActInfoItemList";
import events from "../json/events.json";

function Event() {
    const { eventId } = useParams();
    const event = events.find(
        (x) => x.id === eventId
    );
    // ^ 從網址中搜尋 eventID，再從 json 查找活動資料

    const items = [
        {
            label: "攤位一覽",
            key: 1,
            children: <ActInfoItemList event={event} />,
        },
        {
            label: "活動資訊",
            key: 2,
            children: "活動資訊",
        },
        {
            label: "公告",
            key: 3,
            children: "活動資訊",
        },
        {
            label: <a href="https://www.google.com">官網</a>,
            key: 4,
        },
    ]

    const title = `${event.name} - 活動主頁 ｜布卡 Boocard`;

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Tabs
                defaultActiveKey="1"
                centered
                items={items
                }
            />

        </div>
    );
}

export default Event;