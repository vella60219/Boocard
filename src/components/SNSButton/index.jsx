import styles from './snsButton.module.css';
// ^ styles
import { Button, ConfigProvider, Row, Col } from 'antd';
import {
    RiFacebookFill,
    RiInstagramFill,
    RiTwitterFill,
    RiYoutubeFill,
    RiPatreonFill,
    RiEarthFill,
} from "react-icons/ri";

function SNSButton({ type, href }) {

    let icon = {};
    switch (type) {
        case 'facebook':
            icon = <RiFacebookFill size={26} />
            break;

        case 'instagram':
            icon = <RiInstagramFill size={26} />
            break;

        case 'twitter':
            icon = <RiTwitterFill size={26} />
            break;

        case 'youtube':
            icon = <RiYoutubeFill size={26} />
            break;

        case 'patreon':
            icon = <RiPatreonFill size={26} />
            break;

        case 'web':
        default:
            icon = <RiEarthFill size={26} />
            break;
    }
    // ^ 判斷 icon 類型

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#FFA1B8',
                colorText: '#FFA1B8',
                colorBorder: '#FFA1B8',
                colorPrimaryHover: '#ffffff',
                colorPrimaryActive: '#ffffff',
                // controlHeightLG: "48px",
                lineWidth: 2
            }
        }}>
            <Button
                type='default'
                shape='circle'
                href={href}
                icon={icon}
                size='large'
                target="_blank"
                className={`btn ${styles.btn}`}
            />
        </ConfigProvider>
    );
}

function SNSButtonList({ snss }) {

    return (
        <Row gutter={[10, 10]} justify='center' >
            {snss.map(sns => (
                <Col
                    className={styles.btnBox}
                    key={sns.href}
                >
                    <SNSButton type={sns.type} href={sns.href} />
                </Col>
            ))}
        </Row>
    );
}

export default SNSButton;
export { SNSButtonList };