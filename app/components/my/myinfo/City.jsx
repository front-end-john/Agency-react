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
                                            <span className="text-gray">所在省：</span>
                                        </div>   
                                        <div className="i1">
                                            <select name="" id="" className="width100">
                                                <option value="0">广东</option>
                                                <option value="1">广西</option>
                                                <option value="2">云南</option>
                                            </select>
                                        </div>                          
                                    </div>
                                </div>
                            </div>
                            <div className="section bd-b-1">
                                <div className="h-1 bd-b-1"></div>
                                <div className="item">
                                    <div className="ui-box">
                                        <div className="i2">
                                            <span className="text-gray">所在市：</span>
                                        </div>        
                                        <div className="i1">
                                            <select name="" id="" className="width100">
                                                <option value="0">广州</option>
                                                <option value="1">深圳</option>
                                                <option value="2">佛山</option>
                                            </select>
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