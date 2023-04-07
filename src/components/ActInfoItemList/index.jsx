import styles from "./actInfoItemList.module.css"
import { Row, Col } from "antd";

import ActInfoItem from "../ActInfoItem";

function ActInfoItemList({ event }) {
    const acts = event.act;
    return (
        <Row gutter={[24, 24]} >
            {acts.map(act => (
                <Col
                    key={act.id}
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    lg={{ span: 24 }}
                >
                    <ActInfoItem key={act.id} event={event} act={act} />
                </Col>
            ))}
        </Row>
    );
}

export default ActInfoItemList;