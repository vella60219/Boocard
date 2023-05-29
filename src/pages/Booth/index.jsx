import styles from "./booth.module.css"
// ^ styles
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
// ^ route 相關
import events from "../../json/events.json";
import booths from "../../json/booths.json";
// ^ json
import { Button, ConfigProvider } from 'antd';
import { IoClose, IoChevronBackOutline } from "react-icons/io5";


import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectNextPageMode, setNextPageMode,
    selectOwnerID, setOwnerID,
    selectGoodsID, setGoodsID
} from '../../redux/modalSlice';

import BoothHomePage from '../../components/BoothHome';
import BoothOwnerInfoPage from '../../components/BoothOwnerInfoPage';
import BoothGoodsInfoPage from '../../components/BoothGoodsInfoPage';

function Booth() {
    const { boothId } = useParams();
    const booth = booths.find(
        (x) => x.id === boothId
    );
    const event = events.find(
        (x) => x.id === booth.eventID
    );
    // ^ 從網址中搜尋 eventID，再從 json 查找活動資料

    const title = `${booth.booths[0].zone}${booth.booths[0].number} - ${booth.booth_name} - ${event.name} - 攤位頁 ｜布卡 Boocard`;
    // ^ 然後再從找到的活動資料取出活動名字設定網頁名


    const nextPageMode = useSelector(selectNextPageMode);
    const ownerID = useSelector(selectOwnerID);
    const goodsID = useSelector(selectGoodsID);

    const dispatch = useDispatch();
    const goBack = () => {
        dispatch(setNextPageMode(false));
        dispatch(setOwnerID(""));
        dispatch(setGoodsID(""));
        // 從 modal Nav 回上一頁或關掉 Modal 時需把所有值歸零
        // 聽起來好像有點多此一舉？但我只寫得出這樣啦⋯⋯哈哈
    }

    const [open, setOpen] = useState(false);    // 用於控制 modal 使否開啟
    const showModal = () => {      // 給按鈕用來打開 modal
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
        setOpen(true);
    }
    const handleCancel = () => {                // 關掉 modal 用的，順便用 goBack 歸零
        // document.body.style.overflowX = 'scroll'
        setOpen(false);
        goBack();
        // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
    }



    return (
        <div className="container">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={styles.cardBox}>

                <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#FFA1B8',
                        colorText: '#FFA1B8',
                        colorBorder: '#FFA1B8',
                        colorPrimaryHover: '#ffffff',
                        lineWidth: 2
                    }
                }}>
                    {nextPageMode ?
                        <div className={styles.navBox}>
                            <Button
                                type="default"
                                shape='circle'
                                size='large'
                                icon={<IoChevronBackOutline size={34} />}
                                onClick={goBack}
                                className={`btn ${styles.navBtn}`}
                            />
                        </div> :
                        <div className={styles.navBox} style={{ justifyContent: 'flex-end', }}>
                            <Button
                                type="default"
                                shape='circle'
                                size='large'
                                icon={<IoClose size={34} />}
                                onClick={handleCancel}
                                className={`btn ${styles.navBtn}`}
                            />
                        </div>
                    }
                </ConfigProvider>
                {/* ^ Nav */}
                <div className={styles.contentBox}>
                    {!nextPageMode ? <BoothHomePage booth={booth} /> :
                        (ownerID !== "") ? <BoothOwnerInfoPage booth={booth} /> :
                            <BoothGoodsInfoPage booth={booth} />
                    }
                </div>
                {/* ^ 攤位頁面，根據狀態切成不同的頁面元件 */}

                {/* <div className={styles.navBox} style={{ justifyContent: 'flex-end', }} />
                <div className={styles.contentBox}>
                    <BoothHomePage booth={booth} />
                </div> */}
            </div>
        </div>
    );
}

export default Booth;