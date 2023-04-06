// 攤位item會先在此包裝上modal再加入list，此頁管理 modal 和管理 modal 的 page
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

import BoothInfoPage from '../BoothInfoPage';
import BoothOwnerInfoPage from '../BoothOwnerInfoPage';
import BoothGoodsInfoPage from '../BoothGoodsInfoPage';


function BoothInfoCard({ a }) {
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
    const showModal = () => setOpen(true);      // 給按鈕用來打開 modal
    const handleCancel = () => {                // 關掉 modal 用的，順便用 goBack 歸零
        setOpen(false);
        goBack();
    }



    return (
        <div>
            <Button type="text" onClick={showModal} style={{ width: 'auto', height: 'auto' }}>
                <div style={{ width: '100px', height: '100px', background: 'red' }} />
                {/* ^ 測試用 style 和 div，事實是這裡應該要放 StallItem */}
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
                <p>{a}</p>
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