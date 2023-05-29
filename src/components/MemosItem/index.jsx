import styles from "./memosItem.module.css"
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

function MemosItem({ user }){
    return(
        <div  className={` ${styles.content}`}>
            <div className={`borderBox2 borderBox ${styles.borderbox}`}>
                <Link to={'/user/memos/memosDetail'} 
                className={` ${styles.box}`}>
                    <p className={`h3 ${styles.txv}`}>6</p>
                    <MdArrowForwardIos className={`h3 ${styles.arrow}`}/>
                </Link>

            </div>
        </div>
    )
}

export default MemosItem;