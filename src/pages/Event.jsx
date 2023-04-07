// 活動主頁
// boocard.vercel.app/event/:eventId
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
import { FloatGrop } from "../components/FloatButton";

import ActInfoItemList from "../components/ActInfoItemList";
import events from "../json/events.json";

function Event() {
    const { eventId } = useParams();
    const event = events.find(
        (x) => x.id === eventId
    );
    // ^ 從網址中搜尋 eventID，再從 json 查找活動資料

    const title = `${event.name} - 活動主頁 ｜布卡 Boocard`;

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <ActInfoItemList event={event} />
            <FloatGrop/>
        </div>
    );
}

export default Event;