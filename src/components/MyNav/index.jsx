import styles from './myNav.module.css';

import { Menu, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';
import RightTopButton from '../RightTopButton';

const navItems = [
    {
        label: (<NavLink to="/" className={styles.logoLink}>
            <img
                src="/images/logo.svg"
                alt="布卡 Boocard"
                className={styles.logo}
            />
        </NavLink>),
        key: 'home',
    },
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
let href;

function getKey() {
    href = window.location.href.split('/')
    href[3] === '' ? href = 'home' :
        href[3] === 'static' ? href = href[4] : href = href[3]
}
// 嘗試解決 menu selected key 不會跟上的問題但是我失敗ㄌ


function MyNav() {
    href = window.location.href.split('/')
    href[3] === '' ? href = 'home' :
        href[3] === 'static' ? href = href[4] : href = href[3]

    return (
        // console.log(href)
        <div className={styles.box}>
            {/* <NavLink to="/" className={styles.logoLink}>
                <img
                    src="/images/ImagePlaceholder.png"
                    alt="布卡 Boocard"
                    className={styles.logo}
                />
            </NavLink> */}
            <ConfigProvider theme={{token:{
                colorPrimary:'#1F2933'
            }}}>
            <Menu
                mode="horizontal"
                items={navItems}
                // selectedKeys={href}
                // onClick={getKey()}
                className={styles.menu}
            />
            </ConfigProvider>
            <div style={{ flexBasis: '1px' }} />    {/* 讓 menu 在 RWD 可以收起來 */}
            <RightTopButton />
        </div>
    );
}

export default MyNav;