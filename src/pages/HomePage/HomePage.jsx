import React, {Component} from 'react'
import "./HomePage.styl"
import Swiper from "swiper"
import BScroll from "better-scroll"
import {reqFocusList, reqCategoryHotSellModule, reqPolicyDescList, reqKingKongModule, reqBigPromotion} from "../../api"
import 'swiper/dist/css/swiper.min.css'
import Split from "../../components/Split/Split"

export default class HomePage extends Component {
    state = {
        focusList: [],
        categoryHotSellModule: [],
        policy: [],
        king: [],
        big: "",
        up: [],
        down: [],
        curIndex: 0
    }

    async componentDidMount() {
        const focusResult = await reqFocusList()//轮播图
        const cate = await reqCategoryHotSellModule()//头部导航  类目
        const policy = await reqPolicyDescList()//三个low
        const king = await reqKingKongModule()//十个导航
        const promon = await reqBigPromotion()//大的动图以及下面的小图

        this.setState({
            focusList: focusResult.data,
            categoryHotSellModule: cate.data.categoryList,
            policy: policy.data,
            king: king.data.kingKongList,
            big: promon.data.bigPromotionList[0].data.contents[0].picUrl,
            up: promon.data.bigPromotionList[1].data.contents,
            down: promon.data.bigPromotionList[2].data.contents
        })
        new Swiper(".swiper-container", {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                dynamicMainBullets: 1
            },
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }
        })
        const liW = Array.from(this.refs.ul.childNodes).map((xx) => {return xx.clientWidth}).reduce((a, b) => {return a + b})
        this.refs.ul.style.width = liW + "px"
        new BScroll(".inner", {
            click: true, scrollX: true
        })
    }

    change = (curIndex) => {
        this.setState({
            curIndex: curIndex
        })
    }

    render() {
        let one, two, three, four, five
        let up = this.state.up
        let down = this.state.down
        if (up.length > 0 && down.length > 0) {
            one = (<img src={up[0].picUrl} alt="one"/>)
            two = (<img src={up[1].picUrl} alt="two"/>)
            three = (<img src={up[2].picUrl} alt="three"/>)
            four = (<img src={down[0].picUrl} alt="four"/>)
            five = (<img src={down[1].picUrl} alt="five"/>)
        }
        return (
            <div style={{width: "100%", height: "100%"}}>
                <header className="m-indexHd">
                    <div className="line">
                        <a className="logo" href="/"></a>
                        <div className="m-topSearchIpt ipt">
                            <i className="icon"></i>
                            <span className="placeholder">搜索商品, 共19919款好物</span>
                        </div>
                        <div className="loginBtn">登录</div>
                    </div>
                    <div className="tabWrap">
                        <div className="m-tabs">
                            <div className="inner"
                                 style={{position: "relative", height: "100%", width: "100%", overflow: "hidden"}}>
                                <div className="list" ref="ul">
                                    {this.state.categoryHotSellModule.map((cate, index) => (
                                        <div className={this.state.curIndex === index ? "tab active" : "tab"} key={index} onClick={() => {
                                            this.change(index)
                                        }}>
                                            <span className="txt">{cate.extra.operationResource.categoryName}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jiantou">
                        <i></i>
                    </div>
                </header>
                <div className="wrap">
                    <div className="middle">
                        <Split/>
                        <div className="wrap-content">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {this.state.focusList.map((focus, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <img style={{width: "100%", height: "100%"}} src={focus.picUrl} alt="pic"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                            <div className="m-indexServicePolicy active">
                                <ul className="g-grow">
                                    {this.state.policy.map((pl, index) => (
                                        <li className="item" key={index}>
                                            <i className="iconfont icon-xuan"></i>
                                            <span className="text">{pl.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="content">
                                <div className="m-kingkongCarousel">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            {this.state.king.map((king, index) => (
                                                <a href="javascript:;" className="link_to_shop"
                                                   v-for="(king,index) of kingKongModule.kingKongList" key={index}>
                                                    <div className="kingkong-item">
                                                        <img src={king.picUrl}/>
                                                    </div>
                                                    <span>{king.text}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="m-indexBigPromotionModule">
                                    <div className="m-lazyload">
                                        <img className="onetwo" src={this.state.big} alt="1212"/>
                                    </div>
                                </div>
                                <div className="m-Discount"
                                     style={{background: "url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588)"}}>
                                    <div>
                                        <a href="#" className="newSup">
                                            <div>
                                                {one}
                                            </div>
                                        </a>
                                        <div className="promItem">
                                            <a href="#">
                                                <div className="m-lazyload">
                                                    {two}
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="m-lazyload">
                                                    {three}
                                                </div>
                                            </a>
                                        </div>
                                        <div className="fast"
                                             style={{
                                                 background: "url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305)",
                                                 backgroundSize: "100% 100%"
                                             }}>
                                            <a className="fast-one" href="#">
                                                <div>
                                                    {four}
                                                </div>
                                            </a>
                                            <a className="fast-two" href="#">
                                                <div>
                                                    {five}
                                                </div>
                                            </a>
                                        </div>
                                        <div style={{
                                            width: "100%",
                                            height: "12.5px",
                                            background: "url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1389_750_15)",
                                            backgroundSize: "100% 100%"
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}