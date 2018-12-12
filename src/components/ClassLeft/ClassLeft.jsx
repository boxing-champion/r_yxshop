import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {getIndex} from "../../store/actions"

class ClassLeft extends Component {
    getIndex = (index) => {
        console.log("--------index", index);
        this.props.getIndex(index)
    }

    //    `/classification?classId=${cate.id}`
    //    `/identifying/index#/tab=${index}`
    render() {
        let path = this.props.location.search.split("=")[1]

        const giveCate = this.props.giveCate
        const targetIndex = this.props.targetIndex
        return (
            <div className="m-cateNavVertWrap">
                <div className="middle">
                    <ul className="m-cateNavVert">
                        {giveCate.map((cate, index) => (
                            <li className={targetIndex === index ? "item active" : "item"} key={index} onClick={() => this.getIndex(index)}>
                                <a className="goto">{cate.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    giveCate: state.giveCate,
    targetIndex: state.getIndex
}), {getIndex})(ClassLeft))