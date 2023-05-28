import { Helmet } from "react-helmet-async"

function User_edit() {
    const title = "帳號資訊｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is User_edit page</p>
        </div>
    );
}

export default User_edit;