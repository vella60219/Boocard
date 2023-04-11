// 有分橫版、直版兩種
import styles from "./actInfoItem.module.css"
// ^ styles
import { Card } from "antd";
const { Meta } = Card;
// ^ 外部元件們
import ActAreaButtonList from "../ActAreaButtonList";
// ^ 自家的元件們

function CardContent({ event, act }) {
    // 卡片文字內容
    return (
        <div className={styles.infoBox}>
            <Meta title={act.act_name} className={`h2 ${styles.title}`} />
            <div className={styles.infoBottomBox}>
                <ActAreaButtonList actID={act.id} areas={act.area} />
                <div className={styles.textBox}>
                    <span className="h3">{act.act_time}</span>
                    <span className="h3">{event.location}</span>
                </div>
            </div>
        </div>
    );
}

function ActInfoItemL({ event, act }) {
    // ^ 因為也要活動的主視覺圖和活動地點，所以也接收 event
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Card
                className={styles.cardBoxL}
                size='default'
                type='inner'
                bordered={false}
                bodyStyle={{ width: '42vw', padding: '20px' }}
                // ^ 控制卡片文字區塊的寬度
                cover={
                    <div className={styles.imgBoxL}>
                        <img
                            alt={event.name}
                            src={event.image}
                            className={styles.imageL}
                        />
                    </div>
                }
            >
                <CardContent event={event} act={act} />
            </Card>
        </div>
    );
}

function ActInfoItemS({ event, act }) {
    // ^ 因為也要活動的主視覺圖和活動地點，所以也接收 event
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Card
                className={styles.cardBoxS}
                size='deult'
                type='inner'
                bordered={false}
                cover={
                    <img
                        alt={event.name}
                        src={event.image}
                        className={styles.imageS}
                    />
                }
            >
                <CardContent event={event} act={act} />
            </Card>
        </div>
    );
}

export { ActInfoItemS, ActInfoItemL };