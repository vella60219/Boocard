// 接收多個活動資料，用 EventItemS map 為 list，EventItemL 會進 Swiper 所以不會來這
import styles from "./eventItemList.module.css"
// ^ styles
import { Row, Col } from "antd";
// ^ 外部元件們
import {EventItemS} from "../EventItem";
// ^ 自家的元件們

function EventItemList({ events }) {
    return (
        <Row gutter={[24, 24]} >
            {events.map(event => (
                <Col
                    key={event.id}
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    lg={{ span: 6 }}
                >
                    <EventItemS key={event.id} event={event} />
                </Col>
            ))}
        </Row>
    );
}

export default EventItemList;