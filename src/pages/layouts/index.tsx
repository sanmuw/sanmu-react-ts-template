import React, { useState } from "react";
import { Layout as AntLayout } from "antd"
import { useDispatch, useSelector } from 'react-redux'
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";

const Layout = () => {
    const sidebarCollapsed = useSelector((state:any) => state.sidebarCollapsed)
    return (
        <AntLayout style={{minHeight: "100vh"}}>
            <Sider sidebarCollapsed={sidebarCollapsed} sidebarLogo={false}/>
            <AntLayout>
                <Header fixedHeader={false} sidebarCollapsed={sidebarCollapsed}></Header>
                <Content></Content>
            </AntLayout>
        </AntLayout>
    )
}

export default Layout;