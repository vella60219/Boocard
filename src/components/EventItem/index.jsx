import styles from "./eventItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

const { Meta } = Card;

function EventItem({ event }) {
    return (
        <div className="borderBox borderBox3">
            <Link to={`${event.id}`} >
                <Card
                    className={styles.cardBox}
                    size='small'
                    bordered={false}
                    cover={<img
                        alt={event.name}
                        src={event.image}
                        className={styles.image}
                    />}
                >
                    <p className={`h3 ${styles.date}`}>
                        {event.time}<br />
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.title}`} />
                    <p>tags</p>
                    {/* ^ tag list */}
                </Card>
            </Link>
        </div>
    );
}

function EventItemL({ event }) {
    return (
        <div className="borderBox borderBox3">
            <Link to={`/event/${event.id}`} className={styles.box} >
                <Card
                    className={styles.cardBox}
                    size='small'
                    bordered={false}
                    cover={<img
                        alt={event.name}
                        src={event.image}
                        className={styles.image}
                    />}
                >
                    <p className={`h3 ${styles.date}`}>
                        {event.time}<br />
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.title}`} />
                    <p>tags</p>
                    {/* ^ tag list */}
                </Card>
            </Link>
        </div>
    );
}

export default EventItem;
export { EventItemL };