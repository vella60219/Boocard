// 此元件為品項區塊的元件，應該會被包裝在 BoothGoodsItemList 元件裡
// 李雅淳覺得或許應該要有「大」、「小」兩種，可直接做兩個元件一起輸出，或是傳參數改變狀態
// 點擊元件會進到下一頁（BoothGoodsInfoPage），並將點擊的品項 ID 指定給 goodsID
import styles from './boothGoodsItem.module.css';
import { Button } from 'antd';

import { useDispatch } from 'react-redux';
import { setNextPageMode, setGoodsID } from '../../redux/modalSlice';

function BoothGoodsItem() {
    const id = 1;
    // ^ 測試用資料，此資料應該是 props
    const dispatch = useDispatch();
    const goGoods = () => {
        dispatch(setNextPageMode(true))
        dispatch(setGoodsID(id));
    }

    return (
        <Button type="default" onClick={goGoods}>
            商品詳細
        </Button>
    )
}

export default BoothGoodsItem;