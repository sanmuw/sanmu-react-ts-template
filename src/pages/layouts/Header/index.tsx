import React from "react";
import { Layout, Dropdown, Avatar } from "antd"
import Icon from '@ant-design/icons';
import Hamburger from './components/Hamburger'
import './index.less'
const { Header  } = Layout

interface IProps {
  fixedHeader: boolean;
  sidebarCollapsed: boolean;
}

const LayHeader = ({ fixedHeader, sidebarCollapsed }: IProps) => {
  console.log('LayHeader',sidebarCollapsed)
  const computedStyle = () => {
    let styles:object;
    if(fixedHeader) {
      if(sidebarCollapsed) {
        styles = {
          width: "calc(100% - 80px)",
        }
      }else {
        styles = {
          width: "calc(100% - 200px)",
        }
      }
    }else {
      styles = {
        width: '100%',
      }
    }
    return styles
  }

  return (
    <Header
      style={computedStyle()}
      className={ fixedHeader ? 'fix-header' : ''}
    >
      <Hamburger/>
      <div className="right-menu">
        <div className="dropdown-wrap">
          <div>
            <Avatar shape="square" size="medium" src='' />
            <Icon style={{ color: "rgba(0,0,0,.3)" }} type="caret-down" />
          </div>
        </div>
      </div>
    </Header>
  )
}

export default LayHeader