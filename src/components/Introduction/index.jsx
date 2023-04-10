import styles from './introduction.module.css';
import { Row, Col } from 'antd';

// 我不知道該怎麼動起所以大架構重排ㄌ

function IntroductionE() {
    return (
        <div className={`container ${styles.allSection} ${styles.box}`}>
            <Row justify="center" gutter={[24, 24]} className={styles.box}>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 20 }}
                >
                    <h3 className={`h1 ${styles.title}`}>利用Boocard，<br />隨時隨地瀏覽場次攤宣，並提早規劃好吃土單！</h3>
                </Col>
                <Col
                    xs={{ span: 15 }}
                    sm={{ span: 15 }}
                    lg={{ span: 5 }}

                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_1"
                            src='./images/img_publicity_1.png'
                        />
                        <p className={`h2 ${styles.txv}`}>隨時，隨地皆可使用</p>
                    </div>

                </Col>
                <Col
                    xs={{ span: 15 }}
                    sm={{ span: 15 }}
                    lg={{ span: 5 }}
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_2"
                            src='./images/img_publicity_2.png'
                        />
                        <p className={`h2 ${styles.txv}`}>創作者輕鬆獲得攤位<br />宣傳單</p>
                    </div>

                </Col>
                <Col
                    xs={{ span: 15 }}
                    sm={{ span: 15 }}
                    lg={{ span: 5 }}
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_3"
                            src='./images/img_publicity_3.png'
                        />
                        <p className={`h2 ${styles.txv}`}>利用吃土單，<br />事先統整要購買的<br />商品</p>
                    </div>

                </Col>
                <Col
                    xs={{ span: 15 }}
                    sm={{ span: 15 }}
                    lg={{ span: 5 }}
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_4"
                            src='./images/img_publicity_4.png'
                        />
                        <p className={`h2 ${styles.txv}`}>任何人皆可舉辦活動</p>
                    </div>

                </Col>

                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 16 }}
                >
                    <h3 className={`h1 ${styles.title}`}>喜愛逛場次的你，<br />可以利用Boocard ── </h3>
                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 10 }}
                >
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1"
                            src='./images/img_publicity_star1.png'
                        />
                        <p className={`h2 ${styles.txv}`}>隨時，隨地皆可使用</p>
                    </div>
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1"
                            src='./images/img_publicity_star1.png'
                        />
                        <p className={`h2 ${styles.txv}`}>利用吃土單，<br />事先統整要購買的商品</p>
                    </div>
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1"
                            src='./images/img_publicity_star1.png'
                        />
                        <p className={`h2 ${styles.txv}`}>標籤搜尋功能，<br />讓你一個攤位都不錯過</p>
                    </div>
                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 10 }}
                >
                    <div className={styles.middleSection}>
                        <img
                            className={styles.imgM}
                            alt="img_publicity_5"
                            src='./images/img_publicity_5.png'
                        />
                    </div>
                </Col>

                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 16 }}
                >
                    <h3 className={`h1 ${styles.title}`}>身為創作者的你，<br />可以利用Boocard ──</h3>
                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 10 }}
                >
                    <div className={styles.middleSection}>
                        <img
                            className={styles.imgM1}
                            alt="img_publicity_6"
                            src='./images/img_publicity_6.png'
                        />
                    </div>
                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 10 }}
                >
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2"
                            src='./images/img_publicity_star2.png'
                        />
                        <p className={`h2 ${styles.txv}`}>以簡單的步驟，<br />快速製作好看的攤宣</p>
                    </div>
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2"
                            src='./images/img_publicity_star2.png'
                        />
                        <p className={`h2 ${styles.txv}`}>支援多人編輯，<br />和合攤者一同製作攤位頁面</p>
                    </div>
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2"
                            src='./images/img_publicity_star2.png'
                        />
                        <p className={`h2 ${styles.txv}`}>針對商品設定作品、ＣＰ標籤<br />快速擴及到追隨者以外的同好圈</p>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

function Introduction() {
    return (
        <Row gutter={[0, 100]} className="container" justify="center">
            <Col span={24}>
                <Row gutter={[0, { xs: 30, lg: 40 }]} justify="center">
                    <Col span={24}><h2 className={`h1 ${styles.title}`}>利用Boocard，<br />隨時隨地瀏覽場次攤宣，並提早規劃好吃土單！</h2></Col>
                    <Col span={24}>
                        <Row gutter={[30, 30]} justify="center">
                            <Col
                                xs={{ span: 24 }}
                                lg={{ span: 6 }}
                            >
                                <div className={styles.upsection}>
                                    <div className={styles.imgBoxS}>
                                        <img
                                            className={styles.imgS}
                                            alt="img_publicity_1"
                                            src='./images/img_publicity_1.png'
                                        />
                                    </div>
                                    <p className={`h2 ${styles.txv}`}>隨時，隨地皆可使用</p>
                                </div>
                            </Col>
                            <Col
                                xs={{ span: 24 }}
                                lg={{ span: 6 }}
                            >
                                <div className={styles.upsection}>
                                    <div className={styles.imgBoxS}>
                                        <img
                                            className={styles.imgS}
                                            alt="img_publicity_2"
                                            src='./images/img_publicity_2.png'
                                        />
                                    </div>
                                    <p className={`h2 ${styles.txv}`}>創作者輕鬆獲得攤位<br />宣傳單</p>
                                </div>
                            </Col>
                            <Col
                                xs={{ span: 24 }}
                                lg={{ span: 6 }}
                            >
                                <div className={styles.upsection}>
                                    <div className={styles.imgBoxS}>
                                        <img
                                            className={styles.imgS}
                                            alt="img_publicity_3"
                                            src='./images/img_publicity_3.png'
                                        />
                                    </div>
                                    <p className={`h2 ${styles.txv}`}>利用吃土單，<br />事先統整要購買的<br />商品</p>
                                </div>
                            </Col>
                            <Col
                                xs={{ span: 24 }}
                                lg={{ span: 6 }}
                            >
                                <div className={styles.upsection}>
                                    <div className={styles.imgBoxS}>
                                        <img
                                            className={styles.imgS}
                                            alt="img_publicity_4"
                                            src='./images/img_publicity_4.png'
                                        />
                                    </div>
                                    <p className={`h2 ${styles.txv}`}>任何人皆可舉辦活動</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[0, { xs: 30, lg: 40 }]} justify="center">
                    <Col span={24}><h2 className={`h1 ${styles.title}`}>喜愛逛場次的你，<br />可以利用Boocard ── </h2></Col>
                    <Col span={24}>
                        <Row gutter={[110, 30]} justify="center">
                            <Col
                                xs={{ span: 20 }}
                                lg={{ span: 9, order: 2 }}
                            >
                                <div className={styles.imgBoxM}>
                                    <img
                                        className={styles.imgM}
                                        alt="img_publicity_5"
                                        src='./images/img_publicity_5.png'
                                    />
                                </div>
                            </Col>
                            <Col
                                xs={{ span: 20 }}
                                lg={{ span: 11 }}
                            >
                                <Row gutter={[0, { xs: 30, lg: 34 }]} justify="center">
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star1"
                                                src='./images/img_publicity_star1.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>隨時，隨地皆可使用</p>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star1"
                                                src='./images/img_publicity_star1.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>利用吃土單，<br />事先統整要購買的商品</p>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star1"
                                                src='./images/img_publicity_star1.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>標籤搜尋功能，<br />讓你一個攤位都不錯過</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[0, { xs: 30, lg: 40 }]} justify="center">
                    <Col span={24}><h2 className={`h1 ${styles.title}`}>身為創作者的你，<br />可以利用Boocard ── </h2></Col>
                    <Col span={24}>
                        <Row gutter={[110, 30]} justify="center">
                            <Col
                                xs={{ span: 20 }}
                                lg={{ span: 9 }}
                            >
                                <div className={styles.imgBoxM}>
                                    <img
                                        className={styles.imgM}
                                        alt="img_publicity_6"
                                        src='./images/img_publicity_6.png'
                                    />
                                </div>
                            </Col>
                            <Col
                                xs={{ span: 20 }}
                                lg={{ span: 12 }}
                            >
                                <Row gutter={[30, { xs: 30, lg: 34 }]} justify="center">
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star2"
                                                src='./images/img_publicity_star2.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>以簡單的步驟，<br />快速製作好看的攤宣</p>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star2"
                                                src='./images/img_publicity_star2.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>支援多人編輯，<br />和合攤者一同製作攤位頁面</p>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={styles.starSection}>
                                            <img
                                                className={styles.img_star}
                                                alt="img_publicity_star2"
                                                src='./images/img_publicity_star2.png'
                                            />
                                            <p className={`h2 ${styles.txv}`}>針對商品設定作品、ＣＰ標籤<br />快速擴及到追隨者以外的同好圈</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Introduction;