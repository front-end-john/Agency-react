/* 组件加载 */
import React from 'react'
import MyHeader from './MyHeader.jsx'
import Footer from '../common/footer.jsx'

import MyOrder from '../my/MyOrder.jsx'
import MyBenefits from '../my/MyBenefits.jsx'
import MySuggest from '../my/MySuggest.jsx'

/* 样式文件加载 */
import '../../css/common.css'
import '../../css/style.css'
import '../../css/html/myinfo.css'

export default class My extends React.Component {
    render() {
        return(
            <div>
                <div id="wrapper">
                    <div className="container">
                        <MyHeader />
                        <div className="content">
                            <div className="h-1 bd-b-1"></div>
                            <div className="list">
                                <MyOrder />
                                <MyBenefits />
                                <MySuggest />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                
            </div>
        )
    }
}