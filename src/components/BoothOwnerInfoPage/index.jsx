// 攤主的自我介紹頁面
// 會用 ownerID 從攤主資料中查找對應的資料，再進行 render
import styles from './boothOwnerInfoPage.module.css';

import { useSelector } from 'react-redux';
import { selectOwnerID } from '../../redux/modalSlice';

function BoothOwnerInfoPage({ booth }) {
    const ownerID = useSelector(selectOwnerID);
    return (
        <div>
            <p>BoothOwnerInfoPage</p>
            <p>ownerID:{ownerID}</p>
        </div>
    );
}

export default BoothOwnerInfoPage;