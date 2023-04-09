import styles from "./eventItem.module.css"
import { Link } from 'react-router-dom';
import { Card, Typography } from "antd";
const { Paragraph } = Typography;
const { Meta } = Card;

function EventItemS({ event }) {
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
                    className={styles.cardBoxL}
                    size='small'
                    bordered={false}
                    cover={<img
                        alt={event.name}
                        src={event.image}
                        className={styles.imageL}
                    />}
                    bodyStyle={{ width: '40vw' }}
                // ^ 控制卡片文字區塊的寬度
                >
                    <p className={`h3 ${styles.date}`}>
                        {event.time}<br />
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.title}`} />
                    <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                        {event.info}
                    </Paragraph>
                    <p>tags</p>
                    {/* ^ tag list */}
                </Card>
                <Card
                    className={`${styles.cardBox} ${styles.cardBoxLS}`}
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
                    <Paragraph ellipsis={{ rows: 7, expandable: false }}>
                        {event.info}
                    </Paragraph>
                    <p>tags</p>
                    {/* ^ tag list */}
                </Card>
            </Link>
        </div>
    );
}

export { EventItemS, EventItemL };