import styles from "./actInfoItemList.module.css"
import { Row, Col } from "antd";

import { ActInfoItemL, ActInfoItemS } from "../ActInfoItem";

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