import styles from './rightTopButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginMode, setLoginMode } from '../../redux/loginSlice';
import { Button } from 'antd';

function RightTopButton() {
    const LoginMode = useSelector(selectLoginMode);
    const buttonText = LoginMode ? 'logout' : 'login';
    const dispatch = useDispatch();
    const toggleLogin = () =>{
        dispatch(setLoginMode(!LoginMode))
    }

    return (
        <div className='btn'>
            <Button  onClick={toggleLogin}>
                {buttonText}
            </Button>
        </div>
    );
}

export default RightTopButton;