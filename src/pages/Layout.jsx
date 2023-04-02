// 版面配置
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter'

const { Header, Content, Footer } = Layout;

function PageLayout() {

    return (
        <Layout className='mainLayout'>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
                className='layoutHeader'
            >
                <MyNav/>
            </Header>
            <Content className='layoutContent'>
                {/* <div style={{height: '1000px',}}></div> */}
                {/* ^測試用 */}
                <Outlet/>
            </Content>
            <Footer className='layoutFooter'>
                <MyFooter/>
            </Footer>
        </Layout>
    );
}

export default PageLayout;