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
                    <span className='h3'>日期：　</span>
                    {booth.booths.map((day, index) => (
                        <span className='h3' key={index}>
                            {day.act}
                            {index !== booth.booths.length - 1 && <span>　｜　</span>}
                        </span>
                    ))}
                </li>
                <li>
                    <span className='h3'>攤位編號：　</span>
                    {booth.booths.map((day, index) => (
                        <span className='h3' key={index}>
                            {day.zone}{day.number}
                            {index !== booth.booths.length - 1 && <span>　｜　</span>}
                        </span>
                    ))}
                </li>
                <li>
                    <span className='h3'>攤位位置：　</span>
                    {booth.booths.map((day, index) => (
                        <span className='h3' key={index}>
                            {day.area}
                            {index !== booth.booths.length - 1 && <span>　｜　</span>}
                        </span>
                    ))}
                </li>
                <li>
                    <span className='h3'>攤位位置：　</span>
                    <span className='h3'>{booth.circle}</span>
                </li>
                <li>
                    <span className='h3'>備註：　</span>
                    <span className='h3'>{booth.note}</span>
                </li>
                <li>
                    <span className='h3'>標籤：　</span>
                    {/* {booth.tags.map((tag, index) => (
                        <span className='h3' key={index}>
                            {tag}
                        </span>
                    ))} */}
                    {/* ^ 還沒做 */}
                </li>
            </ul>
        </div>
    )
}

export default BoothInfoItem;