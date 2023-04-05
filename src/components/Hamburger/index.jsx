import styles from './hamburger.module.css';
import { Button, Drawer, Menu, ConfigProvider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';


function Hamburger() {
    const LoginMode = useSelector(selectLoginMode);
    const dispatch = useDispatch();
    const toggleLogin = () => dispatch(setLoginMode(!LoginMode))
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const guestItems = [
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
        {
            type: 'divider',
        },
        {
            label: (<a href='' onClick={toggleLogin}>註冊 / 登入</a>),
            key: 'login',
        },
    ]

    const userItems = [
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
        {
            type: 'divider',
        },
        {
            label: (<Link to={'.'}>帳號資訊</Link>),
            key: '1',
        },
        {
            label: (<Link to={'.'}>我的吃土單</Link>),
            key: '2',
        },
        {
            label: (<Link to={'.'}>我的攤位</Link>),
            key: '3',
        },
        {
            label: (<Link to={'.'}>新建場次</Link>),
            key: '4',
        },
        {
            type: 'divider',
        },
        {
            label: (<a href='' onClick={toggleLogin}>登出</a>),
            key: 'logout',
            danger: true,
        },
    ]

    const items = LoginMode ? userItems : guestItems;

    return (
        <div className={styles.box}>
            <NavLink to="/" className={styles.logoLink}>
                <img
                    src="/images/logo.svg"
                    alt="布卡 Boocard"
                    className={styles.logo}
                />
            </NavLink>
            <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                className='btn' />
            <ConfigProvider theme={{
                token: {
                    colorText: '#000000'
                }
            }}>
                <Drawer placement="right" onClose={onClose} open={open}>
                    <Menu
                        mode="inline"
                        items={items}
                        // selectedKeys={href}
                        onClick={onClose}
                        className={styles.menu}
                    />
                </Drawer>
            </ConfigProvider>
        </div>
    );
}

export default Hamburger;