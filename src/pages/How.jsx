// 使用教學（遊戲方式）頁面
// boocard.vercel.app/static/how
import { Helmet } from "react-helmet-async"

function How() {
    const title = "使用教學｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is How page</p>
        </div>
    );
}

export default How;