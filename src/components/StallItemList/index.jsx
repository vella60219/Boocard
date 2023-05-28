// 將 BoothInfoCard map 為 list
import styles from "./stallItemList.module.css"
// ^ styles
import { useParams, useSearchParams } from "react-router-dom";
// ^ route 相關
import { Row, Col, Empty } from "antd";
// ^ 外部元件們
import BoothInfoCard from "../BoothInfoCard";
// ^ 自家的元件們
import stalls from "../../json/booths.json"
// ^ json

// function StallItemListOld() {
//     const { eventId, actID, areaID, zoneID } = useParams();
//     const _stalls = stalls.filter(x => {
//         return x?.eventID.toUpperCase() === eventId.toUpperCase()
//             && x?.booths.some((y) => {
//                 return y.actID.toUpperCase() === actID.toUpperCase()
//                     && y.areaID.toUpperCase() === areaID.toUpperCase()
//                     && y.zone.toUpperCase() === zoneID.toUpperCase()
//             })
//     });
//     // ^ 過濾出本活動的、在個 act 這個 area 這個 zone 的

//     return (
//         <>
//             {(_stalls.length === 0) ? <Empty description={false} /> :
//                 <div className={styles.box}>
//                     <Row gutter={[15, 20]} justify={{ xs: 'center' }} >
//                         {_stalls.map(stall => (
//                             <Col
//                                 key={stall.id}
//                                 xs={{ span: 22 }}
//                                 sm={{ span: 12 }}
//                                 md={{ span: 8 }}
//                                 lg={{ span: 6 }}
//                                 xxl={{ span: 4 }}
//                             >
//                                 <BoothInfoCard key={stall.id} booth={stall} />
//                             </Col>
//                         ))}
//                     </Row>
//                 </div>
//             }
//         </>
//     );
// }

function StallItemList() {
    const { eventId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const act = searchParams.get('act');
    const area = searchParams.get('area');
    const zone = searchParams.get('zone');

    const _stalls = stalls.filter(x => {
        return x?.eventID.toUpperCase() === eventId.toUpperCase()
            && x?.booths.some((y) => {
                return (act === null || y.actID.toUpperCase() === act.toUpperCase())
                && (area === null || y.areaID.toUpperCase() === area.toUpperCase())
                && (zone === null || y.zone.toUpperCase() === zone.toUpperCase())
            })
    });
    // ^ 過濾出本活動的、在個 act 這個 area 這個 zone 的

    return (
        <>
            {(_stalls.length === 0) ? <Empty description={false} /> :
                <div className={styles.box}>
                    <Row gutter={[15, 20]} justify={{ xs: 'center', sm: 'start' }} >
                        {_stalls.map(stall => (
                            <Col
                                key={stall.id}
                                xs={{ span: 22 }}
                                sm={{ span: 12 }}
                                md={{ span: 8 }}
                                lg={{ span: 6 }}
                                xxl={{ span: 4 }}
                            >
                                <BoothInfoCard key={stall.id} booth={stall} />
                            </Col>
                        ))}
                    </Row>
                </div>
            }
        </>
    );
}

export default StallItemList;