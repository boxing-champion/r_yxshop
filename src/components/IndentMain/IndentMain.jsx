import React, {Component} from 'react'
import {connect} from "react-redux"
import {getManual, getTabDta} from "../../store/actions"

class IndentMain extends Component {
    componentDidMount() {
        this.props.getManual()
    }
    componentDidUpdate(){
        // this.props.getTabDta()
    }
    render() {
        let xx
        const {manual, tabDta, currutIndex} = this.props
        if (manual.length > 0) {
            let subs = []
            manual.forEach((indent) => {
                return subs.push(indent.topics)
            })
            let dd = subs.flat(Infinity)
            xx = (
                <div>
                    {dd.map((indent, index) => {
                        if (indent.type === 1) {
                            return <div className="m-tpls m-tpls-picker" key={index}>
                                <a href="javescript:;" className="u-flexbox">
                                    <div className="info">
                                        <div className="u-name">
                                            <span className="ava">
                                            <img src={indent.avatar}/>
                                            </span>
                                            <span>{indent.nickname}</span>
                                        </div>
                                        <div className="title">{indent.title}</div>
                                        <div className="desc">{indent.subTitle}</div>
                                        <div className="u-rcount">
                                            <i className="ico iconfont icon-yanjing"></i>
                                            <span>15.5k人看过</span>
                                        </div>
                                    </div>
                                    <div className="u-pic">
                                        <img src={indent.picUrl}/>
                                    </div>
                                </a>
                            </div>
                        }
                        if (indent.type === 0) {
                            return <div className="m-tpls m-tpls-rec" key={index}>
                                <a href="javescript:;">
                                    <div className="u-name">
                            <span className="ava">
                            <img src={indent.avatar}/>
                            </span>
                                        <span>{indent.nickname}</span>
                                    </div>
                                    <div className="title">{indent.title}</div>
                                    <div className="u-pic">
                                        <img src={indent.picUrl}/>
                                    </div>
                                    <div className="u-rcount">
                                        <i className="ico iconfont icon-yanjing"></i>
                                        <span>97.4k人看过</span>
                                    </div>
                                </a>
                            </div>
                        }
                        if (indent.type === 2) {
                            return <div className="m-tpls m-tpls-rec" key={index}>
                                <a href="javescript:;">
                                    <div className="u-name">
                            <span className="ava">
                            <img src="indent.avatar"/>
                            </span>
                                        <span>{indent.nickname}</span>
                                    </div>
                                    <div className="title">{indent.title}</div>
                                    <div className="u-pic">
                                        <img src={indent.picUrl}/></div>
                                    <div className="u-rcount">
                                        <i className="ico iconfont icon-yanjing"></i>
                                        <span>97.4k人看过</span>
                                    </div>
                                </a>
                            </div>
                        }
                    })}
                </div>
            )
        }
        return (
            <div>
                <div className="m-main">
                    <div className="m-main-content">

                        <div className="m-tpls-top">
                            <a href="javescript:;">
                                <div className="u-pic-top">
                                    <img
                                        src="https://yanxuan.nosdn.127.net/ae37d802ee1e675ca6cf03217c376615.jpg?imageView&quality=65&thumbnail=690y376"
                                        alt=""/>
                                </div>
                            </a>
                        </div>
                        {xx}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    manual: state.manual,
    tabDta: state.tabDta,
    currutIndex: state.identIndex
}), {getManual, getTabDta})(IndentMain)