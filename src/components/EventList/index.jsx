// import events from "../../json/event.json"
import EventItem from "../EventItem";
import styles from "./EventList.module.css"
import { Row , Col} from "antd";

function EventList({events}){  /* 活動總覽的那個框框 */
    return(
        <div className={`${styles.section} ${styles.box}`}>
            <Row gutter={[24, 24]} >
                {events.map(eventinfo=>(
                    <Col 
                        key={eventinfo.id}
                        xs = {{ span: 24}}
                        sm = {{ span: 12}}
                        lg = {{ span: 6}}
                    >
                    <EventItem key={eventinfo.id} eventinfo={eventinfo}/> 
                    </Col>
                ))}
            </Row>            
        </div>

    );
}

export default EventList;