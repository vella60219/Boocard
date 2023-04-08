// 活動主頁和攤位總覽
// boocard.vercel.app/event/:eventId
// boocard.vercel.app/event/:eventId/:actID/:areaID/:zoneID
import styles from "./event.module.css"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
import { Tabs, Button } from 'antd';
import { MdOutlineOpenInNew } from "react-icons/md";
import { FloatGrop } from "../../components/FloatButton";

import ActInfoItemList from "../../components/ActInfoItemList";
import events from "../../json/events.json";

import StallItemList from "../../components/StallItemList";

function EventContent({ event }) {
    const { eventId, actID, areaID, zoneID } = useParams();

    return (
        <>
            {!zoneID ?
                <ActInfoItemList event={event} /> :
                <div>
                    <p>{actID} {areaID} {zoneID}</p>
                    <StallItemList actID={actID} areaID={areaID} zoneID={zoneID} />
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

    const items = [
        {
            label: "攤位一覽",
            key: 1,
            children: <EventContent event={event} />,
        },
        {
            label: "活動資訊",
            key: 2,
            children: "活動資訊",
        },
        {
            label: "公告",
            key: 3,
            children: "公告",
        },
        {
            label:
                <a
                    href="https://www.google.com"
                    target="_blank"
                    className={styles.tabOuterLink}
                >
                    <span className={styles.tabOuterLinkText}>官網</span>
                    <MdOutlineOpenInNew />
                </a>,
            key: 4,
            disabled: 'true',
        },
    ]

    const title = `${event.name} - 活動主頁 ｜布卡 Boocard`;
    // const targetKey = 1;
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {/* <p>{a}</p> */}
            <Tabs
                defaultActiveKey="1"
                centered
                items={items}
            />

            <FloatGrop/>
        </div>
    );
}

export default Event;