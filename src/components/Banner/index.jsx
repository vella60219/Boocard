import style from'./banner.module.css'
import { Button } from 'antd';

function HomeBanner(){
    return(
        <div className={style.H}>
            <div>
                <div >
                    <img
                        className={style.HImg}
                        src='./images/img_banner.png' 
                        alt='banner'
                    />            
                </div>


                <div className={style.Htxv}>
                    <img
                        className={style.HLogo}
                        src='./images/logo_H.png'
                        alt='logo'
                    />
                    <p className={style.Hxv_intro}>帶您在攤位的海洋中，掌握每個攤位的資訊，<br/> 快速找到您喜愛的創作者的攤位與商品！</p>
                    <div className={style.btn}>
                        <Button className={`${style.rgsbtn} `}>免費註冊</Button>
                        <Button className={style.howbtn}>如何使用</Button>
                    </div>
                </div>                
            </div>

        </div>
    )
}

function CommonBanner(event){
    console.log(event.id)
    return(
        <div>
            <img
                className={style.CImg}
                src={event.image}
                alt='banner'
            />
        </div>
    )
}

export {HomeBanner, CommonBanner};