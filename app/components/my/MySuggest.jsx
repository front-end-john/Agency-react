import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default class MySuggest extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="h-1 bd-b-1"></div>
                <div className="item bd-b-1">
                    <NavLink to="#">
                        <div className="ui-box">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../images/recommed_icon.png')} />
                                </span>
                                <span className="text-gray">今日推荐</span>
                            </div>
                            <div className="i2">
                                <span className="text-gray" style={{color: "#f29d76"}}>News</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="h-1"></div>
            </div>
        )
    }
}