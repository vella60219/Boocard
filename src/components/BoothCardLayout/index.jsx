// StallItem會先在此包裝上modal再加入list，此頁管理 modal 和管理 modal 的 page
import styles from './boothCardLayout.module.css';
import { Button, Modal, ConfigProvider, Skeleton, Space } from 'antd';
import { IoClose, IoChevronBackOutline } from "react-icons/io5";
import { useRef, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectNextPageMode, setNextPageMode,
    selectOwnerID, setOwnerID,
    selectGoodsID, setGoodsID
} from '../../redux/modalSlice';

import StallItem from '../StallItem';
import BoothHomePage from '../BoothHome';
import BoothOwnerInfoPage from '../BoothOwnerInfoPage';
import BoothGoodsInfoPage from '../BoothGoodsInfoPage';


function BoothCardLayout({ booth }) {
    // ^ 先隨便弄了一個 a 參數，下方只有一個 p 標籤用了他，證明資料有傳過來
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

    const scrollPositionRef = useRef(null);

    const [open, setOpen] = useState(false);    // 用於控制 modal 使否開啟
    const showModal = () => {      // 給按鈕用來打開 modal
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        // scrollPositionRef.current = window.pageYOffset;
        document.body.classList.add('modal-open');
        // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
        setOpen(true);
    }
    const handleCancel = () => {                // 關掉 modal 用的，順便用 goBack 歸零
        // document.body.style.overflowX = 'scroll'
        setOpen(false);
        goBack();
        document.body.classList.remove('modal-open');
        // if (scrollPositionRef.current !== null) {
        //     window.scrollTo(0, scrollPositionRef.current);
        //     scrollPositionRef.current = null;
        // }
        document.body.style.position = 'absolute'
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'auto'
        // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
    }

    // document.body.style.position = 'absolute'
    // document.body.style.overflow = 'visible'
    // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
    // ^ 總之就是在有開跟沒開 modal 的狀態間切換成需要的狀態


    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     // 模拟图片加载
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);

    // ^ Skeleton 用的

    return (
        <div className={styles.box}>
            {/* {loading ? (
                <>
                    <Space wrap direction="vertical">
                        <Skeleton.Image active />
                        <Skeleton
                            active
                            // avatar

                            paragraph={{
                                rows: 2,
                            }}
                        />
                    </Space>
                </>
            ) : (<> */}
                <Button type="link" onClick={showModal} className={styles.cardBox}>
                    {/* <div style={{ width: '100px', height: '100px', background: 'red' }} /> */}
                    {/* ^ 測試用 style 和 div，事實是這裡應該要放 StallItem */}
                    <StallItem stall={booth} />
                </Button>
                <Modal
                    open={open}
                    onCancel={handleCancel}
                    closable={false}
                    destroyOnClose={true}
                    footer={null}
                    width={700}
                    bodyStyle={{ margin: "-20px -24px" }}
                >
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
                </Modal>
            {/* </>
            )} */}
        </div>
    );
}

export default BoothCardLayout;