// 攤位資料：傳進來
// act 資料：useParams
import styles from "./stallItem.module.css"
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Card, Avatar, Space, Tag, ConfigProvider } from "antd";
const { Meta } = Card;

function NumTag({ num }) {
    return (
        <ConfigProvider theme={{
            token: {
                borderRadiusSM: '20px',
                colorBorder: '#FFA1B8',
                colorText: '#FFA1B8',
            }
        }}>
            <Tag className={styles.numTag}>{num}</Tag>
        </ConfigProvider>
    );
}

import { UserOutlined } from '@ant-design/icons';

function StallItem({ stall }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const act = searchParams.get("act");
    // const { actID } = useParams();
    // console.log(searchParams.get("act"))
    const _act = act === null ? stall.booths[0] : stall.booths.find(
        (x) => x.actID.toUpperCase() === act.toUpperCase()
    );
    // const _act =  stall.booths[0]

    const boothNumber = `${_act.zone}${_act.number}`;

    return (
        <div className="borderBox borderBox2">
            <Card
                className={styles.cardBox}
                size='small'
                bordered={false}
                cover={<img
                    alt={stall.booth_name}
                    src={stall.cover_img}
                    className={styles.image}
                />}
            >
                <Space align='center' size={6} className={styles.nameBox}>
                    {stall.circle_img ? <Avatar
                        src={stall.circle_img}
                        size={38}
                        className={styles.img}
                    /> : <Avatar
                        icon={<UserOutlined />}
                        size={38}
                        className={styles.img}
                    />}
                    <span className="h2">{stall.booth_name}</span>
                </Space>
                {/* <Meta title={boothNumber} className={`h2 ${styles.title}`} /> */}
                {/* <p>tags</p> */}
                {/* ^ tag list */}
            </Card>
            <NumTag num={boothNumber} />
        </div>
    );
}

export default StallItem;