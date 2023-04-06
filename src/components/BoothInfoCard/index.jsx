// 攤位item會先在此包裝上modal再加入list，此頁管理 modal 和管理 modal 的 page
import styles from './boothInfoCard.module.css';

import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNextPageMode, setNextPageMode } from '../../redux/modalSlice';

import BoothInfoPage from '../BoothInfoPage';
import BoothOwnerInfoPage from '../BoothOwnerInfoPage';
import BoothGoodsInfoPage from '../BoothGoodsInfoPage';

function BoothInfoCard({ a }) {
    // ^ 先隨便弄了一個 a 參數，下方只有一個 p 標籤用了他，證明資料有傳過來
    const nextPageMode = useSelector(selectNextPageMode);
    const dispatch = useDispatch();
    const goNext = () => dispatch(setNextPageMode(true));
    const goBack = () => dispatch(setNextPageMode(false));

    const [open, setOpen] = useState(false);
    const showModal = () => {
        dispatch(setNextPageMode(false));
        setOpen(true);

    }
    const handleCancel = () => {
        setOpen(false);
        goBack;
    }

    

    return (
        <div>
            <Button type="text" onClick={showModal} style={{ width: 'auto', height: 'auto' }}>
                <div style={{ width: '100px', height: '100px', background: 'red' }} />
            </Button>
            <Modal
                open={open}
                onCancel={handleCancel}
                closable={false}
                destroyOnClose={true}
                footer={null}
            >
                {nextPageMode ? <div style={{ height: '40px' }}><Button type="text" onClick={goBack}>
                    〈
                </Button></div> : <div style={{ height: '40px' }} />}
                <p>{a}</p>
                <div style={{ display: 'flex', flexDirection: 'column', height: 'auto', }}>
                    <BoothInfoPage />
                </div>
            </Modal>
        </div>
    );
}

export default BoothInfoCard;