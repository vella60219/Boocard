// 攤位資訊頁面，從這裡可以點進去攤主的自我介紹頁面和品項頁面
import styles from './boothHomePage.module.css';
import { Empty, Row, Col } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import BoothGoodsItem from '../BoothGoodsItem';
import { BoothOwnerItemList } from '../BoothOwnerItem';
import BoothInfoItem from '../BoothInfoItem';
import events from '../../json/events.json'

function BoothHomePage({ booth }) {
    const event = events.find(
        (x) => x.id === booth.eventID
    );

    const [searchParams, setSearchParams] = useSearchParams();
    const act = searchParams.get("act");
    const _act = act === null ? booth.booths[0] : booth.booths.find(
        (x) => x.actID.toUpperCase() === act.toUpperCase()
    );

    return (
        <div className={styles.box}>
            <h1 className={`h1 ${styles.boothName}`}>{booth.booth_name}</h1>
            <div>
                <span className={`h3 ${styles.eventName}`}>{event.name}</span>
                <span className={`h2 ${styles.boothLink}`}>
                    <Link>#{_act.zone}{_act.number}</Link>
                    {/* ^ 預計會像噗浪一樣弄出一個新頁面 */}
                </span>
            </div>
            {/* ^ 標題 */}
            <div className={styles.infoBox}>
                <BoothOwnerItemList owners={booth.owners} />
                <BoothInfoItem booth={booth} />
            </div>
            {/* <Empty description={false} /> */}
            <div style={{ height: '400px' }} />
            {/* ^ 測試資料用 */}
            <BoothGoodsItem />

        </div >
    );
}

export default BoothHomePage;