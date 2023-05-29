import { Helmet } from "react-helmet-async"

function MemosDetail() {
    const title = "吃土單｜布卡 Boocard";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is MemosDetail page</p>
        </div>
    );
}

export default MemosDetail;