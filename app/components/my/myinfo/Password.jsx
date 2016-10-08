import React from 'react'
import Footer from '../../common/footer.jsx'

export default React.createClass({
  render() {
    return (
        <div>
           <div id="wrapper" className="info-wrap">
                <div className="container">           
                    <div className="content"> 
                        <div className="h-1 bd-b-1"></div>
                        <div className="list">
                            <div className="section bd-b-1">
                                <div className="item">
                                    <div className="ui-box">
                                        <div className="i2">
                                            <span className="text-gray">原始密码：</span>
                                        </div>   
                                        <div className="i1">
                                            <input type="text" className="width100" />
                                        </div>                             
                                    </div>
                                </div>                        
                            </div>   
                            <div className="section bd-b-1">
                                <div className="h-1"></div>
                                <div className="item">
                                    <div className="ui-box">
                                        <div className="i2">
                                            <span className="text-gray">新设密码：</span>
                                        </div>  
                                        <div className="i1">
                                            <input type="text" className="width100" />
                                        </div>                                 
                                    </div>
                                </div>                        
                            </div>   
                            <div className="section bd-b-1">
                                <div className="h-1"></div>
                                <div className="item">
                                    <div className="ui-box">
                                        <div className="i2">
                                            <span className="text-gray">重复密码：</span>
                                        </div>      
                                        <div className="i1">
                                            <input type="text" className="width100" />
                                        </div>                             
                                    </div>
                                </div>                        
                            </div>  
                            <div className="foot">                        
                                <button className="btn btn-confirm">确认</button>
                                <button className="btn btn-cancel">取消</button>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
            <Footer />
        </div>
    )
  }
})