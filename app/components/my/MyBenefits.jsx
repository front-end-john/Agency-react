import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default class MyBenefits extends React.Component{
    render() {
        return (
            <div className="section">
                <div className="h-1 bd-b-1"></div>
                <div className="item bd-b-1">
                    <NavLink to="#">
                        <div className="ui-box">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../images/integral_icon.png')} />
                                </span>
                                <span className="text-gray">积分商城</span>
                            </div>
                            <div className="i2">
                                <span className="text-gray">9积分限时秒杀</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}