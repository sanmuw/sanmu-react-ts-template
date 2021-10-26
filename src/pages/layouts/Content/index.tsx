import React from "react";
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import routerList from '@/config/routeList'

const { Content } = Layout

const LayContent = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <Content style={{ height: "calc(100% - 100px)"}}>
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={500}
          classNames="fade"
          exit={false}
        >
          <Switch>
             {routerList.map((route) => (
                <Route
                  component={route.component}
                  key={route.path}
                  path={route.path}
                >
                </Route>
              ))}
              <Redirect exact from="/" to="/home">
            </Redirect>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  )
}

export default LayContent