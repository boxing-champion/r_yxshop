import React, {Component} from 'react'
import "./Identifying.styl"
import {reqTabs} from "../../api"
import {identIndex} from "../../store/actions"
import {connect} from "react-redux"
import Split from "../../components/Split/Split"
import IndentMain from "../../components/IndentMain/IndentMain"
import {withRouter} from "react-router-dom"

class Identifying extends Component {
    state = {
        tabs: []
    }

    async componentDidMount() {
        const tabs = await reqTabs()
        this.setState({
            tabs: tabs.data.data
        })
    }

    identIndex(index){
        this.props.identIndex(index)
    }

    render() {
        const currutIndex = this.props.currutIndex
        return (
            <div>
                <div className="m-hwrapper">
                    <header className="psc-g-hd">
                        <div className="psc-m-topbar">
                            <div className="psc-row">
                                <div className="psc-m-hamburger">
                                    <a href="/" className="psc-u-nav-link">
                                        <i className="iconfont u-icon icon-jia"></i>
                                    </a>
                                </div>
                                <div className="m-head-tab">
                                    <a href="javascript:;" className="item active">发现</a>
                                    <a href="javascript:;" className="item">甄选家</a>
                                </div>
                                <div className="psc-m-right">
                                    <a href="javascript:;" className="psc-u-nav-link psc-u-link-cart">
                                        <i className="iconfont c-icon icon-gouwuchekong"></i>
                                    </a>
                                    <a href="javascript:;" className="psc-u-nav-link psc-u-link-search" onClick={()=>this.props.history.push("/shopcart")}>
                                        <i className="iconfont s-icon icon-sousuo"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="m-main-tab">
                    <div className="u-scroll-wrapper">
                        {this.state.tabs.map((tab, index) => (
                            <a className={currutIndex === index ? "item active" : "item"} key={index} onClick={()=>this.identIndex(index)}>{tab.tabName}</a>
                        ))}
                    </div>
                </div>
                <Split/>
                <IndentMain/>
            </div>
        )
    }
}

export default withRouter(
    connect(
        state=>({currutIndex:state.identIndex}),{identIndex}
    )(Identifying)
)