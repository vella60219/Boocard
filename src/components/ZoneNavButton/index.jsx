import styles from "./zoneNavButton.module.css"
// ^ styles
import { Link, useParams } from "react-router-dom";
// ^ route 相關
import { Button, ConfigProvider } from "antd";
import { MdKeyboardBackspace } from "react-icons/md";
// ^ 外部元件們

function ZoneNavButton({ areaID, zone }) {
    // ^ 接收 areaID 才能傳正確的 areaID，吃 Param 的話不會改
    const { eventId, actID, zoneID } = useParams();
    const type = (zone === zoneID) ? "primary" : "default"

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#FFA1B8',
                colorText: '#FFA1B8',
                colorBorder: '#FFA1B8',
                colorPrimaryHover: '#ffffff',
                colorPrimaryActive: '#ffffff',
            }
        }}>
            <Link to={`../${eventId}/${actID}/${areaID}/${zone}`}>
                <Button
                    type={type}
                    shape="circle"
                    className={`h3 btn ${styles.btn}`}
                >
                    {zone}
                </Button>
            </Link>
        </ConfigProvider >
    );
}

function ZoneNavBackButton() {
    const { eventId } = useParams();

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#FFA1B8',
                colorText: '#FFA1B8',
                colorBorder: '#FFA1B8',
                colorPrimaryHover: '#ffffff',
                colorPrimaryActive: '#ffffff',
            }
        }}>
            <Link to={`../${eventId}`}>
                <Button
                    type="default"
                    shape="circle"
                    className={`h3 btn ${styles.btn}`}
                >
                    <MdKeyboardBackspace />
                </Button>
            </Link>
        </ConfigProvider>
    );
}

export { ZoneNavButton, ZoneNavBackButton };