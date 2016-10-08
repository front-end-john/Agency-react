var data = require('data');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import Slider from './components/lib/Slider.jsx'
import Menu from './components/index/Menu.jsx'
import CouponType from './components/index/CouponType.jsx'
import CouponList from './components/index/CouponList.jsx'

import My from './components/my/My.jsx'

/* 样式文件加载 */
import './lib/slick-carousel/slick/slick.css'
import './lib/slick-carousel/slick/slick-theme.css'

import './css/common.css'
import './css/style.css'
import './css/index.css'

render(
    <div>
        <div id="wrapper">
            <Header />
            <div className="content">
                <div className="swiper-container">
                    <Slider />
                </div>
                <div className="list">
                    <Menu />
                    <CouponType />
                    <CouponList />
                </div>
            </div>
        </div>
        <Footer />
    </div>, 
    document.getElementById('app')
)