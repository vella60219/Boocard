// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import { Button } from "antd";
import Introduction from "../components/Introduction"
import BoothInfoCard from "../components/BoothInfoCard";
import BackTop from "../components/FloatButton";

function Home() {
    const title = "布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Introduction/>
            <BackTop/>
        </div>
    );
}

export default Home;