import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {}

    render() {
        if (manual.length > 0) {
            type0 = (
                <Split/>
            )
            type1 = (
                <div className="m-tpls m-tpls-rec">
                    <a href="javescript:;">
                        <div className="u-name">
                                        <span className="ava">
                                            <img src="indent.avatar"/>
                                        </span>
                            <span>55555555555</span>
                        </div>
                        <div className="title">66666666666</div>
                        <div className="u-pic">
                            <img
                                src="https://yanxuan.nosdn.127.net/7b8f18db78d572f036875a58529f6a16.jpg?imageView&quality=65&thumbnail=690y376"/>
                        </div>
                        <div className="u-rcount">
                            <i className="ico iconfont icon-yanjing"></i>
                            <span>97.4k人看过</span>
                        </div>
                    </a>
                </div>
            )
            type2 = (
                <div className="m-tpls m-tpls-rec">
                    <a href="javescript:;">
                        <div className="u-name">
                            <span className="ava">
                            <img src="indent.avatar"/>
                            </span>
                            <span>5555555</span>
                        </div>
                        <div className="title">6666666</div>
                        <div className="u-pic">
                            <img src="indent.picUrl"/></div>
                        <div className="u-rcount">
                            <i className="ico iconfont icon-yanjing"></i>
                            <span>97.4k人看过</span>
                        </div>
                    </a>
                </div>
            )
            xx = (
                <div>
                    {manual.map((item, index) => {
                        if (item.type === 1) {
                            return <div className="m-tpls m-tpls-picker" key={index}>
                                <a href="javescript:;" className="u-flexbox">
                                    <div className="info">
                                        <div className="u-name">
                                            <span className="ava">
                                            <img src="indent.avatar"/>
                                            </span>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="title">555555555555222222222222222</div>
                                        <div className="desc">66666666666</div>
                                        <div className="u-rcount">
                                            <i className="ico iconfont icon-yanjing"></i>
                                            <span>15.5k人看过</span>
                                        </div>
                                    </div>
                                    <div className="u-pic">
                                        <img
                                            src="https://yanxuan.nosdn.127.net/cfb757f7a433ca31fcd772476060ddbb.jpg?imageView&quality=65&thumbnail=272y272"/>
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

            </div>
        )
    }
}