import styles from "./zoneNavButton.module.css"
// ^ styles
import { Link, useParams } from "react-router-dom";
// ^ route 相關
import { Button } from "antd";
import { MdKeyboardBackspace } from "react-icons/md";
// ^ 外部元件們

function ZoneNavButton({ areaID, zone }) {
    // ^ 接收 areaID 才能傳正確的 areaID，吃 Param 的話不會改
    const { eventId, actID, zoneID } = useParams();
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

function ZoneNavBackButton() {
    const { eventId } = useParams();

    return (
        <Link to={`../${eventId}`}>
            <Button
                type="default"
                shape="circle"
                className="btn"
            >
                <MdKeyboardBackspace />
            </Button>
        </Link>
    );
}

export { ZoneNavButton, ZoneNavBackButton };