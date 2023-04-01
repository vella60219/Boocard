// 活動主頁
// boocard.vercel.app/event/:eventId
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";

function Event() {
    const { eventId } = useParams();
    const eventName = eventId;      // 之後還會再改，會去對照活動id找出活動名字

    const title = `活動主頁 - ${eventName}｜布卡 Boocard`;

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>This is Event page{eventName}</p>
        </div>
    );
}

export default Event;