// 註冊頁面
// boocard.vercel.app/user/signup
import { Helmet } from "react-helmet-async"

function Signup() {
    const title = "註冊｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Signup page</p>
        </div>
    );
}

export default Signup;