// 活動總覽、搜尋頁面
// boocard.vercel.app/event 總覽
// boocard.vercel.app/event/tag/:tagName 標籤搜尋活動
// boocard.vercel.app/event/search/:searchKeyword 關鍵字搜尋
import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom";
import RightTopButton from "../components/RightTopButton";
import events from "../json/events.json"

import EventItemList from "../components/EventItemList";
import { FloatGrop } from "../components/FloatButton";
import { SearchingEmp } from "../components/Searching";

function AllEvent() {
    const { tagName, searchKeyword } = useParams();
    // const _keyword = !searchKeyword
    //     ? 

    const searchText = tagName ? tagName     // 有tagName嗎？有就tagName
        : searchKeyword ? searchKeyword     // 有searchKeyword嗎？有就searchKeyword
            : "";     // 都沒有就空著

    const title = !(tagName || searchKeyword) ? "活動總覽｜布卡 Boocard"
        : `搜尋活動 "${searchText}"｜布卡 Boocard`;

    return (
        <div className="container">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            
            <EventItemList events={events} />
            <FloatGrop/>
        </div>
    );
}

export default AllEvent;