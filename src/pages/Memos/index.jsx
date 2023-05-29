import { Helmet } from "react-helmet-async"
import MemosPage from "../../components/Memos";
import user from "../../json/user.json";

function Memos() {
    const title = "我的吃土單｜布卡 Boocard";

    return (
        <div >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <MemosPage user={user}/>
        </div>
    );
}

export default Memos;