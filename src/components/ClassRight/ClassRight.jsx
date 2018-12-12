import React, {Component} from 'react'
import {connect} from "react-redux";

class ClassRight extends Component {
    render() {
        let up
        let down
        const {giveCate, targetIndex} = this.props
        if (giveCate.length > 0 && targetIndex < 4) {
            up = (<ul className="list">
                {giveCate[targetIndex].subCateList.map((cate, index) => (
                    <li className="cateItem" key={index}>
                        <a href="javascript:;" className="low">
                            <div className="up">
                                <img src={cate.bannerUrl} alt="sub"/>
                            </div>
                            <div className="down">{cate.name}</div>
                        </a>
                    </li>
                ))}
            </ul>)
        }
        if (giveCate.length > 0 && targetIndex >= 4) {
            down = (
                <div>
                    {giveCate[targetIndex].subCateList.map((cate, index) => (
                        <div className="cateList" key={index}>
                            <div className="hd" style={{
                                fontSize: "16px",
                                borderBottom: "1px solid #d9d9d9",
                                paddingBottom: ".11rem"
                            }}>{cate.name}</div>
                            <ul className="list">
                                {cate.categoryList.map((item, index) => (
                                    <li className="cateItem" key={index}>
                                        <a>
                                            <div className="cateImgWrapper">
                                                <img src={item.wapBannerUrl} alt="sup" className="cateImg"/>
                                            </div>
                                            <div className="name">{item.name}</div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )
        }
        return (
            <div className="m-subCateList">
                <div className="banner"></div>
                <div className="catelist">
                    {up}
                    {down}
                </div>

            </div>
        )
    }
}

export default connect(
    state => ({giveCate: state.giveCate, targetIndex: state.getIndex}), {}
)(ClassRight)