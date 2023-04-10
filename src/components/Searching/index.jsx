import { Input, Row, Col, Button, Tag } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import style from './searching.module.css'

function Searching() {
    return (
        <div className={`container ${style.container}`}>
            <Row justify="center" gutter={[24, 24]} className={style.box}>
                <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 20 }}
                >
                    <h2 className={`h1 ${style.title}`}>從喜歡的關鍵字開始搜尋活動看看吧</h2>
                </Col>
                <Col
                    xs={{ span: 22 }}
                    sm={{ span: 22 }}
                    lg={{ span: 20 }}
                >
                    <div className={style.upsection}>
                        <Input placeholder="輸入關鍵字" size="large" className={style.input} />
                        <Link
                            className={` h3 ${style.searchbtn}`}
                        >
                            搜尋 <AiOutlineSearch className={style.searchBtn} />
                        </Link>
                    </div>

                </Col>
                <Col span={20}>
                    <Row gutter={[10, 30]} justify="center">
                        <Col
                        // xs={{ span: 20 }}
                        // sm={{ span: 8 }}
                        // lg={{ span: 8 }}
                        >
                            <div className={style.HotTxv}>
                                <span className={`h3 ${style.txv}`}>#人氣搜尋關鍵字</span>
                            </div>
                        </Col>
                        <Col
                        // xs={{ span: 20 }}
                        // sm={{ span: 12 }}
                        // lg={{ span: 12 }}
                        >
                            <div className={style.downsection}>
                                <Tag color="#0495FF" className={style.HotTag}> ornare</Tag>
                                <Tag color="#0495FF" className={style.HotTag}> tempus</Tag>
                                <Tag color="#0495FF" className={style.HotTag}> condimentum </Tag>
                                <Tag color="#0495FF" className={style.HotTag}> Morbi  re</Tag>
                            </div>


                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

function SearchingEmpty() {
    return (
        <>
            <Row justify="center" gutter={[24, 24]} className={style.box}>

                <Col
                    xs={{ span: 22 }}
                    sm={{ span: 22 }}
                    lg={{ span: 20 }}
                >
                    <div className={style.upsection}>
                        <Input placeholder="輸入關鍵字" size="large" className={`${style.input} h3`} />
                        <Link
                            className={`h3 ${style.searchbtn}`}
                        >
                            搜尋 <AiOutlineSearch className={style.searchBtn} />
                        </Link>
                    </div>

                </Col>
                <Col span={20}>
                    <Row gutter={[10, 30]} justify="center">
                        <Col
                        // span=
                        // xs={{ span: 20 }}
                        // sm={{ span: 7 }}
                        // lg={{ span: 5 }}
                        >
                            <div className={style.HotTxv}>
                                <span className={`h3 ${style.txv}`}>#人氣搜尋關鍵字</span>
                            </div>
                        </Col>
                        <Col
                        // xs={{ span: 20 }}
                        // sm={{ span: 16 }}
                        // lg={{ span: 12 }}
                        >
                            <div className={style.downsection}>
                                <Tag color="#0495FF" className={style.HotTag}> ornare</Tag>
                                <Tag color="#0495FF" className={style.HotTag}> tempus</Tag>
                                <Tag color="#0495FF" className={style.HotTag}> condimentum </Tag>
                                <Tag color="#0495FF" className={style.HotTag}> Morbi  re</Tag>
                            </div>


                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}


export default Searching;
export { SearchingEmpty };
