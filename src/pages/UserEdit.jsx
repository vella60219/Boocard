import { Helmet } from "react-helmet-async"
import UserEditPage from "../components/UserEditPage"

function UserEdit() {
    const title = "帳號資訊｜布卡 Boocard";

    return (
        <div >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <UserEditPage />
        </div>
    );
}

export default UserEdit;