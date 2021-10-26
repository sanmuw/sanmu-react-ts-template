import React, { useState } from "react";
import { Layout as AntLayout } from "antd"
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";

const Layout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
    const temClick =() => {
        setSidebarCollapsed(!sidebarCollapsed)
    }
    return (
        <AntLayout style={{minHeight: "100vh"}}>
            <Sider sidebarCollapsed={sidebarCollapsed} sidebarLogo={false}/>
            <AntLayout>
                <Header fixedHeader={false} sidebarCollapsed={sidebarCollapsed} onToggle={temClick}></Header>
                <Content></Content>
            </AntLayout>
        </AntLayout>
    )
}

export default Layout;