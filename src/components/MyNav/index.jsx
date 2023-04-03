import styles from './myNav.module.css';

import { Menu, Row, Col } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import RightTopButton from '../RightTopButton';

const navItems = [
    {
        label: (<NavLink to="/event">活動總覽</NavLink>),
        key: 'event',
    },
    {
        label: (<NavLink to="/static/how">使用教學</NavLink>),
        key: 'how',
    },
    {
        label: (<NavLink to="/static/fee">收費方案</NavLink>),
        key: 'fee',
    },
    {
        label: (<NavLink to="/static/help">說明</NavLink>),
        key: 'help',
    },
]

function MyNav() {
    return (
        <Row>
            <Col>
                <Link to="/" className={styles.logoLink}>
                    <img
                        src="/images/ImagePlaceholder.png"
                        alt="布卡 Boocard"
                        className={styles.logo}
                    />
                </Link>
            </Col>
            <Col flex="auto">
                <Menu
                    mode="horizontal"
                    items={navItems}
                />
            </Col>
            <Col>
                <RightTopButton style={{ float: 'right' }} />

            </Col>
        </Row>
    );
}

export default MyNav;