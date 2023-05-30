import { Helmet } from "react-helmet-async"
import MemosDetailPage from "../components/MemosDetail";
import BackTop from "../components/FloatButton";

function MemosDetail() {
    const title = "吃土單｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <MemosDetailPage />
            <BackTop />
        </div>
    );
}

export default MemosDetail;