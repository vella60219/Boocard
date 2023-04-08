import styles from "./stallItemList.module.css"
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import StallItem from "../StallItem"
import BoothInfoCard from "../BoothInfoCard";

import stalls from "../../json/booths.json"

function StallItemList({ eventId, actID, areaID, zoneID }) {
    const _stalls = stalls.filter(x => {
        return x?.eventID.toUpperCase() === eventId.toUpperCase()
            && x?.booths.some((y) => {
                return y.actID.toUpperCase() === actID.toUpperCase()
                    && y.areaID.toUpperCase() === areaID.toUpperCase()
                    && y.zone.toUpperCase() === zoneID.toUpperCase()
            })
    });

    return (
        <div>
            <Row gutter={[24, 24]} >
                {_stalls.map(stall => (
                    <Col
                        key={stall.id}
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        lg={{ span: 5 }}
                    >
                        <BoothInfoCard key={stall.id} booth={stall} />
                    </Col>
                ))}
            </Row>
        </div>

    );
}

export default StallItemList;