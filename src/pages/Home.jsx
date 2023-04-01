// 首頁
// boocard.vercel.app/

import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>This is Home page</p>
            <Link to={`/event/`}><p>活動總覽</p></Link>
            <Link to={`static/help`}><p>說明</p></Link>
            <Link to={`/static/how`}><p>使用教學</p></Link>
        </div>
    );
}

export default Home;