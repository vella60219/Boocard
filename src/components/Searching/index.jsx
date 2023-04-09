import { Input, Row, Col, Button, Tag } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import style from './searching.module.css'

function Searching(){
    return(
        <div className={style.container}>
            <Row justify="center" gutter={[24, 24]} className={style.box}>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 12 }}
                >
                    <h1 className={style.title}>從喜歡的關鍵字開始搜尋活動看看吧</h1>
                </Col>
                <Col
                    xs={{ span: 22 }}
                    sm={{ span: 22 }}
                    lg={{ span: 17 }}
                >
                    <div className={style.upsection}>
                        <Input placeholder="輸入關鍵字"  size="large" className={style.input}/>
                        <Button shape="round" size='large' type="primary" className={`btn `}>
                            搜尋 <AiOutlineSearch className={style.searchBtn}/>
                        </Button>                    
                    </div>

                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 8 }}
                    lg={{ span: 8 }}
                >
                    <div className={style.HotTxv}>
                        <h3 className={style.txv}>#人氣搜尋關鍵字</h3>             
                    </div>

                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 12 }}
                    lg={{ span: 12 }}
                >
                    <div className={style.downsection}>
                        <Tag color="#0495FF" className={style.HotTag}> ornare</Tag>   
                        <Tag color="#0495FF" className={style.HotTag}> tempus</Tag> 
                        <Tag color="#0495FF" className={style.HotTag}> condimentum </Tag> 
                        <Tag color="#0495FF" className={style.HotTag}> Morbi  re</Tag>    
                                    
                    </div>


                </Col>
            </Row>
        </div>
    )
}


export default Searching;
