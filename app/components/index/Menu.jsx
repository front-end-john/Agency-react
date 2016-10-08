import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
    getInitialState: function(){
        return {length: 4}
    },
    render: function(){
        var items = [
            {
                id: 1,
                url: '#',
                path: require("../../images/deals_icon.png"),
                text: '特惠'
            },{
                id: 2,
                url: '#',
                path: require("../../images/time_icon.png"),
                text: '不定时优惠'
            },{
                id: 3,
                url: '#',
                path: require("../../images/business_icon.png"),
                text: '商家'
            },{
                id: 4,
                url: '/my',
                path: require("../../images/my_icon.png"),
                text: '我的'
            }
        ];
        return (
            <div className="section menu index-menu">
                <ul>
                    {
                        items.map(function (item){
                            return (
                                <li key={item.id}>
                                    <div className="dummy"></div>
                                    <NavLink to={item.url} className="menu-item">
                                        <span>
                                            <p><img src={item.path} /></p>
                                            <p>{item.text}</p>
                                        </span>
                                    </NavLink>
                                </li>
                            )
                        })                                   
                    }                                             
                </ul>
                <div className="clear"></div>
            </div>
        )
    }
});