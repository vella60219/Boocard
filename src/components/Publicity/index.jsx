import styles from './publicity.module.css'
import { Row , Col} from 'antd';

function Publicity(){
    return(
        <div className={`${styles.allSection} ${styles.box}`}>
            <Row justify="center" gutter={[24, 24]} >
                <Col 
                    xs = {{ span: 20}}
                    sm = {{ span: 20}}
                    lg = {{ span: 20}}
                >
                    <h1 className={styles.title}>利用Boocard，<br/>隨時隨地瀏覽場次攤宣，並提早規劃好吃土單！</h1>
                </Col>
                <Col
                    xs = {{ span: 15}}
                    sm = {{ span: 15}}
                    lg = {{ span: 5}}
                    
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_1" 
                            src='./images/img_publicity_1.png'
                        />
                        <h3 className={styles.txv}>隨時，隨地皆可使用</h3>
                    </div>
                        
                </Col>    
                <Col
                    xs = {{ span: 15}}
                    sm = {{ span: 15}}
                    lg = {{ span: 5}}
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_2" 
                            src='./images/img_publicity_2.png'
                        />
                        <h3 className={styles.txv}>創作者輕鬆獲得攤位<br/>宣傳單</h3>
                    </div>

                </Col>   
                <Col
                    xs = {{ span: 15}}
                    sm = {{ span: 15}}
                    lg = {{ span: 5}}
                >
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_3" 
                            src='./images/img_publicity_3.png'
                        />
                        <h3 className={styles.txv}>利用吃土單，<br/>事先統整要購買的<br/>商品</h3>
                    </div>

                </Col>
                <Col
                    xs = {{ span: 15}}
                    sm = {{ span: 15}}
                    lg = {{ span: 5}}
                >   
                    <div className={styles.upsection}>
                        <img
                            className={styles.imgS}
                            alt="img_publicity_4" 
                            src='./images/img_publicity_4.png'
                        />
                        <h3 className={styles.txv}>任何人皆可舉辦活動</h3>
                    </div>

                </Col>

                <Col
                    xs = {{ span: 20 }}
                    sm = {{ span: 20}}
                    lg = {{ span: 16}}
                >
                    <h1 className={styles.title}>喜愛逛場次的你，<br/>可以利用Boocard ── </h1>
                </Col>
                <Col
                    xs = {{ span: 20}}
                    sm = {{ span: 20}}
                    lg = {{ span: 10}}
                >
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1" 
                            src='./images/img_publicity_star1.png'
                        />
                        <h3 className={styles.startxv}>隨時，隨地皆可使用</h3>
                    </div>
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1" 
                            src='./images/img_publicity_star1.png'
                        />
                        <h3 className={styles.startxv}>利用吃土單，<br/>事先統整要購買的商品</h3>
                    </div>
                    <div className={styles.starSection}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star1" 
                            src='./images/img_publicity_star1.png'
                        />
                        <h3 className={styles.startxv}>標籤搜尋功能，<br/>讓你一個攤位都不錯過</h3>
                    </div>
                </Col>
                <Col
                    xs = {{ span: 20}}
                    sm = {{ span: 20}}
                    lg = {{ span: 10}}
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
                    xs = {{ span: 20 }}
                    sm = {{ span: 20}}
                    lg = {{ span: 16}}
                >
                    <h1 className={styles.title}>身為創作者的你，<br/>可以利用Boocard ──</h1>
                </Col>
                <Col
                    xs = {{ span: 20}}
                    sm = {{ span: 20}}
                    lg = {{ span: 10}}
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
                    xs = {{ span: 20}}
                    sm = {{ span: 20}}
                    lg = {{ span: 10}}
                >
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2" 
                            src='./images/img_publicity_star2.png'
                        />
                        <h3 className={styles.startxv} >以簡單的步驟，<br/>快速製作好看的攤宣</h3>
                    </div>
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2" 
                            src='./images/img_publicity_star2.png'
                        />
                        <h3 className={styles.startxv}>支援多人編輯，<br/>和合攤者一同製作攤位頁面</h3>
                    </div>
                    <div className={styles.starSection2}>
                        <img
                            className={styles.img_star}
                            alt="img_publicity_star2" 
                            src='./images/img_publicity_star2.png'
                        />
                        <h3 className={styles.startxv}>針對商品設定作品、ＣＰ標籤<br/>快速擴及到追隨者以外的同好圈</h3>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Publicity;