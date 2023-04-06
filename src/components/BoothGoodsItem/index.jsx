import styles from './boothGoodsItem.module.css';

import { useDispatch } from 'react-redux';
import { setNextPageMode } from '../../redux/modalSlice';

import { Button } from 'antd';

function BoothGoodsItem() {
    const dispatch = useDispatch();
    const goNext = () => dispatch(setNextPageMode(true))

    return (

        <Button type="default" onClick={goNext}>
            商品詳細
        </Button>
    )
}

export default BoothGoodsItem;