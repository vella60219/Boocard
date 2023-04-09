// 活動總覽、搜尋頁面
// boocard.vercel.app/event 總覽
// boocard.vercel.app/event/tag/:tagName 標籤搜尋活動
// boocard.vercel.app/event/search/:searchKeyword 關鍵字搜尋
import styles from './allEvent.module.css';
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import RightTopButton from "../../components/RightTopButton";
import events from "../../json/events.json";

import EventItemList from "../../components/EventItemList";
import { FloatGrop } from "../../components/FloatButton";

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
            <h1 className={`h1 ${styles.title}`}>即將舉辦的活動</h1>
            <EventItemList events={events} />
            <FloatGrop />
            <Link
                to
                className={`gradientBtn h2 ${styles.moreButton}`}
            >
                更多活動
            </Link>
            {/* ^ 尚未實現先 render 指定筆數資料，然後再請求載入一定數量資料 */}
        </div>
    );
}

export default AllEvent;