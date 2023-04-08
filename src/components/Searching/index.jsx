import { Input, Row, Col, Button } from 'antd';
import { IconName } from "react-icons/ai";
import style from './searching.module.css'

function Searching(){
    return(
        <div style={style.container}>
            {/* <Row gutter={[24, 24]}>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 12 }}
                >
                    <h1>從喜歡的關鍵字開始搜尋活動看看吧</h1>
                </Col>
                <Col
                    xs={{ span: 22 }}
                    sm={{ span: 22 }}
                    lg={{ span: 19 }}
                >
                    <Input placeholder="Basic usage" />
                    <Button icon={<IconName/>}>
                        搜尋
                    </Button>
                </Col>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 12 }}
                >
                    <h3>#人氣搜尋關鍵字</h3>
                </Col>
                
            </Row> */}

        </div>
    )
}


export default Searching;
