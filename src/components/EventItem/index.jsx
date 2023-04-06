import styles from "./eventItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

import events from "../../json/events.json"
const event = events[0];
const { Meta } = Card;
function EventItem() {
    return (
        <div className="borderBox borderBox3">
            <Link to >
                {/* <div className="box">
                <img
                    className={styles.image}
                    src={event.image}
                    alt={event.name}
                />
                <div className={styles.info}>
                    <p className={styles.Stxv}>
                        {event.time}
                    </p>
                    <p className={styles.Stxv}>
                        {event.location}
                        6666
                    </p>
                    <p className={styles.Xtxv}>
                        {event.name}
                    </p>
                </div>
                </div> */}
                <Card
                    
                    className={styles.box}
                    size='small'
                    
                    cover={<img
                        alt={event.name}
                        src={event.image}
                        className={styles.image}
                    />}
                >
                    <p className={`h3 ${styles.Stxv}`}>
                        {event.time}<br />
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.Xtxv}`} />
                    <p>tags</p>
                </Card>
            </Link>
        </div>
    );
}
{/* <Link to >
                 */}

export default EventItem;