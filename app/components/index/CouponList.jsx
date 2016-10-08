import React from 'react'

export default React.createClass({
    getInitialState: function(){
        return {length: 3}
    },
    render: function(){
        var lists = [
            {
                id: 1,
                url: '#',
                path: require("../../images/djq_1.jpg"),
            },{
                id: 2,
                url: '#',
                path: require("../../images/djq_2.jpg"),
            },{
                id: 3,
                url: '#',
                path: require("../../images/djq_3.jpg"),
            }
        ];
        return (
            <div className="section coupon-list">
                <h2>推荐榜</h2>
                <div className="list-item">
                    <ul className="item">
                        {
                            lists.map(function (list){
                                return (
                                    <li key={list.id}>
                                        <a href={list.url}>
                                            <img src={list.path} />
                                        </a> 
                                    </li> 
                                )
                            })
                                    
                        }               
                    </ul>
                </div>
            </div>
        )
    }
});