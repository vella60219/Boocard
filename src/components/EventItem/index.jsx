import styles from "./eventItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";
const { Meta } = Card;

function EventItemS({ event }) {
    return (
        <div className="borderBox borderBox2">
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
                        {event.time}
                    </p>
                    <p className={`h3 ${styles.location}`}>
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.title}`} />
                    {/* <p>　</p> */}
                    {/* <p style={{width:'inherit', flexWrap: 'true'}}>tags</p> */}
                    {/* ^ tag list 放這邊！！！！！！！！！！ */}
                </Card>
            </Link>
        </div>
    );
}

function EventItemL({ event }) {
    // ^ swiper 用的
    return (
        <div className="borderBox borderBox3">
            {/* ^ 上漸層框線 */}
            <Link to={`/event/${event.id}`} className={styles.box} >
                {/* ^ 連結到活動那頁 */}
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
                        {event.time}
                    </p>
                    <p className={`h3 ${styles.location}`}>
                        {event.location}
                    </p>
                    <Meta title={event.name} className={`h2 ${styles.title}`} />
                    {/* <p>tags</p> */}
                    {/* ^ tag list 放這邊！！！！！！！！！！ */}
                </Card>
            </Link>
        </div>
    );
}

export { EventItemS, EventItemL };