import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default class MyHeader extends React.Component{
    render() {
        var myStyle = {
            height: "1.7rem",
            backgroundColor: "#fff"
        };
        return (
            <div className="header">
                <div className="my-header">
                    <NavLink to="/myinfo" className="item">
                        <div className="ui-box">
                            <div className="i1 text-left">
                                <img src={require('../../images/image.jpg')} className="avatar" />
                                <span className="username">聚诚优品</span>
                            </div>
                            <div className="i2">
                                <span className="arrow-2"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="bd-b-1" style={myStyle}></div>
            </div>
        )        
    }
}