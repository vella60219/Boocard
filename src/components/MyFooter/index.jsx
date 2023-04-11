import { Row, Col } from 'antd';
import styles from './myFooter.module.css';
import { FaBeer, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";
{/* <FontAwesomeIcon icon={faFacebookF} /> */ }

function MyFooter() {
    return (
        <div className={styles.box}>
            <Row gutter={[45, 0]} >
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 22 }}
                    md={{ span: 8 }}
                    lg={{ span: 10 }}
                >
                    <div className={styles.StxvBox}>
                        <p className={`h3 ${styles.Stxv}`}>布卡 Boocard是專為攤主和逛攤者設計的攤宣網站。</p>
                        <p className={`h3 ${styles.Stxv}`}>攤主可以輕鬆製作攤宣網頁，推廣自己的攤位，讓您不再為攤位宣傳感到困擾；逛攤者可以提前瀏覽攤位的宣傳網頁，方便快速找到心儀的攤位，讓您不再遺漏想買的商品。</p>
                        <p className={`h3 ${styles.Stxv}`}>布卡 Boocard 讓場次活動更加便捷與高效，為參與者們帶來無限便利。</p>
                    </div>
                    <div className={`${styles.btnSection} ${styles.box}`}>
                        <a href='https://www.instagram.com/'>
                            <FaInstagram className={styles.icon} />
                        </a>
                        <a href='https://zh-tw.facebook.com/'>
                            <FaFacebookF className={styles.icon} />
                        </a>
                        <a href='https://twitter.com/Boocard_'>
                            <FaTwitter className={styles.icon} />
                        </a>
                        <a href='https://www.youtube.com/'>
                            <FaYoutube className={styles.icon} />
                        </a>
                    </div>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 22 }}
                    md={{ span: 4 }}
                    lg={{ span: 3 }}
                >
                    <h5 className={`h3 ${styles.Htxv}`}>關於我們</h5>
                    <p className={styles.Stxv}><a className={`h3 ${styles.Stxv}`}>服務條款</a></p>
                    <p className={styles.Stxv}><a className={`h3 ${styles.Stxv}`}>隱私權政策</a></p>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 22 }}
                    md={{ span: 6 }}
                    lg={{ span: 5 }}
                >
                    <h5 className={`h3 ${styles.Htxv}`}>聯絡資訊</h5>
                    <p className={`h3 ${styles.Stxv}`}>TEL：03-5223118</p>
                    <p className={`h3 ${styles.Stxv}`}>Email：jioejf@jis.com.tw</p>
                    <p className={`h3 ${styles.Stxv}`}>300 台北郵政0號信箱</p>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 22 }}
                    md={{ span: 6 }}
                    lg={{ span: 4 }}
                >
                    <h5 className={`h3 ${styles.Htxv}`}>其他服務</h5>
                    <p className={styles.Stxv}><a className={`h3 ${styles.Stxv}`}>C.W.T. 活動網站</a></p>
                    <p className={styles.Stxv}><a className={`h3 ${styles.Stxv}`}>C.W.T. 社團刊物廣告</a></p>
                </Col>
            </Row>
            <div className={styles.Copy}>
                <span className={`h3 ${styles.Copytxv}`}>© 2023 Boocard copyright</span>
            </div>
        </div>
    );
}

export default MyFooter;