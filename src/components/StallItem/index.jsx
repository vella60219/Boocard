// 攤位資料：傳進來
// act 資料：useParams
import styles from "./stallItem.module.css"
import { useParams, Link } from 'react-router-dom';
import { Card } from "antd";
const { Meta } = Card;

function StallItem({ stall }) {
    const { actID } = useParams();
    const act = stall.booths.find(
        (x) => x.actID.toUpperCase() === actID.toUpperCase()
    );
    const boothNumber = `${act.zone}${act.number}`;

    return (
        <div className="borderBox borderBox3">
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
                <Meta title={boothNumber} className={`h2 ${styles.title}`} />
                <p>tags</p>
                {/* ^ tag list */}
            </Card>
        </div>
    );
}

export default StallItem;