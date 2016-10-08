/* 组件加载 */
import React from 'react'
import Footer from '../../common/footer.jsx'
import OrderList from '../../my/order/OrderList.jsx'
import NavLink from '../../lib/NavLink.jsx'

/* 样式文件加载 */
import '../../../css/common.css'
import '../../../css/style.css'
import '../../../css/html/myorder.css'

export default class Order extends React.Component{
    render() {
        return(
            <div>
                <div id="wrapper" className="info-wrap">
                    <div className="header">
                        <a href="javascript:history.back();" className="back"></a>
                        <NavLink to="/my" className="btn-icon me-icon"></NavLink>
                        <h1>我的订单</h1>
                    </div>
                    <div className="container">           
                        <div className="content"> 
                            <div className="h-1 bd-b-1"></div>
                            <div className="list">
                                <OrderList />
                            </div>
                        </div>            
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}