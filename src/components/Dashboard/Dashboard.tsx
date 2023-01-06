import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.scss";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const history = useNavigate();

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#1677FF", padding: 0 },
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Shares",
                onClick: () => {
                  history("/admin/home");
                },
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
                onClick: () => {
                  history("/admin/home2");
                },
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
                onClick: () => {
                  history("/admin/hom");
                },
              },
            ]}
          />
        </ConfigProvider>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
