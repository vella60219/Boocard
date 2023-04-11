import { FloatButton } from 'antd';
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { MdBookmarks } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';

function BackTop() {
    return (
        <div >
            <FloatButton.BackTop
                visibilityHeight={0}
                icon={
                    <AiOutlineVerticalAlignTop
                        style={{
                            color: "#FFA1B8",
                            height: "30px",
                            width: "30px"
                        }} />
                }
            />
        </div>
    );
}

function FloatGrop() {
    const LoginMode = useSelector(selectLoginMode);
    return (
        <>
            {LoginMode ?
                <FloatButton.Group shape="circle" style={{ right: 24 }}>
                    <FloatButton icon={<MdBookmarks style={{ color: "#fff", height: "25px", width: "25px" }}/> } type="primary" />
                    <FloatButton.BackTop icon={<AiOutlineVerticalAlignTop style={{ color: "#FFA1B8", height: "30px", width: "30px" }} />} visibilityHeight={0} />
                </FloatButton.Group>:
                <FloatButton.Group shape="circle" style={{ right: 24 }}>
                    <FloatButton tooltip={ <div>請先登入</div>} icon={<MdBookmarks style={{ color: "#fff", height: "25px", width: "25px" }}/> } type="primary" />
                    <FloatButton.BackTop icon={<AiOutlineVerticalAlignTop style={{ color: "#FFA1B8", height: "30px", width: "30px" }} />} visibilityHeight={0} />
                </FloatButton.Group>    
            }
     
        </>


    );
}

export default BackTop;
export { FloatGrop };