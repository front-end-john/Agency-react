import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default class MyOrder extends React.Component {
    render() {        
        return (
            <div className="section">
                <div className="item">
                    <NavLink to="/order">
                        <div className="ui-box bd-b-1">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../images/myorder_icon.png')} />
                                </span>
                                <span className="text-gray">我的订单</span>
                            </div>
                            <div className="i2">
                                <span className="text-gray">查看全部订单</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="item bd-b-1">
                    <div className="ui-box">
                        <div className="i1">
                            <NavLink to="#" className="btn-group">
                                <div className="wallet-icon icon-h">
                                    <span className="number">1</span>
                                </div>
                                <div className="status text-gray">待付款</div>
                            </NavLink>
                        </div>
                        <div className="i1">
                            <NavLink to="#" className="btn-group">
                                <div className="wait-icon icon-h">
                                    <span className="number">2</span>
                                </div>
                                <div className="status text-gray">待使用</div>
                            </NavLink>
                        </div>
                        <div className="i2">  
                            <NavLink to="#" className="btn-group">  
                                <div className="solded-icon icon-h">
                                    <span className="number">18</span>
                                </div>
                                <div className="status text-gray">退款/售后</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}