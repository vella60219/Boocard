// 攤位資訊頁面，從這裡可以點進去攤主的自我介紹頁面和品項頁面
import styles from './boothInfoPage.module.css';

import BoothGoodsItem from '../BoothGoodsItem';
import BoothOwnerItem from '../BoothOwnerItem';

function BoothInfoPage() {

    return (
        <div>
            <BoothGoodsItem />
            <BoothOwnerItem/>
        </div>
    );
}

export default BoothInfoPage;