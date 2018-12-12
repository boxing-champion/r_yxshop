import React, {Component} from 'react'
import "./footGuide.styl"
import {withRouter} from 'react-router-dom'
class FootGuide extends Component {
    handC=(path)=>{
        this.props.history.replace(path)
    }
    render() {
        const path = this.props.location.pathname
        return (
            <div>
                <footer className="footer_guide border-1px">
                    <a href="javascript:;" className={path === "/homepage" ? "guide_item on" : "guide_item"} onClick={()=>this.handC("/homepage")}>
                      <span className="item_icon">
                        <i className="iconfont icon-1212"></i>
                      </span>
                        <span>首页</span>
                    </a>
                    <a href="javascript:;"
                       className={path === "/classification" ? "guide_item on" : "guide_item"} onClick={()=>this.handC("/classification")}>
                      <span className=" item_icon">
                        <i className="iconfont icon-fenleigongnengleimu"></i>
                      </span>
                        <span>分类</span>
                    </a>

                    <a href="javascript:;" className={path === "/identifying" ? "guide_item on" : "guide_item"} onClick={()=>this.handC("/identifying")}>
                    <span className=" item_icon">
                        <i className="iconfont icon-find"></i>
                    </span>
                        <span>识物</span>
                    </a>

                    <a href="javascript:;" className={path === "/shopcart" ? "guide_item on" : "guide_item"} onClick={()=>this.handC("/shopcart")}>
                        <span className="item_icon">
                            <i className="iconfont icon-gouwuchekong"></i>
                         </span>
                        <span>购物车</span>
                    </a>

                    <a href="javascript:;" className={path === "/profile" ? "guide_item on" : "guide_item"} onClick={()=>this.handC("/profile")}>
                        <span className="item_icon">
                            <i className="iconfont icon-geren"></i>
                        </span>
                        <span>个人</span>
                    </a>
                </footer>
            </div>
        )
    }
}

export default withRouter(FootGuide)