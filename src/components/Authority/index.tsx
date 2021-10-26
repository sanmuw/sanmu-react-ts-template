import { createBrowserHistory } from 'history'
import React, {FC} from 'react'

const Authority:FC = (children) => {

  const history = createBrowserHistory()

  // if(localStorage) {
  //   history.push('/user/login')
  // }

  return <>{children}</>
}

export default Authority;