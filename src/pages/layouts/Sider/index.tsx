import React from "react";
import { Layout } from 'antd'
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { useSelector } from "react-redux";

const { Sider } = Layout

type IProps = {
  sidebarCollapsed: boolean;
  sidebarLogo: boolean
}

const LayoutSider = ({sidebarLogo}:IProps) => {
  const sidebarCollapsed = useSelector((state:any) =>  state.common.sidebarCollapsed)

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