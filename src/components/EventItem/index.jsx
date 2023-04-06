import styles from "./eventItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

import events from "../../json/events.json"
const event = events[0];
const { Meta } = Card;
function EventItem() {
    return (
        <Link to >
            <Card
                hoverable
                className={styles.box}
                size='small'
                bordered="true"
                cover={<img
                    alt={event.name}
                    src={event.image}
                    className={styles.image}
                />}
            >
                <p className={`h3 ${styles.Stxv}`}>
                    {event.time}<br/>
                    {event.location}
                </p>
                <Meta title={event.name} className={`h2 ${styles.Xtxv}`} />
                <p>tags</p>
            </Card>
        </Link>
    );
}
{/* <Link to >
                <img
                    className={styles.image}
                    src={eventinfo.image}
                    alt={eventinfo.name}
                />
            </Link>
            <div className={styles.info}>
                <p className={styles.Stxv}>
                    {eventinfo.time}
                </p>
                <p className={styles.Stxv}>
                    {eventinfo.location}
                    6666
                </p>
                <p className={styles.Xtxv}>
                    {eventinfo.name}
                </p>
            </div> */}

export default EventItem;