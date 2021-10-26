import React from "react";
import { Layout } from 'antd'
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const { Sider } = Layout

type IProps = {
  sidebarCollapsed: boolean;
  sidebarLogo: boolean
}

const LayoutSider = ({sidebarCollapsed,sidebarLogo}:IProps) => {
  console.log(sidebarCollapsed)
  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      trigger={null}
      style={{zIndex: 10}}
    >
      {!sidebarLogo && <Logo titleHide={sidebarCollapsed}/>}
      <Menu collapsed={sidebarCollapsed}/>
    </Sider>
  )
}

export default LayoutSider