import styles from "./actAreaButton.module.css"
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

function ActAreaButton({ actID, areaID, zone }) {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#0495FF',
                colorText: '#0495FF',
                colorBorder: '#0495FF',
                colorPrimaryHover: '#ffffff',
                colorPrimaryActive: '#ffffff',
            }
        }}>
            <Link to={`${actID}/${areaID}/${zone}`}>
                <Button
                    type="default"
                    shape="round"
                    className={`h3 ${styles.btn}`}
                >
                    {zone}
                </Button>
            </Link>
        </ConfigProvider>
    );
}

export default ActAreaButton;