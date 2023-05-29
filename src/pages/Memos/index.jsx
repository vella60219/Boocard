import { Helmet } from "react-helmet-async"
import UserEditPage from "../components/UserEditPage"

function Memos() {
    const title = "我的吃土單｜布卡 Boocard";

    return (
        <div >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is memos page</p>
        </div>
    );
}

export default Memos;