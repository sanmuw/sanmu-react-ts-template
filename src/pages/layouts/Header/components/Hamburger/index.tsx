import React, { useState } from "react";
import Icon,{ MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './index.less'
import { useDispatch } from "react-redux";

import {changeSiderbarCollage} from '@/redux/common/actions'

interface IProps {
  // onToggle:() => void
}

const Hamburger = () => {
  const [pos, setPos] = useState<boolean>(true)
  const dispatch = useDispatch()
  const changePos =() => {
    setPos(!pos)
    dispatch(changeSiderbarCollage())
  }

  return (
    <div className="hamburger-container" onClick={changePos}>
      {
        pos ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
      }
    </div>
  )  
}

export default Hamburger