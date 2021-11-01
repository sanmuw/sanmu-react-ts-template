import React, { useState } from "react";
import Icon,{ MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './index.less'

interface IProps {
  onToggle:() => void
}

const Hamburger = ({onToggle}:IProps) => {
  const [pos, setPos] = useState<boolean>(true)
  const changePos =() => {
    onToggle()
    setPos(!pos)
  }

  return (
    <div className="hamburger-container">
      {
        pos ? <MenuFoldOutlined onClick={changePos}/> : <MenuUnfoldOutlined onClick={changePos}/>
      }
    </div>
  )  
}

export default Hamburger