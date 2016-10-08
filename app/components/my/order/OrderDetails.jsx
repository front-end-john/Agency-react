import React from 'react'
import NavLink from '../../lib/NavLink.jsx'
import Footer from '../../common/footer.jsx'

import '../../../css/html/orderdetails.css'

export default class OrderList extends React.Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div className="container">
                        <div className="header">
                            <a href="javascript:history.back();" className="back"></a>
                            <NavLink to="/my" className="btn-icon me-icon"></NavLink>
                            <h1>订单详情</h1>
                        </div>
                        <div className="content"> 
                            <div className="list">
                                <div className="section">
                                    <div className="item bd-t-1">
                                        <div className="ui-box bd-b-1">
                                            <div className="i1">
                                                <img src={require('../../../images/order_img.png')} />
                                            </div>
                                            <div className="i2">
                                                <div className="order-info">
                                                    <div className="order-title">【华夏五折专享】必胜客代金券</div>
                                                    <div className="use-coupon-info">200元必胜客代金券1张 可叠加</div>
                                                    <div className="order-price">&yen;180</div>
                                                </div>
                                            </div>
                                            <div className="i2">
                                                <span className="arrow"></span>
                                            </div>
                                        </div>
                                        <div className="ui-box other-info">
                                            <div className="i1">
                                               <span className="checked-icon"></span>
                                               <span>支持随时退款</span>
                                            </div>
                                            <div className="i1">
                                               <span className="checked-icon"></span>
                                               <span>支持过期退款</span>
                                            </div>
                                        </div>
                                        <div className="h-1 bd-t-1"></div>
                                    </div>
                                    <div className="item bd-t-1">
                                        <div className="ui-box bd-b-1">
                                            <div className="i1">
                                                <div className="coupon-name c1">代金券</div>
                                                <div className="expiry c1">有效期至：2015-12-31</div>
                                            </div>
                                        </div>
                                        <div className="ui-box">
                                            <div className="promo-code c2">优惠码：100192123322</div>
                                        </div>
                                        <div className="h-1 bd-t-1"></div>
                                    </div>
                                    <div className="item bd-t-1">
                                        <div className="ui-box bd-b-1">
                                            <div className="i1">
                                                <div className="c1">商家信息</div>
                                                <div className="store c2">必胜客  （科苑店）</div>
                                            </div>
                                        </div>
                                        <div className="ui-box">
                                            <div className="i1">
                                                <div className="c1">南山区深南大道与科技中三路交汇处汇景豪苑裙楼
                                                </div>
                                            </div>
                                            <div className="i2">
                                                <a href="#" className="tel">
                                                    <span className="tel-icon"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="h-1 bd-t-1"></div>
                                    </div>
                                    <div className="item bd-t-1">
                                        <div className="ui-box bd-b-1">
                                            <div className="i1">
                                                <div className="c1">购买商品</div>
                                            </div>
                                        </div>
                                        <div className="ui-box">
                                            <div className="i1">
                                                <div className="c2">必胜客代金券
                                                </div>
                                            </div>
                                            <div className="i1">
                                                <div className="c2">1张</div>
                                            </div>
                                            <div className="i2">
                                               <div className="c2">&yen;200</div>
                                            </div>
                                        </div>
                                        <div className="h-1 bd-t-1"></div>
                                    </div>
                                </div>
                                <div className="item bd-t-1">
                                    <div className="ui-box bd-b-1">
                                        <div className="i1">
                                            <div className="c1">订单信息</div>
                                        </div>
                                    </div>
                                    <div className="ui-box">
                                        <div className="more-info">
                                            <div className="c1">订单号：1977663468</div>
                                            <div className="c1">购买手机号：15818684835</div>
                                            <div className="c1">付款时间：2015-10-24    14:24</div>
                                            <div className="c1">数量：1</div>
                                            <div className="c1">总价：&yen;180</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}