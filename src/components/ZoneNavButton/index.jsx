import styles from "./zoneNavButton.module.css"
// ^ styles
import { Link, useParams, useSearchParams } from "react-router-dom";
// ^ route 相關
import { Button, ConfigProvider } from "antd";
import { MdKeyboardBackspace } from "react-icons/md";
// ^ 外部元件們

function ZoneNavButton({ areaID, zoneID }) {
    // ^ 接收 areaID 才能傳正確的 areaID，吃 Param 的話不會改
    // const { eventId, actID, zoneID } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const zone = searchParams.get('zone');
    const type = (zoneID === zone) ? "primary" : "default"

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
            <Button
                type={type}
                shape="circle"
                className={`h3 btn ${styles.btn}`}
                onClick={() => { type === "default" ? setSearchParams({ zone: zoneID }) : setSearchParams({}) }}
            >
                {zoneID}
            </Button>

        </ConfigProvider >
    );
}

function ZoneNavBackButton() {
    const { eventId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const zone = searchParams.get('zone');

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
            <Button
                type="default"
                shape="circle"
                className={`h3 btn ${styles.btn}`}
                onClick={() => setSearchParams({})}
            >
                <MdKeyboardBackspace />
            </Button>
        </ConfigProvider>
    );
}

export { ZoneNavButton, ZoneNavBackButton };