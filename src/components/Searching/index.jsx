import { Input, Row, Col, Button } from 'antd';
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
                    lg={{ span: 19 }}
                >
                    <div className={style.upsection}>
                        <Input styles={ innerHeight="400px"} placeholder="Basic usage" />
                        <Button shape="round" icon={<AiOutlineSearch/>}>
                            搜尋
                        </Button>                    
                    </div>

                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 12 }}
                >
                    <h3 className={style.txv}>#人氣搜尋關鍵字</h3>
                </Col>
            </Row>
        </div>
    )
}


export default Searching;
