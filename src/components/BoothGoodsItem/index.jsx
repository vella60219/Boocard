// 此元件為品項區塊的元件，應該會被包裝在 BoothGoodsItemList 元件裡
// 李雅淳覺得或許應該要有「大」、「小」兩種，可直接做兩個元件一起輸出，或是傳參數改變狀態
// 點擊元件會進到下一頁（BoothGoodsInfoPage），並將點擊的品項 ID 指定給 goodsID
import styles from './boothGoodsItem.module.css';
import { Button, Card, Row, Col } from 'antd';
const { Meta } = Card;

import { useDispatch } from 'react-redux';
import { setNextPageMode, setGoodsID } from '../../redux/modalSlice';

function BoothGoodsItemS({ good }) {
    const dispatch = useDispatch();
    const goGoods = () => {
        dispatch(setNextPageMode(true))
        dispatch(setGoodsID(good.id));
    }

    return (
        <div className={`borderBox borderBox2 ${styles.border} ${styles.s}`}>
            <Button type="link" onClick={goGoods} className={styles.buttonBox}>
                <Card
                    className={styles.cardBox}
                    size='small'
                    bordered={false}
                    cover={<img
                        alt={good.goods_name}
                        src={good.goods_banner}
                        className={styles.image}
                    />}
                    bodyStyle={{ padding: "15px 10px" }}
                >
                    <p className={`h3 ${styles.name}`}>{good.goods_name}</p>
                    <p className={`h3 ${styles.price}`}>NT {good.price}</p>
                </Card>
            </Button>
        </div>
    );
}

function BoothGoodsItemL({ good }) {
    const dispatch = useDispatch();
    const goGoods = () => {
        dispatch(setNextPageMode(true))
        dispatch(setGoodsID(good.id));
    }

    return (
        <div className={`borderBox borderBox2 ${styles.borderL} ${styles.l}`}>
            <Button type="link" onClick={goGoods} className={styles.buttonBoxL}>
                <div
                    className={styles.cardBoxL}
                >
                    <div className={styles.imgBoxL}>
                        <img
                            alt={good.goods_name}
                            src={good.goods_banner}
                            className={styles.imageL}
                        />
                    </div>
                    <div className={styles.contentBoxL}>
                        <p className={`h3 ${styles.name}`}>{good.goods_name}</p>
                        <p className={`h3 ${styles.price}`}>NT {good.price}</p>
                    </div>
                </div>
            </Button>
        </div>
    );
}

function BoothGoodsItemList({ goods }) {
    return (
        <div className={styles.box}>
            <p className={`h2 ${styles.title}`}>所有商品</p>
            <Row gutter={[10, 20]} justify='space-evenly' >
                {goods.map(good => (
                    <Col
                        key={good.id}
                        xs={24}
                        sm={8}
                        className={styles.colBoxS}
                    >
                        <BoothGoodsItemS key={good.id} good={good} />
                        <BoothGoodsItemL key={good.id} good={good} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default BoothGoodsItemS;
export { BoothGoodsItemList };