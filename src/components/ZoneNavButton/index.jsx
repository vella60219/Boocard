import styles from "./zoneNavButton.module.css"
// ^ styles
import { Link, useParams } from "react-router-dom";
// ^ route 相關
import { Button } from "antd";
// ^ 外部元件們

function ZoneNavButton({ zone }) {
    const { eventId, actID, areaID, zoneID } = useParams();
        const type = (zone === zoneID) ? "primary" : "default"
    
    return (
        <Link to={`../${eventId}/${actID}/${areaID}/${zone}`}>
            <Button
                type={type}
                shape="circle"
            >
                {zone}
            </Button>
        </Link>
    );
}

export default ZoneNavButton;