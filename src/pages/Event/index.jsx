// 活動主頁和攤位總覽
// boocard.vercel.app/event/:eventId
// boocard.vercel.app/event/:eventId/:actID/:areaID/:zoneID
import styles from "./event.module.css"
// ^ styles
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
// ^ route 相關
import { Tabs } from 'antd';
import { MdOutlineOpenInNew } from "react-icons/md";
// ^ 外部元件們
import { FloatGrop } from "../../components/FloatButton";
import ActInfoItemList from "../../components/ActInfoItemList";
import StallItemList from "../../components/StallItemList";
import ZoneNav from "../../components/ZoneNav";
// ^ 自家的元件們
import events from "../../json/events.json";
// ^ json


function EventContent({ event }) {
    // ^ 只在這個檔案使用，用於決定「攤位一覽」的 tab children 要顯示什麼
    // ^ 因為下面的 Event 都查好活動資料了，就順便一起傳進來給 ActInfoItemList 用
    const { eventId, actID, areaID, zoneID } = useParams();
    // ^ 讀 URL，如果沒有 zoneID == 使用者還沒有選區域，應該要顯示 Act
    // ^ 但其實也可以考慮看看：URL 只有到 act 可以顯示那天的活動總覽；只有到 area 可以顯示那層樓的活動總覽
    // ^ 只是如果攤位很多的話會不會當掉呢......?
    const act = event.act.find(
        (x) => x.id === actID
    );
    // ^ 要傳 act.area 給 ZoneNav，重查好麻煩
    return (
        <>
            {!zoneID ?
                <ActInfoItemList event={event} /> :
                <div>
                    {/* <p>{actID} {areaID} {zoneID}</p> */}
                    {/* ^ 測試用資料 */}
                    {/* 此處應放搜尋元件 */}
                    <ZoneNav areas={act.area} />
                    <StallItemList />
                    <ZoneNav areas={act.area} />
                </div>
            }
        </>
    );
}



function Event() {
    const { eventId } = useParams();
    const event = events.find(
        (x) => x.id === eventId
    );
    // ^ 從網址中搜尋 eventID，再從 json 查找活動資料

    const title = `${event.name} - 活動主頁 ｜布卡 Boocard`;
    // ^ 然後再從找到的活動資料取出活動名字設定網頁名

    const tabItems = [
        {
            label: "攤位一覽",
            key: 1,
            children: <EventContent event={event} />,
        },
        {
            label: "活動資訊",
            key: 2,
            children: "活動資訊",
            // ^ 可以寫一個活動資訊的 function，從 event.json（或再開一個 json）並顯示內容
        },
        {
            label: "公告",
            key: 3,
            children: "公告",
            // ^ 可以寫一個公告的 function，從 event.json（或再開一個 json）並顯示內容
        },
        {
            label:
                <a
                    href={event.website}
                    target="_blank"
                    className={styles.tabOuterLink}
                >
                    <span className={styles.tabOuterLinkText}>官網</span>
                    <MdOutlineOpenInNew />
                </a>,
            key: 4,
            disabled: 'true',
            // ^ 避免這個 tab 被 active，這樣很尷尬
        },
    ]

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {/* 此處應放 banner 元件 */}
            <div className="container">
                <p className="h1">{event.name}</p>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={tabItems}
                    className={styles.tabBox}
                />
                <FloatGrop />
            </div>
        </div>
    );
}

export default Event;