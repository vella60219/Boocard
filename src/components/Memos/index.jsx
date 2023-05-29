import styles from "./memos.module.css"
import { Row, Col, Breadcrumb } from "antd";

// ^ 外部元件們

function MemosPage(){
    return(
        <div className={`${styles.content}`}>
            <Row gutter={[5, 5]} justify="space-around">
                <Col 
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 5 }}
                >
                    <Row gutter={[15, 15]} justify="center" className={`${styles.leftBox}`}>
                        <Col 
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
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 12 }}
                >
                    <Breadcrumb
                        items={[
                        {
                            title: <a href="">帳戶儀錶板</a>,
                        },
                        {
                            title: '吃土單',
                        },
                        ]}
                    />
                    <p className={`h1`}>工藤勞熟 的 吃土單</p>
                    <p className={`h2 ${styles.actTxv}`}>所有活動</p>
                </Col>
            </Row> 
        </div>
    )
}

export default MemosPage;