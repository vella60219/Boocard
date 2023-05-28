import styles from "./eventInfo.module.css"
// ^ styles
import { Row, Col, Button, ConfigProvider } from 'antd';
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
// ^ 外部元件們

function EventInfo({ event }) {
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
            <Row
                gutter={[{ md: 50, lg: 75, xl: 100 }, 0]}
                className={`${styles.box}`}
                justify="center"
            >
                <Col
                    xs={20}
                    xm={20}
                    md={10}
                    lg={9}
                    xl={7}
                    className={`${styles.imageBox}`}
                >
                    <div className={`borderBox borderBox2`}>
                        <img
                            className={styles.image}
                            src={event.image}
                            alt='banner'
                        />
                    </div>
                </Col>
                <Col
                    xs={20}
                    xm={20}
                    md={14}
                    lg={11}
                    xl={11}
                >
                    <div className={styles.titleBox}>
                        <h1 className="h1">{event.name}</h1>
                    </div>
                    <ul className={styles.textBox}>
                        <li>
                            <p className="h2">活動時間</p>
                            <p className="h3">{event.time}</p>
                        </li>
                        <li>
                            <p className="h2">活動地點</p>
                            <p className="h3">{event.location}</p>
                        </li>
                        <li>
                            <p className="h2">攤位募集</p>
                            <p className="h3">{`${event.sp} SP`}</p>
                        </li>
                        <li>
                            <p className="h2">官網</p>
                            <a
                                href={event.website}
                                target="_blank"
                            >
                                <Button
                                    type="default"
                                    shape="round"
                                    className={`h3 btn ${styles.btn}`}
                                >
                                    {event.website_name}
                                    <MdOutlineOpenInNew style={{ marginLeft: '14px' }} />
                                </Button>
                            </a>
                        </li>
                        <li>
                            <p className="h2">活動主催</p>
                            <a
                                href={event.official}
                                target="_blank"
                            >
                                <Button
                                    type="default"
                                    shape="round"
                                    className={`h3 btn ${styles.btn}`}
                                >
                                    {event.official_name}
                                    <MdOutlineOpenInNew style={{ marginLeft: '14px' }} />
                                </Button>
                            </a>
                        </li>
                        <li>
                            <p className="h2">客服信箱</p>
                            <a href={`mailto:${event.email}`} className={`h3 ${styles.link}`}>{event.email}</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default EventInfo;