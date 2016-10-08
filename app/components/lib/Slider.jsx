import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
    render: function() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
        };
        return (
            <Slider {...settings}>
                <div className="swiper-slide">
                    <div className="image">
                        <img src={require('../../images/1.png')}/>
                    </div>
                    <div className="content">
                        <h1>餐饮代金券</h1>
                        <p>大牌餐厅5折起，更多优惠敬请期待</p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="imgae">
                        <img src={require('../../images/1.png')}/>
                    </div>
                    <div className="content">
                        <h1>餐饮代金券</h1>
                        <p>大牌餐厅5折起，更多优惠敬请期待</p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="imgae">
                        <img src={require('../../images/1.png')}/>
                    </div>
                    <div className="content">
                        <h1>餐饮代金券</h1>
                        <p>大牌餐厅5折起，更多优惠敬请期待</p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="imgae">
                        <img src={require('../../images/1.png')}/>
                    </div>
                    <div className="content">
                        <h1>餐饮代金券</h1>
                        <p>大牌餐厅5折起，更多优惠敬请期待</p>
                    </div>
                </div>
            </Slider>
        )
    }
});