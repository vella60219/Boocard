import stalles from '../../Json/stallinfo.json'
import StallItem from '../StallItem';
import styles from './stallList.module.css'
import { Row , Col} from "antd";

function StallList(){  /* 攤位一覽的那個框框 */
    return(
        <div className={`${styles.section} ${styles.box}`}>
            <Row gutter={[24, 24]} >
                {stalles.map(stallinfo=>(
                    <Col 
                        key={stallinfo.id}
                        xs = {{ span: 24}}
                        sm = {{ span: 12}}
                        lg = {{ span: 5}}
                    >
                    <StallItem key={stallinfo.id} stallinfo={stallinfo}/> 
                    </Col>
                ))}
            </Row>    
        </div>
    )
}

export default StallList;