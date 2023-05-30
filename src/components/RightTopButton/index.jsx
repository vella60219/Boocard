import styles from './rightTopButton.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';
import { Button, Dropdown, ConfigProvider, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import user from '../../json/user.json'

function RightTopButton() {
    const LoginMode = useSelector(selectLoginMode);
    const dispatch = useDispatch();
    const toggleLogin = () => dispatch(setLoginMode(!LoginMode))

    const items = [
        {
            label: (<Link to={'/user/userEdit'}>帳號資訊</Link>),
            key: 'userEdit',
        },
        {
            label: (<Link to={'/user/memos'}>我的吃土單</Link>),
            key: 'memos',
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
            label: (<a href='/' onClick={toggleLogin}>登出</a>),
            key: '5',
            danger: true,
        },
    ];

    return (
        <div>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#0495FF',
                    colorText: '#0495FF',
                    colorBorder: '#0495FF',
                    colorPrimaryHover: '#ffffff',
                    colorPrimaryActive: '#ffffff',
                }
            }}>
                {LoginMode ?
                    <Dropdown
                        menu={{ items, }}
                        placement="bottomRight"
                    >
                        {/* <Button
                            type='default'
                            shape='round'
                            className={styles.btn}
                        >工藤勞熟</Button> */}
                        <Button
                            type='link'
                            shape='round'
                            className='btn'
                        // className={styles.btn}
                        >
                            {user.avatar ? <Avatar
                                src={user.avatar}
                                size={{
                                    xs: 40,
                                    sm: 40,
                                    md: 60,
                                }}
                            // className={styles.img}
                            /> : <Avatar
                                icon={<UserOutlined />}
                                size={{
                                    xs: 40,
                                    sm: 40,
                                    md: 60,
                                }}
                            // className={styles.img}
                            />}
                        </Button>
                        {/* ^ username */}
                    </Dropdown> :
                    <Button
                        type='default'
                        shape='round'
                        onClick={toggleLogin}
                        className={styles.btn}
                    >
                        {/* <Link to={"/user/login"}>註冊 / 登入</Link> */}
                        註冊 / 登入
                        {/* ^ 因為還沒實作 login 頁面，所以先設定點這個按鈕就會直接登入 */}
                    </Button>
                }
            </ConfigProvider>
        </div>
    );
}

export default RightTopButton;