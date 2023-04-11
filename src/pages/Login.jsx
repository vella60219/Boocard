// 登入頁面
// boocard.vercel.app/user/login
import { Helmet } from "react-helmet-async"

function Login() {
    const title = "登入｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Login page</p>
        </div>
    );
}

export default Login;