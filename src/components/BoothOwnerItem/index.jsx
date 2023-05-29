// 此元件為攤主區塊的元件，應該會被包裝在 BoothOwnerItemList 元件裡
// 預定會有放在上面的「大」、放在下面的「小」兩種，可直接做兩個元件一起輸出，或是傳參數改變狀態
// 點擊「小」元件或「大」元件自我介紹的「查看更多」按鈕，
// 會進到下一頁（BoothOwnerInfoPage），並將點擊的攤主 ID 指定給 ownerID
import styles from './boothOwnerItem.module.css';
import { Button, Avatar, Card, Typography, ConfigProvider, Row, Col } from 'antd';
const { Paragraph } = Typography;
import { UserOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { setNextPageMode, setOwnerID } from '../../redux/modalSlice';
import { SNSButtonList } from '../SNSButton';

function BoothOwnerItem({ owner }) {
    const id = owner.id;
    const dispatch = useDispatch();
    const goOwner = () => {
        dispatch(setNextPageMode(true))
        dispatch(setOwnerID(id));
    }

    return (
        <Card
            // size='small'
            bodyStyle={{
                padding: '0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                // alignItems:'center',
                flexWrap: 'wrap',
            }}
            className={styles.cardBox}
        >
            <Button
                type="link"
                ghost
                shape="round"
                onClick={goOwner}
                className={styles.buttonBox}
            >
                <div className={styles.iconBox}>
                    {owner.owner_img ? <Avatar
                        src={owner.owner_img}
                        size={124}
                        className={styles.img}
                    /> : <Avatar
                        icon={<UserOutlined />}
                        size={124}
                        className={styles.img}
                    />}
                </div>
            </Button>
            {/* ^ icon 有圖就秀圖，沒圖給預設 */}
            <div className={styles.infoBox}>
                <Button
                    type="link"
                    ghost
                    shape="round"
                    onClick={goOwner}
                    className={styles.buttonBox}
                >
                    <h2 className={`h2 ${styles.textName}`}>{owner.owner_name}</h2>
                    <ConfigProvider theme={{
                        token: {
                            colorLink: "#929DA9",
                            colorLinkHover: "#FFA1B8",
                            colorLinkActive: "#FFA1B8",
                        }
                    }}>
                        <Paragraph
                            className={`h3 ${styles.textIntro}`}
                            ellipsis={{
                                rows: 4,
                                expandable: true,
                                symbol: '查看更多',
                            }}
                        // ^ 解決不了查看更多會新增一排的問題
                        >
                            {owner.intro.split('\n').map((line, index) =>
                                <span key={index}>
                                    {line}<br />
                                </span>
                            )}
                            {/* ^ json 遇到 \n 就換行 */}
                        </Paragraph>
                    </ConfigProvider>
                </Button>
                <SNSButtonList snss={owner.sns} />

            </div>
        </Card>
    )
}

function BoothOwnerItemList({ owners }) {
    return (
        <Row gutter={[0, { xs: 10, sm: 10, md: 20 }]}  className={styles.box} >
            {owners.map(owner => (
                <Col key={owner.id} span={24}>
                    <BoothOwnerItem key={owner.id} owner={owner} />
                </Col>
            ))}
        </Row>
    );
}

export default BoothOwnerItem;
export { BoothOwnerItemList }