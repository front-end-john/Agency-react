import React from 'react'

export default React.createClass({
    render: function(){
        return (
            <div className="section coupon-type">
                <div className="list-item">
                    <div className="djq">
                        <a href="html/cash.html">
                            <span>代金券</span>
                            <img src={require("../../images/coupon_1.png")} />
                        </a>   
                    </div>
                    <div className="zkq">
                        <a href="#">
                            <span>买赠券</span>
                            <img src={require("../../images/coupon_2.png")} />
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
});