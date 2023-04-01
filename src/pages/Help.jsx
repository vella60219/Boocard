// 說明（支援）頁面
// boocard.vercel.app/static/help
import { Helmet } from "react-helmet-async"

function Help() {
    const title = "幫助｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Help page</p>
        </div>
    );
}

export default Help;