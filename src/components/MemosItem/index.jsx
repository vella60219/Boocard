import styles from "./memosItem.module.css"
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

function MemosItem({ user }){
    return(
        <div  className={` ${styles.content}`}>
            <div className={`borderBox2 borderBox ${styles.borderbox}`}>
                <Link to={'/user/memos/memosDetail'} 
                className={` ${styles.box}`}>
                    <p className={`h2 ${styles.txv}`}>{user.join[0].act_name}</p>
                    <MdArrowForwardIos className={`h3 ${styles.arrow}`}/>
                </Link>
            </div>
        </div>
    )
}

export default MemosItem;