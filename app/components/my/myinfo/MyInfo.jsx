/* 组件加载 */
import React from 'react'
import Footer from '../../common/footer.jsx'

import Info1 from './Info1.jsx'
import Info2 from './Info2.jsx'

/* 样式文件加载 */
import '../../../css/common.css'
import '../../../css/style.css'
import '../../../css/html/myinfo.css'
import '../../../css/html/infos.css'

export default class MyInfo extends React.Component{
    render() {
        return(
            <div>
                <div id="wrapper" className="info-wrap">
                    <div className="container">           
                        <div className="content"> 
                            <div className="h-1 bd-b-1"></div>
                            <div className="list">
                                <Info1 />
                                <Info2 />
                            </div>
                        </div>            
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}