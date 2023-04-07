import styles from "./actAreaButton.module.css"
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

import events from "../../json/events.json"

function ActAreaButton() {
    // const navigate = useNavigate();
    const zone = events[0].act[0].area[0].zone[0];
    return (
        <ConfigProvider theme={{
            token: {
                colorText: '#0495FF',
                colorBorder: '#0495FF',
            }
        }}>
            <Link to={"."}>
                <Button
                    type="default"
                    shape="round"
                    className="h3"
                >
                    {zone}
                </Button>
            </Link>
        </ConfigProvider>
    );
}

export default ActAreaButton;