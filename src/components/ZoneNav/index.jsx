// 將 ActInfoItem map 為 list，前加返回鍵
import styles from "./zoneNav.module.css"
// ^ styles
import { Row, Col } from "antd";
// ^ 外部元件們
import { ZoneNavButton, ZoneNavBackButton } from "../ZoneNavButton";
// ^ 自家的元件們

function ZoneNav({ areas }) {

    return (
        <div className={styles.box}>
            <Row gutter={[5, 5]} justify="center">
                <ZoneNavBackButton />
                {areas.map(area => (
                    area.zone.map(zone => (
                        <Col
                            className={styles.cardBoxL}
                            key={`${area.id}-${zone}`}
                        // lg={{ span: 0.1 }}
                        >
                            <ZoneNavButton key={`${area.id}-${zone}`} areaID={area.id} zone={zone} />
                        </Col>
                    ))
                ))}
            </Row>
        </div>
    );
}

export default ZoneNav;