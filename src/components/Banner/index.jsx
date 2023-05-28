import style from './banner.module.css'
import { Button } from 'antd';
import { useParams, Link } from "react-router-dom";

function HomeBanner1() {
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

function HomeBanner() {
    return (
        <div className={style.box}>

            <div className={style.textBox}>
                <img
                    className={style.logo}
                    src='./images/img_banner_logoL.svg'
                    alt='logo'
                />
                <h2 className={`h2 ${style.intro}`}>帶您在攤位的海洋中，掌握每個攤位的資訊，快速找到您喜愛的創作者的攤位與商品！</h2>
                <div className={style.btnBox}>
                    <div className={`borderBox borderBox3 ${style.freebtnBox}`}>
                        <Link

                            className={` h2 btn ${style.btn} ${style.freebtn}`}
                        >
                            免費註冊
                        </Link>
                    </div>
                    <Link

                        className={` h2 btn ${style.btn} ${style.howbtn}`}
                    >
                        如何使用
                    </Link>
                </div>
            </div>

            <div className={style.imgBox}>
                <img
                    className={style.bannerImg}
                    src='./images/img_banner_pic.svg'
                    alt='banner'
                />
            </div>

        </div>

    )
}


export { HomeBanner };