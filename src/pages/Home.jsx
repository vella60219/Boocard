// 首頁
// boocard.vercel.app/
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import { Button } from "antd";
import Publicity from "../components/Publicity";

function Home() {
    const title = "布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Home page</p>
            <Link to="event"><p>活動總覽</p></Link>
            <Link to="static/help"><p>說明</p></Link>
            <Link to="static/how"><p>使用教學</p></Link>
            <Button>13334</Button>
            <Publicity/>
        </div>
    );
}

export default Home;