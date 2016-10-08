import React from 'react'
import { Link } from 'react-router'

import Header from '../common/header.jsx'
import Slider from '../lib/Slider.jsx'
import Footer from '../common/footer.jsx'
import Menu from './Menu.jsx'
import CouponType from './CouponType.jsx'
import CouponList from './CouponList.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div className="container">
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
                </div>
                <Footer />
            </div>
        )
    } 
});