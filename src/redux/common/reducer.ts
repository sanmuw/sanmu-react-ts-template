import * as common from './constant'

interface ICommon {
    sidebarCollapsed: boolean
}

const inintial:ICommon = {
    sidebarCollapsed: false
}

const commonReducer = (state=inintial, action:{[key: string]: string}) => {
    switch (action.type) {
        case common.SIDEBAR_COLLAPSED:
            return {
                ...state,
                sidebarCollapsed: !state.sidebarCollapsed
            }
    
        default:
            return state
    }
}

export default commonReducer