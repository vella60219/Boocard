import { Link } from 'react-router-dom';
import styles from './eventItem.module.css';

function EventItem(eventinfo){ /* 活動總覽的那個框框的模組 */
    return (
        <div className={styles.item}>
            <Link to >
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
            </div>
        </div>
    );
}

export default EventItem;