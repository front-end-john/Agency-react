import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="footer">
                <img src={require('../../images/logo.png')}/>
                <p>桔橙提供技术支持</p>
            </div>
        )
    }
});