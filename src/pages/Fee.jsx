// 收費方案頁面
// boocard.vercel.app/static/fee
import { Helmet } from "react-helmet-async"

function Fee() {
    const title = "收費方案｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Fee page</p>
        </div>
    );
}

export default Fee;