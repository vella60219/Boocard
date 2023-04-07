// 有分橫版、直版兩種
import styles from "./actInfoItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

const { Meta } = Card;

// function CardContent() {
//     return(

//     );
// }
// ^ 看有沒有需要，可以把文字內容集中在這

function ActInfoItemL({ event, act }) {
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Card
                className={styles.cardBoxL}
                size='default'
                type='inner'
                bordered={false}
                bodyStyle={{ width: '42vw' }}
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
                <Meta title={act.act_name} className={`h2 ${styles.title}`} />
                <p>tags</p>
            </Card>
        </div>
    );
}

function ActInfoItemS({ event, act }) {
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Card
                className={styles.cardBoxS}
                size='deult'
                type='inner'
                bordered={false}
                // bodyStyle={{ width: '42vw' }}
                // ^ 控制卡片文字區塊的寬度
                cover={
                    <img
                        alt={event.name}
                        src={event.image}
                        className={styles.imageS}
                    />
                }
            >
                <Meta title={act.act_name} className={`h2 ${styles.title}`} />
                <p>tags</p>
            </Card>
        </div>
    );
}


export { ActInfoItemS, ActInfoItemL };