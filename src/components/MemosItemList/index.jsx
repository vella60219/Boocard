import { Row, Col } from "antd";

import MemosItem from "../MemosItem";


function MemosItemList({ user }){
    return(
        <Row gutter={[0, 10]} justify="star" >
            {user.map(user =>(
                <Col
                    key={user.id}
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 20 }}
                    xl={{ span: 20 }}
                    xxl={{ span: 20 }}
                >    
                    <MemosItem key={user.id} user={user} />
                </Col>
            ))}
        </Row>
    );
}


export default MemosItemList;