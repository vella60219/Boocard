import styles from './hamburger.module.css';
import { Button, Drawer, Menu, ConfigProvider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';
import RightTopButton from '../RightTopButton';

function Hamburger() {
    const LoginMode = useSelector(selectLoginMode);
    const dispatch = useDispatch();
    const toggleLogin = () => dispatch(setLoginMode(!LoginMode))
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const guestItems = [
        {
            label: (<NavLink className='h2' to="/event">活動總覽</NavLink>),
            key: 'event',
        },
        {
            label: (<NavLink className='h2' to="/static/how">使用教學</NavLink>),
            key: 'how',
        },
        {
            label: (<NavLink className='h2' to="/static/fee">收費方案</NavLink>),
            key: 'fee',
        },
        {
            label: (<NavLink className='h2' to="/static/help">說明</NavLink>),
            key: 'help',
        },
        {
            type: 'divider',
        },
        {
            label: (<a href='' onClick={toggleLogin} className='h2'>註冊 / 登入</a>),
            key: 'login',
        },
    ]

    const userItems = [
        {
            label: (<NavLink to="/event" className='h2'>活動總覽</NavLink>),
            key: 'event',
        },
        {
            label: (<NavLink to="/static/how" className='h2'>使用教學</NavLink>),
            key: 'how',
        },
        {
            label: (<NavLink to="/static/fee" className='h2'>收費方案</NavLink>),
            key: 'fee',
        },
        {
            label: (<NavLink to="/static/help" className='h2'>說明</NavLink>),
            key: 'help',
        },
        {
            type: 'divider',
        },
        {
            label: (<Link to={'.'} className='h2'>帳號資訊</Link>),
            key: '1',
        },
        {
            label: (<Link to={'.'} className='h2'>我的吃土單</Link>),
            key: '2',
        },
        {
            label: (<Link to={'.'} className='h2'>我的攤位</Link>),
            key: '3',
        },
        {
            label: (<Link to={'.'} className='h2'>新建場次</Link>),
            key: '4',
        },
        {
            type: 'divider',
        },
        {
            label: (<a href='' onClick={toggleLogin} className='h2'>登出</a>),
            key: 'logout',
            danger: true,
        },
    ]

    const items = LoginMode ? userItems : guestItems;

    return (
        <div className={styles.box}>
            <div className={styles.leftBox}>
                <Button
                    type="text"
                    shape="circle"
                    icon={<MenuOutlined />}
                    onClick={showDrawer}
                    className={`btn ${styles.drawerBtn}`} />
                <NavLink to="/" className={styles.logoLink}>
                    <img
                        src="/images/logo.svg"
                        alt="布卡 Boocard"
                        className={styles.logo}
                    />
                </NavLink>
            </div>
            <RightTopButton />
            <ConfigProvider theme={{
                token: {
                    colorText: '#000000'
                }
            }}>
                <Drawer placement="top" onClose={onClose} open={open}>
                    <ConfigProvider theme={{
                        token: {
                            colorText: '#0495FF',
                            colorPrimary: '#0495FF',
                        }
                    }}>
                        <Menu
                            mode="inline"
                            items={items}
                            // selectedKeys={href}
                            onClick={onClose}
                            className={styles.menu}
                        />
                    </ConfigProvider>
                </Drawer>
            </ConfigProvider>
        </div>
    );
}

export default Hamburger;