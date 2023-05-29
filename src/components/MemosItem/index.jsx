import styles from "./memosItem.module.css"
import { MdArrowForwardIos } from "react-icons/md";

function MemosItem({ user }){
    return(
        <div  className={` ${styles.content}`}>
            <div className={`borderBox2 borderBox ${styles.borderbox}`}>
                <div className={` ${styles.box}`}>
                    <p className={`h3 ${styles.txv}`}>6</p>
                    <MdArrowForwardIos className={`h3 ${styles.arrow}`}/>
                </div>

            </div>
        </div>
    )
}

export default MemosItem;