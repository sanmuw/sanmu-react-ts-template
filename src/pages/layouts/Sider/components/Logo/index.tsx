import React from "react";
import logo from "./images/logo.svg"
import './index.less'

interface IProps {
  titleHide: boolean;
}

const Logo = ({ titleHide }:IProps) => {
  return (
    <div className={titleHide ? "sidebar-logo-container hide" : "sidebar-logo-container"}>
      <img src={logo} alt="logo" className="sidebar-logo"/>
       <h1 className="sidebar-title">三木大佐</h1>     
     </div>
  )
}

export default Logo