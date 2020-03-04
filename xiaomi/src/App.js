import React from 'react';
import {Switch,Route,NavLink,Redirect} from "react-router-dom";
import './App.scss';
import routes from "./routes/index";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
        {
          routes.map((item)=>{
            return <Route path={item.path} component={item.component} />
          })
        }
        <Redirect from="/" to="/home" exact />
        <Redirect to="/404" />
        </Switch>
      </main>
      
      <nav>
        <NavLink to="/home"><i className="iconfont icon-shouye"></i>首页</NavLink>
        <NavLink to="/classify"><i className="iconfont icon-2"></i>分类</NavLink>
        <NavLink to="/star"><i className="iconfont icon-xingqiu"></i>星球</NavLink>
        <NavLink to="/cart"><i className="iconfont icon-gouwuche"></i>购物车</NavLink>
        <NavLink to="/user"><i className="iconfont icon-wode"></i>我的</NavLink>
      </nav>
      
    </div>
  );
}

export default App;
