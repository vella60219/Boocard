import styles from "./actInfoItem.module.css"
import { Link } from 'react-router-dom';
import { Card } from "antd";

import events from "../../json/events.json"
const { Meta } = Card;
const event = events[0];



function ActInfoItem() {
    const img = new Image();
    img.src = event.image;
    const imgH = img.height; const imgW = img.width;
    const flag = img.width - img.height;
    const imgCutStyle = ["100px"];
    // if (img.width - img.height >= 0) {
    //     imgCutStyle = ["50px"];
    //     }
    
    return (
        <div className={`borderBox borderBox3 ${styles.box}`}>
            <Link to={`${event.id}`} >
                <Card
                    className={styles.cardBox}
                    size='default'
                    type='inner'
                    bordered={false}
                    bodyStyle={{width: '42vw'}}
                    cover={<div className={styles.imgBox}>
                        <img
                            alt={event.name}
                            src={event.image}
                            className={styles.image}
                            // style={{height: imgCutStyle[0],}}
                        />
                    </div>}
                >
                    <Meta title={event.date[0].date_name} className={`h2 ${styles.Xtxv}`} />
                    <p>tags</p>
                </Card>
            </Link>
        </div>
    );
}

export default ActInfoItem;