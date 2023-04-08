import { FloatButton } from 'antd';
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { MdBookmarks } from "react-icons/md";

function BackTop() {
    return (
        <div >
            <FloatButton.BackTop  icon={<AiOutlineVerticalAlignTop style={{ color:  "#FFA1B8", height: "30px", width: "30px"}}/>} visibilityHeight={0}/>
        </div>
    );
}

function FloatGrop() {
    return (
        
            <FloatButton.Group shape="circle" style={{ right: 24 }}>
                <FloatButton icon={<MdBookmarks style={{ color:  "#fff" ,height: "25px", width: "25px"}} />} type="primary"/>
                <FloatButton.BackTop icon={<AiOutlineVerticalAlignTop  style={{ color:  "#FFA1B8", height: "30px", width: "30px"}}/>} visibilityHeight={0} />
            </FloatButton.Group>
        
    );
}

export default BackTop;
export {FloatGrop};