// 攤位資訊頁面，從這裡可以點進去攤主的自我介紹頁面和品項頁面
import styles from './boothInfoPage.module.css';

import BoothGoodsItem from '../BoothGoodsItem';
import BoothOwnerItem from '../BoothOwnerItem';

function BoothInfoPage({ booth }) {

    return (
        <div>
            <p>攤位ID：{booth.id}</p>
            <div style={{ height: '500px' }} />
            {/* ^ 測試資料用 */}
            <BoothGoodsItem />
            <BoothOwnerItem />
        </div>
    );
}

export default BoothInfoPage;