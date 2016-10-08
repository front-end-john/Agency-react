var data = require('data');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import App from './components/index/App.jsx'
import My from './components/my/My.jsx'

import MyInfo from './components/my/myinfo/MyInfo.jsx'
import UserName from './components/my/myinfo/UserName.jsx'
import City from './components/my/myinfo/City.jsx'
import Birthday from './components/my/myinfo/Birthday.jsx'
import Phone from './components/my/myinfo/Phone.jsx'
import Password from './components/my/myinfo/Password.jsx'

import Order from './components/my/order/Order.jsx'
import OrderDetails from './components/my/order/OrderDetails.jsx'



/* 样式文件加载 */
import './lib/slick-carousel/slick/slick.css'
import './lib/slick-carousel/slick/slick-theme.css'

import './css/common.css'
import './css/style.css'
import './css/index.css'

render((
    <Router history={browserHistory}>    
        <Route path="/" component={App}/>  
        <Route path="/my" component={My}/>
        <Route path="/myinfo" component={MyInfo}/>
        <Route path="/username" component={UserName}/>
        <Route path="/city" component={City}/>
        <Route path="/birthday" component={Birthday}/>
        <Route path="/phone" component={Phone}/>
        <Route path="/password" component={Password}/>
        <Route path="/order" component={Order}/>
        
    </Router>
    ), document.getElementById('app')
)