import React, {Component} from 'react'
import ClassLeft from "../../components/ClassLeft/ClassLeft"
import ClassRight from "../../components/ClassRight/ClassRight"
import {connect} from "react-redux"
import "./ClassiFication.styl"
import "../../common/stylus/mixins.styl"
import {getCate, getId} from "../../store/actions"
import BScroll from "better-scroll"

class ClassiFication extends Component {
    componentDidMount() {
        this.props.getCate()
        new BScroll(".sw", {
            click: true
        })
    }

    render() {
        return (
            <div className="m-hdWraper">
                <div className="m-hd">
                    <div className="m-itemCateListHd">
                        <div className="m-topSearchIpt">
                            <i className="iconfont u-icon icon-sousuo"></i>
                            <span className="placeholder">搜索商品, 共19848款好物</span>
                        </div>
                    </div>
                </div>
                <ClassLeft/>
                <div style={{width:"100%",height:"100%"}} className="sw">
                    <ClassRight/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({giveCate: state.giveCate}), {getCate}
)(ClassiFication)