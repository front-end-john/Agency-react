import React from 'react'
import NavLink from '../../lib/NavLink.jsx'

export default React.createClass({
    getInitialState: function(){
        return {length: 4}
    },
    render: function() {
        var orders = [
            {
                id: 1,
                name: '【华夏五折专享】利宝閣代金券',
                type: 'cash',
                title: '代金券',
                status: 'finished',
                text: '已完成',
                value: 100,
                expiry: '2016-05-01',
                quantity: 3,
                total: 90
            },{
                id: 2,
                name: '【农行五折专享】利宝閣折扣券',
                type: 'cash',
                title: '折扣券',
                status: 'refund',
                text: '退款中',
                value: 200,
                expiry: '2016-08-01',
                quantity: 3,
                total: 70
            },{
                id: 3,
                name: '【建行五折专享】利宝閣代金券',
                type: 'cash',
                status: 'paid',
                text: '待付款',
                title: '代金券',
                value: 50,
                expiry: '2016-9-01',
                quantity: 6,
                total: 190
            },{
                id: 4,
                name: '【兴业五折专享】利宝閣折扣券',
                type: 'discount',
                title: '折扣券',
                status: 'finished',
                text: '已完成',
                value: 30,
                expiry: '2016-10-01',
                quantity: 6,
                total: 660
            },
        ];       
        return (
            <div className="section">
                {
                    orders.map(function(order){
                        return (
                            <div className="item bd-t-1" key={order.id}>
                                <div className="ui-box bd-b-1">
                                    <div className="i1">{order.name}</div>
                                    <div className="i2">
                                        <div className="order-status">
                                            <div className="buy-btn btn-disabed btn-{order.status}">{order.text}</div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to="/orderdetails" className="ui-box">
                                    <div className="i1 coupon cash-conpon">
                                        <div className="coupon-type">
                                            <div className="coupon-title">
                                                {order.title}
                                            </div>
                                        </div>
                                        <div className="coupon-text">
                                            <div className="value-box">
                                                <div className="box-content">
                                                    <div className="coupon-value">
                                                        <span className="num">{order.value}</span>
                                                        <span className="yen">&yen;</span>
                                                    </div>
                                                    <div className="expiry">有效期至：{order.expiry}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="i1 value">
                                        <div className="quantity">数量：{order.quantity}</div>
                                        <div className="price">总价：{order.total}</div>                            
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="a-status">申请退款</NavLink>
                                <div className="h-1 bd-t-1"></div>
                            </div>  
                        )
                    }) 
                }              
            </div>
        )
    }
})