// 此元件為攤位基本資訊的元件
import styles from './boothInfoItem.module.css';
import { Button, Avatar, Card, Typography, ConfigProvider, Row, Col } from 'antd';
const { Paragraph } = Typography;
import { UserOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { setNextPageMode, setOwnerID } from '../../redux/modalSlice';
import { SNSButtonList } from '../SNSButton';

function BoothInfoItem({ booth }) {

    return (
        <div className={styles.box}>
            <div className={styles.leftBox}>
                <p className={`h2`}>基本資訊</p>
            </div>
            <ul>
                <li>
                    <span className='h2'>日期：　</span>
                    {booth.booths.map((day, index) => (
                        <span className='h3' key={index}>
                            {day.act}
                            {index !== booth.booths.length - 1 && <span>　｜　</span>}
                        </span>
                    ))}
                </li>

            </ul>
        </div>
    )
}

export default BoothInfoItem;