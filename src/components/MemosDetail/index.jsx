import styles from "./memosDetail.module.css"
import { Row, Col, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';

import MemosItemList from "../MemosItemList";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// ^ 外部元件們

function MemosDetailPage({ user }){
    return(
        <div className={`${styles.content}`}>
            <Row gutter={[5, 5]} justify="space-around">
                <Col 
                xs={{ span: 0 }}
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
                                src="../../public/android-chrome-192x192.png"
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
                            title: <Link to={'/user/userEdit'}>帳號資訊</Link>,
                        },
                        {
                            title: <Link to={'/user/memos'}>吃土單</Link>
                        },
                        {
                            title: 'IF創集繪 綜合主題同人誌販售會',
                        },
                        ]}
                    />
                    <Link to={'/user/memos'}>
                    <MdArrowBackIosNew className={`${styles.back}`}/>
                    </Link>
                    
                    <p className={`h1`}>IF創集繪 綜合主題同人誌販售會</p>
                    <p className={`h3 ${styles.actTxv}`}>在 IF創集繪 綜合主題同人誌販售會 裡有 16筆 吃土項目</p>
                    
                </Col>
            </Row> 
        </div>
    )
}

export default MemosDetailPage;