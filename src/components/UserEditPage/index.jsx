import styles from "./userEditPage.module.css"
import { Row, Col, Card, Avatar } from "antd";
import { AiTwotoneSetting } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUser, FaQuestionCircle } from "react-icons/fa";
// ^ 外部元件們

const { Meta } = Card;
function UserEditPage(){
    return(
        <div className={`${styles.content}`}>
            <Row gutter={[5, 5]} justify="space-around">
                <Col 
                //span={5}
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 5 }}
                >
                    <Row gutter={[15, 15]} justify="center" className={`${styles.leftBox}`}>
                        <Col 
                        //span={6}
                        xs={{ span: 8 }}
                        sm={{ span: 6 }}
                        lg={{ span: 6 }}
                        >
                            <img
                                src="../public/android-chrome-192x192.png"
                                className={`${styles.leftImg}`}
                            />
                        </Col>
                        <Col span={24}>
                            
                        </Col>
                        <Col 
                        //span={12}
                        xs={{ span: 24}}
                        sm={{ span: 24 }}
                        lg={{ span: 12 }}
                        >
                            <div className={`${styles.leftTxv}`}>
                                <p >工藤勞熟</p>
                            </div>
                            
                        </Col>
                    </Row>
                </Col>

                <Col 
                //span={12}
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 12 }}
                >
                    <Row gutter={[10, 5]} justify="center">
                        <Col 
                        //span={12} 
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 12 }}
                        >
                            <div className={`${styles.cardBox}`}> 
                                <Card
                                bordered={false}
                                >
                                    <Meta
                                        avatar={<FaUser style={{ color: "#000", height: "30px", width: "30px" }}/> }
                                        title="個人檔案"
                                        description="編輯你的個人檔案"
                                    />
                                </Card>
                            </div>

                        </Col>
                        <Col //span={12}
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 12 }}
                        >  
                            <div className={`${styles.cardBox}`}>
                                <Card
                                bordered={false}
                                >
                                    <Meta
                                        avatar={<TfiMenuAlt style={{ color: "#000", height: "30px", width: "30px" }}/> }
                                        title="吃土單"
                                        description="匯出你的吃土單"
                                    />
                                </Card>                            
                            </div>  

                        </Col>
                    </Row>
                    <Row gutter={[10, 5]} justify="center">
                        <Col //span={12}
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 12 }}
                        >
                            <div className={`${styles.cardBox}`}>
                                <Card
                                bordered={false}
                                >
                                    <Meta
                                        avatar={<AiTwotoneSetting style={{ color: "#000", height: "30px", width: "30px" }}/> }
                                        title="設定"
                                        description="更改設定"
                                    />
                                </Card>
                            </div>
                        </Col>
                        <Col //span={12}
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 12 }}>       
                            <div className={`${styles.cardBox}`}>
                                <Card
                                bordered={false}
                                >
                                    <Meta
                                        avatar={<FaQuestionCircle style={{ color: "#000", height: "30px", width: "30px" }}/> }
                                        title="FAQs"
                                        description="尋找產品和服務的常見問題與答案"
                                    />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </div>
    )
}

export default UserEditPage;