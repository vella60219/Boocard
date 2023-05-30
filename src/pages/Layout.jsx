// 版面配置
import { Layout, ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';

import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter'
import Hamburger from '../components/Hamburger';

const { Header, Content, Footer } = Layout;

function PageLayout() {

    return (
        <Layout className='mainLayout'>
            <ConfigProvider theme={{
                token: {
                    colorText: '#1F2933',
                },
                components: {
                    Button: {
                        colorBgContainer: 'transparent'
                    },
                }
            }}>
                <Header className='layoutHeader'>
                    <Hamburger/>
                    <MyNav />
                </Header>
            </ConfigProvider>
            <Content className='layoutContent'>
                {/* <div style={{height: '1000px',}}></div> */}
                {/* ^測試用 */}
                <Outlet />
            </Content>
            <Footer className='layoutFooter'>
                <MyFooter />
            </Footer>
        </Layout>
    );
}

export default PageLayout;