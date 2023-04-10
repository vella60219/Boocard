import style from './banner.module.css'
import { Button } from 'antd';
import { useParams, Link } from "react-router-dom";

function HomeBanner() {
    return (
        <div className={style.H}>
            <img
                className={style.HImg}
                src='./images/img_banner-low.png'
                alt='banner'
            />

            <div className={style.Htxv}>
                <img
                    className={style.HLogo}
                    src='./images/logo_H.png'
                    alt='logo'
                />
                <h2 className={`h2 ${style.Hxv_intro}`}>帶您在攤位的海洋中，掌握每個攤位的資訊，<br /> 快速找到您喜愛的創作者的攤位與商品！</h2>
                <div className={style.btn}>
                    <Link

                        className={` h2 ${style.freebtn}`}
                    >
                        免費註冊
                    </Link>
                    <Link

                        className={` h2 ${style.howbtn}`}
                    >
                        如何使用
                    </Link>
                </div>
            </div>
        </div>

    )
}


export { HomeBanner };