// 有分橫版、直版兩種
import styles from "./actInfoItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

const { Meta } = Card;

function ActInfoItem({ event, act }) {
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Link to={`${event.id}`} >
                <Card
                    className={styles.cardBox}
                    size='default'
                    type='inner'
                    bordered={false}
                    bodyStyle={{ width: '42vw' }}
                    // ^ 控制卡片文字區塊的寬度
                    cover={
                        <div className={styles.imgBox}>
                            <img
                                alt={event.name}
                                src={event.image}
                                className={styles.image}
                            />
                        </div>
                    }
                >
                    <Meta title={act.act_name} className={`h2 ${styles.title}`} />
                    <p>tags</p>
                </Card>
            </Link>
        </div>
    );
}

export default ActInfoItem;