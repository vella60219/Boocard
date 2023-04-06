// 品項頁面，功能是看商品詳細資訊和加入吃土單
// 會用 goodsID 從品項資料中查找對應的資料，再進行 render
import styles from './boothGoodsInfoPage.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectGoodsID } from '../../redux/modalSlice';

function BoothGoodsInfoPage() {
    const goodsID = useSelector(selectGoodsID);
    const dispatch = useDispatch();
    // ^ 加入吃土單可能會需要吧，先設好
    return (
        <div>
            <p>BoothGoodsInfoPage</p>
            <p>goodsID:{goodsID}</p>
        </div>
    );
}

export default BoothGoodsInfoPage;