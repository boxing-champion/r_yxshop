import React, {Component} from 'react'
import "./ShopCart.styl"
import {withRouter} from "react-router-dom"

class ShopCart extends Component {

    render() {
        return (
            <div className="xxx">
                <div className="middle">
                    <header className="header">
                        <span className="title">购物车</span>
                        <span className="right">
          <a href="javascript:;">领券</a>
        </span>
                    </header>
                </div>
                <div className="content">
                    <ul className="m-servicePolicy">
                        <li>
                            <i className="iconfont u-icon icon-yuanquanweixuanfuben"></i>
                            <span className="txt">30天无忧退货</span>
                        </li>
                        <li>
                            <i className="iconfont u-icon icon-yuanquanweixuanfuben"></i>
                            <span className="txt">48小时快速退款</span>
                        </li>
                        <li>
                            <i className="iconfont u-icon icon-yuanquanweixuanfuben"></i>
                            <span className="txt">满88元免邮费</span>
                        </li>
                    </ul>
                    <div className="m-defaultPage">
                        <div className="container">
                            <div className="img">
                                <img
                                    src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"
                                    alt=""/>
                            </div>
                            <div className="down">
                                <span className="one">去添加点什么吧</span>
                                <span className="two" onClick={()=>this.props.history.push("/profile")}>登陆</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ShopCart)