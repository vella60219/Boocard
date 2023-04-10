// StallItem會先在此包裝上modal再加入list，此頁管理 modal 和管理 modal 的 page
import styles from './boothInfoCard.module.css';
import { Button, Modal } from 'antd';
import { LeftOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectNextPageMode, setNextPageMode,
    selectOwnerID, setOwnerID,
    selectGoodsID, setGoodsID
} from '../../redux/modalSlice';

import StallItem from '../StallItem';

import BoothInfoPage from '../BoothInfoPage';
import BoothOwnerInfoPage from '../BoothOwnerInfoPage';
import BoothGoodsInfoPage from '../BoothGoodsInfoPage';


function BoothInfoCard({ booth }) {
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
        document.body.style.position = 'absolute'
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'auto'
        // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
    }

    document.body.style.position = 'absolute'
    document.body.style.overflow = 'visible'
    // ^ 解決為了解決滾動條造成排版問題導致的打開 modal 網頁會跑到最頂部的問題
    // ^ 總之就是在有開跟沒開 modal 的狀態間切換成需要的狀態
    
    return (
        <div className={styles.box}>
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
            >
                {nextPageMode ?
                    <div className={styles.navBox}>
                        <Button
                            type="default"
                            shape='circle'
                            icon={<LeftOutlined />}
                            onClick={goBack}
                        />
                    </div> :
                    <div className={styles.navBox} style={{ justifyContent: 'flex-end', }}>
                        <Button
                            type="default"
                            shape='circle'
                            icon={<CloseOutlined />}
                            onClick={handleCancel}
                        />
                    </div>
                }
                {/* ^ Nav */}
                <p>攤位ID：{booth.id}</p>
                <div style={{ height: '500px' }} />
                {/* ^ 測試資料用 */}
                <div className={styles.contentBox}>
                    {!nextPageMode ? <BoothInfoPage /> :
                        (ownerID !== "") ? <BoothOwnerInfoPage /> :
                            <BoothGoodsInfoPage />
                    }
                </div>
                {/* ^ 攤位頁面，根據狀態切成不同的頁面元件 */}
            </Modal>
        </div>
    );
}

export default BoothInfoCard;