// 活動主頁和攤位總覽
// boocard.vercel.app/event/:eventId
// boocard.vercel.app/event/:eventId/:actID/:areaID/:zoneID
import styles from "./event.module.css"
// ^ styles
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
// ^ route 相關
import { Tabs, Row, Col } from 'antd';
import { MdOutlineOpenInNew } from "react-icons/md";
// ^ 外部元件們
import { FloatGrop } from "../../components/FloatButton";
import EventInfo from "../../components/EventInfo";
import ActInfoItemList from "../../components/ActInfoItemList";
import StallItemList from "../../components/StallItemList";
import ZoneNav from "../../components/ZoneNav";
import { SearchingEmpty } from "../../components/Searching";
// ^ 自家的元件們
import events from "../../json/events.json";
// ^ json






function Event() {
    const { eventId } = useParams();
    const event = events.find(
        (x) => x.id === eventId
    );
    // ^ 從網址中搜尋 eventID，再從 json 查找活動資料

    const title = `${event.name} - 活動主頁 ｜布卡 Boocard`;
    // ^ 然後再從找到的活動資料取出活動名字設定網頁名


    return (
        <div className="container">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <EventInfo event={event} />
            <div className={styles.box}>
                <h2 className="h1">攤位一覽</h2>
                <ZoneNav areas={event.act[0].area} />
                {/* <SearchingEmpty /> */}
                <StallItemList />
                <ZoneNav areas={event.act[0].area} />
            </div>
            <FloatGrop />
        </div>
    );
}

export default Event;