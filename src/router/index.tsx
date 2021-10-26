import React from "react";
import { HashRouter, Switch, Route,Redirect } from 'react-router-dom'
import Login from '@/pages/login'
import Layout from '@/pages/layouts'

type IProps = {
  token: string
}

const Router = ({token}:IProps) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route 
          path='/'
          render={()=> {
            if(token){
              return <Redirect to="/login"/>
            }else{
              return <Layout/>
            }
          }}
          />
      </Switch>
    </HashRouter>
  )
}

export default Router