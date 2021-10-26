export interface IMenuList {
	children?: IMenuList[];
    title:string,
    path: string,
    icon?: string,
    roles?:[]
}

export const menuList:IMenuList[] = [
    {
        title: '首页',
        path: '/home',
        icon: "icon-ios",
    },
    {
        title: '关于',
        path: '/about',
        icon: "icon-ego-menu",
    },
    {
        title: '三木',
        path: '/sanmu',
        icon: "icon-message",
        children: [
            {
                title: '三木01',
                path: '/001',
            }
        ]
    }
]

