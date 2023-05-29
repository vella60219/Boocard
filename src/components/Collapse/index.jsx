import { Collapse, Row, Col } from 'antd';
import { MdKeyboardArrowRight } from "react-icons/md";
import { CaretRightOutlined } from '@ant-design/icons';
import styles from "./collapse.module.css"

const { Panel } = Collapse;

const text = `
您可以使用網站上的過濾器功能。輸入攤位名稱、商品關鍵字或相關標籤，然後點選搜尋。
網站會顯示符合您搜尋條件的攤位和商品列表。如果您仍然找不到，
可以使用網站上的聯繫方式與我們的客服團隊取得聯繫，他們將竭誠為您提供協助。
`;

function QACollapse(){
    const onChange = (key) => {
        console.log(key);
      };
    return(
        <Row gutter={[5, 5]} justify="center">
            <Col span={15}>
                <p className={`h1 ${styles.txvTitle}`}>Q & A</p>
            </Col>
            <Col span={15} >
                <p className={`h3 ${styles.txvIndex}`}>常見問題</p>
            </Col>
            <Col //span={15}
            xs={{ span: 18 }}
            sm={{ span: 18 }}
            lg={{ span: 15 }}>
                <Collapse 
                defaultActiveKey={['1']} 
                onChange={onChange} 
                className={`${styles.qaclollapse}`} 
                expandIconPosition="end"
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : -90} 
                style={{color: "#0495FF"}}/>}
                >
                    <Panel header="我找不到特定攤位或商品，該怎麼辦？" key="1" 
                    className={`h3`}>
                        <p className={`h3 ${styles.txvCollapse}`}>{text}</p>
                    </Panel>
                    <Panel header="我想了解更詳細的商品資訊，該如何查看？ " key="2"
                    className={`h3`}>
                        <p className={`h3 ${styles.txvCollapse}`}>{text}</p>
                    </Panel>
                    <Panel header="我想規劃購買清單並節省時間，有相關的功能嗎？" key="3"
                    className={`h3`}>
                        <p className={`h3 ${styles.txvCollapse}`}>{text}</p>
                    </Panel>
                    <Panel header="我在現場購買商品時，如何避免重複購買？ " key="4"
                    className={`h3`}>
                        <p className={`h3 ${styles.txvCollapse}`}>{text}</p>
                    </Panel>
                </Collapse>               
            </Col>
         
        </Row>

    )
}

export default QACollapse;