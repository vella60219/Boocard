import { Row, Col } from "antd";

import MemosItem from "../MemosItem";


function MemosItemList({ user }){
    return(
        <Row gutter={[0, 10]} justify="star" >
            {user.map(user =>(
                <Col
                    key={user.id}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                    xl={{ span: 24 }}
                    xxl={{ span: 24 }}
                >    
                    <MemosItem key={user.id} user={user} />
                </Col>
            ))}
        </Row>
    );
}


export default MemosItemList;