import React from 'react'
import NavLink from '../../lib/NavLink.jsx'

export default class Info1 extends React.Component {
    render() {
        return (
            <div className="section bd-b-1">
                <div className="h-1 bd-b-1"></div>
                <div className="item">
                    <div className="ui-box bd-b-1">
                        <div className="i1">
                            <span className="text-gray">帐户安全等级</span>
                            <span className="danger">高</span>
                        </div>
                        <div className="i2">
                            <span className="text-gray">请设置下列项目保护帐号</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <NavLink to="/phone">
                        <div className="ui-box bd-b-1">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../../images/phone_icon.png')} />
                                </span>
                                <span className="text-gray">已绑定手机</span>
                                <span>136*********</span>
                            </div>
                            <div className="i2">
                                <span className="orange">绑定/更换</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to="/password">
                        <div className="ui-box">
                            <div className="i1">
                                <span className="icon">
                                    <img src={require('../../../images/psw_icon.png')} />
                                </span>
                                <span className="text-gray">登录密码</span>
                                <span className="danger">弱</span>
                            </div>
                            <div className="i2">
                                <span className="orange">修改</span>
                                <span className="arrow"></span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}