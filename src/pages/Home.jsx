// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import { Button } from "antd";
import Publicity from "../components/Publicity"
import BoothInfoCard from "../components/BoothInfoCard";

function Home() {
    const title = "布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Publicity/>
        </div>
    );
}

export default Home;