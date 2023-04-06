// 此元件為攤主區塊的元件，應該會被包裝在 BoothOwnerItemList 元件裡
// 預定會有放在上面的「大」、放在下面的「小」兩種，可直接做兩個元件一起輸出，或是傳參數改變狀態
// 點擊「小」元件或「大」元件自我介紹的「查看更多」按鈕，
// 會進到下一頁（BoothOwnerInfoPage），並將點擊的攤主 ID 指定給 ownerID
import styles from './boothOwnerItem.module.css';
import { Button } from 'antd';

import { useDispatch } from 'react-redux';
import { setNextPageMode, setOwnerID } from '../../redux/modalSlice';

function BoothOwnerItem() {
    const id = 2;
    // ^ 測試用資料，此資料應該是 props
    const dispatch = useDispatch();
    const goOwner = () => {
        dispatch(setNextPageMode(true))
        dispatch(setOwnerID(id));
    }

    return (
        <Button type="default" onClick={goOwner}>
            攤主
        </Button>
    )
}

export default BoothOwnerItem;