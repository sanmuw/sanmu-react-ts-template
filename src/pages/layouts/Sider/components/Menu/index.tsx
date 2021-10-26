import React, { useCallback, useEffect, useState } from "react";
import { Menu as AntMenu } from 'antd'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from '@/utils/arr'
import { menuList } from "@/config/menuConfig";
import { CustomIcon } from "@/components/AntIcon";

import "./index.less";
import { IMenuList } from "@/config/menuConfig";

// 重新记录数组顺序


type MenuState = {
	collapsed: boolean
  openKey: []
}

const { SubMenu, Item } = AntMenu

const Menu = ({collapsed}:MenuState ) => {
	console.log('Menu',collapsed)
	const history = useHistory()

	const {location} = history

	// 菜单渲染
	const getMenuNodes = (menuList:IMenuList[]) => {
		return menuList.reduce((pre:any[],cur:IMenuList) => {
			if(!cur.children || !cur.children.length) {
				pre.push(
					<Item key={cur.path}>
						{cur.icon && <CustomIcon type={cur.icon}></CustomIcon>}
						<span>{cur.title}</span>
					</Item>
				)
			}else {
				pre.push(
					<SubMenu 
						key={cur.path}
						title={
							<span>
								{cur.icon && <CustomIcon type={cur.icon}></CustomIcon>}
								<span>{cur.title}</span>
							</span>
						}
					>
						{getMenuNodes(cur.children)}
					</SubMenu>
				)
			}
			return pre
		},[])
	}

	const selectPath = useCallback(
		(e) => {
			console.log(e.key)
			history.push(e.key)
		},
		[history],
	)


  return (
    <div className="sidebar-menu-container">
			<Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
						<AntMenu
							inlineCollapsed={collapsed}
							selectedKeys={[location.pathname]}
							mode="inline"
							theme="dark"
							onSelect={selectPath}
						>
							{...getMenuNodes(menuList)}
						</AntMenu>
			</Scrollbars>
    </div>
	)
}

export default Menu