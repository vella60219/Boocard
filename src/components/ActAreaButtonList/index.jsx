// 將 ActInfoItem map 為 list，自帶標題
import styles from "./actAreaButtonList.module.css"
// ^ styles
import { Row, Col } from "antd";
// ^ 外部元件們
import ActAreaButton from "../ActAreaButton";
// ^ 自家的元件們

function ActAreaButtonList({ actID, areas }) {
    // ^ 要給 ActAreaButton actID 去做 route，所以傳進來
    return (
        <div className={styles.box}>
            {areas.map(area => (
                <div className={styles.listBox}>
                    <p className={styles.title}>{area.area_name}</p>
                    <div
                        className={`${styles.cardBoxL} ${styles.btnBox}`}
                        key={area.id}
                    >

                        <Row gutter={[10, 5]} >
                            {area.zone.map(zone => (
                                <Col
                                    className={styles.cardBoxL}
                                    key={zone}
                                >
                                    <ActAreaButton key={zone} actID={actID} areaID={area.id} zone={zone} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ActAreaButtonList;