// 將 BoothInfoCard map 為 list
import styles from "./stallItemList.module.css"
// ^ styles
import { useParams } from "react-router-dom";
// ^ route 相關
import { Row, Col } from "antd";
// ^ 外部元件們
import BoothInfoCard from "../BoothInfoCard";
// ^ 自家的元件們
import stalls from "../../json/booths.json"
// ^ json

function StallItemList() {
    const { eventId, actID, areaID, zoneID } = useParams();
    const _stalls = stalls.filter(x => {
        return x?.eventID.toUpperCase() === eventId.toUpperCase()
            && x?.booths.some((y) => {
                return y.actID.toUpperCase() === actID.toUpperCase()
                    && y.areaID.toUpperCase() === areaID.toUpperCase()
                    && y.zone.toUpperCase() === zoneID.toUpperCase()
            })
    });
    // ^ 過濾出本活動的、在個 act 這個 area 這個 zone 的

    return (
        <div className={styles.box}>
            <Row gutter={[15, 50]} justify={{ xs: 'center' }} >
                {_stalls.map(stall => (
                    <Col
                        key={stall.id}
                        xs={{ span: 22 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}
                        lg={{ span: 6 }}
                        xxl={{ span: 4 }}
                    >
                        <BoothInfoCard key={stall.id} booth={stall} />
                    </Col>
                ))}
            </Row>
        </div>

    );
}

export default StallItemList;