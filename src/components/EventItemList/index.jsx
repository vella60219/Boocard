// 接收多個活動資料，用 EventItemS map 為 list，EventItemL 會進 Swiper 所以不會來這
import styles from "./eventItemList.module.css"
// ^ styles
import { Row, Col } from "antd";
// ^ 外部元件們
import { EventItemS } from "../EventItem";
// ^ 自家的元件們

function EventItemList({ events }) {
    return (
        <Row gutter={[{ sm: 10, md: 15, xl: 20 }, { xs: 20, sm: 25, xl: 30 }]} justify="center" >
            {events.map(event => (
                <Col
                    key={event.id}
                    xs={{ span: 23 }}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <EventItemS key={event.id} event={event} />
                </Col>
            ))}
        </Row>
    );
}

export default EventItemList;