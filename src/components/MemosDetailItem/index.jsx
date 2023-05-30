import styles from "./memosDetailItem.module.css"

import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme, Row, Col } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function MemosDetailItem(){
    const { token } = theme.useToken();

    const panelStyle = {
      marginBottom: 24,
      borderRadius: "30px",
      border: '2px solid #FFA1B8' ,
    };
    return(
        <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
        className={`${styles.content}`}
        >
            <Panel showArrow={false}  header="#R55 枕上，廁上，沒有馬上" key="1" 
            style={panelStyle} className={`h2`}>
                <Row gutter={[5, 5]} >
                    <Col 
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 20 }}
                    >
                        <p  className={`h3`}>新鮮的肝</p>
                    </Col>
                    <Col 
                        xs={{ span: 4 }}
                        sm={{ span: 4 }}
                        lg={{ span: 4 }}
                    >
                        <div className={`${styles.editBtn}`}>
                            <p  className={`h3 ${styles.editTxv}`}>編輯</p>
                        </div>
                    </Col>
                </Row>
            </Panel>
            <Panel showArrow={false}  header="#R58 佛跳牆裡面沒有佛地磨" key="2" 
            style={panelStyle} className={`h2`}>
                <Row gutter={[5, 5]} >
                    <Col 
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 20 }}
                    >
                        <p  className={`h3`}>好可愛的貼紙</p>
                    </Col>
                    <Col 
                        xs={{ span: 4 }}
                        sm={{ span: 4 }}
                        lg={{ span: 4 }}
                    >
                        <div className={`${styles.editBtn}`}>
                            <p  className={`h3 ${styles.editTxv}`}>編輯</p>
                        </div>
                    </Col>
                </Row>
            </Panel>
            <Panel showArrow={false}  header="#R85 +0他躺在床上" key="3" 
            style={panelStyle} className={`h2`}>
                <Row gutter={[5, 5]} >
                    <Col 
                        xs={{ span: 20 }}
                        sm={{ span: 20 }}
                        lg={{ span: 20 }}
                    >
                        <p  className={`h3`}>期末退散</p>
                    </Col>
                    <Col 
                        xs={{ span: 4 }}
                        sm={{ span: 4 }}
                        lg={{ span: 4 }}
                    >
                        <div className={`${styles.editBtn}`}>
                            <p  className={`h3 ${styles.editTxv}`}>編輯</p>
                        </div>
                    </Col>
                </Row>
            </Panel>
      </Collapse>
  
    )
}

export default MemosDetailItem;