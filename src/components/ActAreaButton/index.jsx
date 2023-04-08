import styles from "./actAreaButton.module.css"
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

import events from "../../json/events.json"

function ActAreaButton({ actID, areaID, zone }) {
    // const navigate = useNavigate();
    // const act = events[0].act[0].id;
    // const area = events[0].act[0].area[0].id;
    // const zone = events[0].act[0].area[0].zone[0];
    return (
        <ConfigProvider theme={{
            token: {
                colorText: '#0495FF',
                colorBorder: '#0495FF',
            }
        }}>
            <Link to={`${actID}/${areaID}/${zone}`}>
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