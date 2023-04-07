import styles from "./stallItem.module.css"
import { useParams, Link } from 'react-router-dom';
import { Card } from "antd";
const { Meta } = Card;
import stalls from "../../json/booths.json";
function StallItem() {
    const { actID} = useParams();
    const stall = stalls[0];
    const act = stall.booths.find(
        (x) => x.actID.toUpperCase() === actID.toUpperCase()
    );
    const boothNumber = `${act.zone}${act.number}`;
    // const boothNumber = "123"
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