// 將 ActInfoItem map 為 list，根據寬度在 css 設定 display 不同的大小
// ^ 沒辦法自己 rwd，這用 Antd 的卡片做的
import styles from "./actInfoItemList.module.css"
// ^ styles
import { Row, Col } from "antd";
// ^ 外部元件們
import { ActInfoItemL, ActInfoItemS } from "../ActInfoItem";
// ^ 自家的元件們

function ActInfoItemList({ event }) {
    const acts = event.act;
    return (
        <Row gutter={[24, 24]} >
            {acts.map(act => (
                <Col
                    className={styles.cardBoxL}
                    key={act.id}
                    lg={{ span: 24 }}
                >
                    <ActInfoItemL key={act.id} event={event} act={act} />
                </Col>
            ))}
            {acts.map(act => (
                <Col
                    className={styles.cardBoxS}
                    key={act.id}
                    lg={{ span: 24 }}
                >
                    <ActInfoItemS key={act.id} event={event} act={act} />
                </Col>
            ))}
        </Row>
    );
}

export default ActInfoItemList;