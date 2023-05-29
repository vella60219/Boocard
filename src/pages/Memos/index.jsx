import { Helmet } from "react-helmet-async"
import MemosPage from "../../components/Memos";

function Memos() {
    const title = "我的吃土單｜布卡 Boocard";

    return (
        <div >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <MemosPage />
        </div>
    );
}

export default Memos;