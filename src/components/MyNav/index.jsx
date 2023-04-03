import styles from './myNav.module.css';

import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
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
        <div className={styles.box}>
            <div>
                <img
                    src="/images/ImagePlaceholder.png"
                    alt="布卡 Boocard"
                    className={styles.logo}
                />

                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['1']}
                    items={navItems}
                />
            </div>
            <RightTopButton style={{ float: 'right' }} />
            {/* ^ 要再改一下 menu 的寬度 */}
        </div>
    );
}

export default MyNav;