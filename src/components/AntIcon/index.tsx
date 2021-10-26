import React from "react";
import { createFromIconfontCN } from '@ant-design/icons'

interface IProps {
  type: string
}

const CustomIconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1786521_ko3zkwnpgq.js'
})

export const CustomIcon = ({type}:IProps) => {
  return (
    <CustomIconFont type={type}/>
  )
}