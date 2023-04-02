import styles from './myNav.module.css';

import {  Menu } from 'antd';
import RightTopButton from '../RightTopButton';

function MyNav() {
    return (
        <div>
            <div
                style={{
                    float: 'left',
                    width: 120,
                    height: 31,
                    margin: '16px 24px 16px 0',
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
                // 之後要改成不寫在行內，然後是logo
            />
            <Menu
                theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['1']}
                items={new Array(3).fill(null).map((_, index) => ({
                    key: String(index + 1),
                    label: `nav ${index + 1}`,
                }))}
            />
            {/* <RightTopButton style={{float: 'right'}}/> */}
            {/* ^要再改一下menu的寬度 */}
        </div>
    );
}

export default MyNav;