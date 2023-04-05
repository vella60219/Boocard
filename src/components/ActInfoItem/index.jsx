import { Row, Col, Select } from "antd";
import styles from "./actInfoItem.module.css"

function ActInfoItem(eventinfo){ /* 活動主頁的那個框框 */
    return(
        <Row gutter={[32,32]}
            style={{ justifyContent: 'center' }}
        >
            <Col
                xs = {{ span: 24}}
                sm = {{ span: 24}}
                lg = {{ span: 12}}
            >
                <img
                    className={styles.image}
                />    
            </Col>

            <Col
                xs = {{ span: 24}}
                sm = {{ span: 24}}
                lg = {{ span: 12}}
            >
                <div>
                    <p>DAY 1</p>    

                    <div>
                        <p>一樓</p>    
                    </div>
                    <div>
                        <p>二樓</p>    
                    </div>
                    <div>
                        <p>三樓</p>    
                    </div>

                    <p>{eventinfo.date1}</p>
                    <p>{eventinfo.location}</p>
                </div>  
            </Col>

            <Col
                xs = {{ span: 24}}
                sm = {{ span: 24}}
                lg = {{ span: 12}}
            >
                <img
                    className={styles.image}
                />    
            </Col>

            <Col
                xs = {{ span: 24}}
                sm = {{ span: 24}}
                lg = {{ span: 12}}
            >
                <div>
                    <p>DAY 2</p>    

                    <div>
                        <p>一樓</p>    
                    </div>
                    <div>
                        <p>二樓</p>    
                    </div>
                    <div>
                        <p>三樓</p>    
                    </div>

                    <p>{eventinfo.date2}</p>
                    <p>{eventinfo.location}</p>
                </div>  
            </Col>
        </Row>

        
    )
}

export default ActInfoItem;