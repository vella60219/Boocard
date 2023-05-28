// 攤位資料：傳進來
// act 資料：useParams
import styles from "./stallItem.module.css"
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Card } from "antd";
const { Meta } = Card;

function StallItem({ stall }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const act = searchParams.get("act");
    // const { actID } = useParams();
    // console.log(searchParams.get("act"))
    const _act = act===null ? stall.booths[0] : stall.booths.find(
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
                <Meta title={boothNumber} className={`h2 ${styles.title}`} />
                {/* <p>tags</p> */}
                {/* ^ tag list */}
            </Card>
        </div>
    );
}

export default StallItem;