import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Layouts(props) {

  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Sider >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to={'/'}>Home</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to={'/register'}>Register</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to={'/user'}>User</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          {props.children}

          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Layouts;
