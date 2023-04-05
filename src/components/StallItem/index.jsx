import styles from './StallItem.module.css'
import { Link } from 'react-router-dom';

function StallItem(stallinfo){ /* 攤位一覽的那個框框的模組 */
    return(
        <div>
            <Link to >
                <img
                    className={styles.image}
                    src = {stallinfo.image_src}
                    alt = {stallinfo.name}
                />
            </Link>
            <div>
                <img
                    className={styles.avatar}
                    src = {stallinfo.avatar_src}
                    alt = {stallinfo.name}
                />
                <p>{stallinfo.name}</p>
            </div>
        </div>
    )
}

export default StallItem;