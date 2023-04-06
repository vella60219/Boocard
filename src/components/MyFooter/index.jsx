import { Row , Col} from 'antd';
import styles from './myFooter.module.css';

function MyFooter() {
    return (
        <div>
            <Row gutter={[24, 16]} justify="space-around">
                <Col 
                    xs = {{ span: 24}}
                    sm = {{ span: 24}}
                    lg = {{ span: 10}}
                >
                    <div>
                        <p className={styles.Stxv}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
                    </div>
                    <div className={`${styles.btnSection} ${styles.box}`}>
                        <a href='https://zh-tw.facebook.com/'>
                            <img className={styles.btn} src="./images/btn_Facebook.png"/>
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img className={styles.btn} src="./images/btn_Instargram.png"/>
                        </a>
                        <a href='https://twitter.com/Boocard_'>
                        <img className={styles.btn} src="./images/btn_Twitter.png"/>
                        </a>
                    </div>
                </Col>
                <Col 
                    xs = {{ span: 24}}
                    sm = {{ span: 24}}
                    lg = {{ span: 3}}
                >
                    <p className={styles.Htxv}>關於我們</p>
                    <p className={styles.Stxv}>服務條款</p>
                    <p className={styles.Stxv}>隱私權政策</p>
                </Col>
                <Col 
                    xs = {{ span: 24}}
                    sm = {{ span: 24}}
                    lg = {{ span: 4}}
                >   
                    <p className={styles.Htxv}>聯絡資訊</p>
                    <p className={styles.Stxv}>TEL：03-5223118</p>
                    <p className={styles.Stxv}>Email：jioejf@jis.com.tw</p>
                    <p className={styles.Stxv}>300 台北郵政0號信箱</p>
                </Col>
                <Col
                    xs = {{ span: 24}}
                    sm = {{ span: 24}}
                    lg = {{ span: 4}}
                >
                    <p className={styles.Htxv}>其他服務</p>
                    <p className={styles.Stxv}>C.W.T. 活動網站</p>
                    <p className={styles.Stxv}>C.W.T. 社團刊物廣告</p>
                </Col>
            </Row>
            <div className={styles.Copy}>
                <p className={styles.Copytxv}>© 2023 Boocard copyright</p>
            </div>
        </div>
    );
}

export default MyFooter;