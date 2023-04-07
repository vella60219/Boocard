import { FloatButton } from 'antd';
import Icon from '@ant-design/icons';


const BookmarkSvg = () => (
    <svg width="2em" height="3em" fill="#FFA1B8" viewBox="0 0 600 750" preserveAspectRatio="xMinYMax meet" >
        <path d="M 236 499 c -8 -12 -12 -28 -9 -35 c 3 -10 -3 -14 -20 -14 c -13 0 -29 -6 -34 -12 c -6 -7 -13 -77 -16 -156 c -7 -139 -6 -143 15 -151 c 14 -5 33 -1 56 11 c 47 23 79 23 120 -2 c 18 -11 38 -17 45 -13 c 7 4 -13 18 -48 34 c -59 26 -60 27 -95 9 c -19 -9 -45 -21 -57 -24 l -23 -7 l 0 138 c 0 95 4 143 12 151 c 15 15 204 17 213 1 c 4 -6 7 -67 6 -137 c -1 -70 3 -134 9 -142 c 7 -12 10 -8 10 16 c 0 38 7 46 30 34 c 33 -18 41 10 39 147 c -2 175 0 173 -134 173 c -94 0 -105 -2 -119 -21 Z m 222 -2 c 9 -6 12 -48 12 -153 c 0 -133 -1 -144 -17 -136 c -14 8 -16 26 -14 121 c 2 76 -1 117 -9 127 c -9 10 -37 14 -107 14 c -82 0 -94 2 -83 14 c 6 8 21 16 33 18 c 39 7 172 3 185 -5 Z" 
        fill="#FFA1B8"
        />
    </svg>
);

const BackToTopSvg = () => (
    <svg width="2em" height="2.5em" fill="#FFA1B8" viewBox="0 0 1200 1024" preserveAspectRatio="xMaxYMid meet">
        <path d="M 260 960 c 0 -39 13 -40 380 -40 c 367 0 380 1 380 40 c 0 39 -13 40 -380 40 c -367 0 -380 -1 -380 -40 Z"
        fill="#FFA1B8"
        />
        <path d="M 554 744 c -90 -92 -91 -104 -13 -104 l 61 0 l -4 -215 c -3 -206 -1 -215 39 -221 c 42 -7 43 0 43 215 l 0 221 l 60 0 c 78 0 76 17 -16 106 c -92 90 -80 90 -170 -2 Z"
        fill="#FFA1B8"
        />
    </svg>
);


const BackToTopIcon = (props) => <Icon component={BackToTopSvg} {...props} />;
const BookmarkIcon = (props) => <Icon component={BookmarkSvg} {...props} />;

function BackTop() {
    return (
        <div >
            <FloatButton.BackTop  icon={<BackToTopIcon/>} style={{ transform:[`rotate(180deg)`] }} visibilityHeight={0}/>
        </div>
    );
}

function FloatGrop() {
    return (
        
            <FloatButton.Group shape="circle" style={{ right: 24 }}>
                <FloatButton icon={<BookmarkIcon/>} />
                <FloatButton.BackTop icon={<BackToTopIcon/>} style={{ transform:[`rotate(180deg)`] }} visibilityHeight={0} />
            </FloatButton.Group>
        
    );
}

export default BackTop;
export {FloatGrop};