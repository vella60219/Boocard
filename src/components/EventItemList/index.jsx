import styles from "./eventItemList.module.css"
import { Row, Col } from "antd";

import EventItem from "../EventItem";
import { EventItemL } from "../EventItem";

// import events from "../../json/event.json"

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
                    <EventItem key={event.id} event={event} />
                </Col>
            ))}
        </Row>
    );
}

export default EventItemList;