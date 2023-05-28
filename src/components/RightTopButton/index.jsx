import styles from './rightTopButton.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';
import { Button, Dropdown } from 'antd';

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
            label: (<a href='/' onClick={toggleLogin}>登出</a>),
            key: '5',
            danger: true,
        },
    ];

    return (
        <div>

            {LoginMode ?
                <Dropdown
                    menu={{ items, }}
                    placement="bottomRight"
                >
                    <Button
                        type='default'
                        shape='round'
                        className={styles.btn}
                    >工藤勞熟</Button>
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
                </Button>}

        </div>
    );
}

export default RightTopButton;