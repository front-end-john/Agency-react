import React from 'react'
import NavLink from '../../lib/NavLink.jsx'

export default class Info1 extends React.Component {
    render() {
        return (
            <div className="section bd-b-1">
                <div className="item">
                    <NavLink to="/username">
                        <div className="ui-box bd-b-1">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../../images/me_icon.png')} />
                                </span>
                                <span className="text-gray">John</span>
                            </div>
                            <div className="i2">
                                <span className="orange">修改</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to="/city">
                        <div className="ui-box bd-b-1">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../../images/city_icon.png')} />
                                </span>
                                <span className="text-gray">长住城市</span>
                            </div>
                            <div className="i2">
                                <span className="orange">添加</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to="/birthday">
                        <div className="ui-box">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../../images/birth_icon.png')} />
                                </span>
                                <span className="text-gray">生日</span>
                            </div>
                            <div className="i2">
                                <span className="orange">添加</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}