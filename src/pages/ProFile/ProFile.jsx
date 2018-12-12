import React, { Component } from 'react'
import './ProFile.styl'

class ProFile extends Component {
  render () {
    return (
      <div style={{backgroundColor: '#fff', height: 100 + '%'}}>
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
                              <a className="logo" href="/"></a>
                          </div>
                          <div className="psc-m-right">
                              <a href="javascript:;" className="psc-u-nav-link psc-u-link-cart">
                                  <i className="iconfont c-icon icon-gouwuchekong"></i>
                              </a>
                              <a href="javascript:;" className="psc-u-nav-link psc-u-link-search">
                                  <i className="iconfont s-icon icon-sousuo"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </header>
          </div>
        <div className="ursBox" style={{width: 100 + '%', height: 265 + 'px'}}>
          <div className="g-bd" id="cnt-box">
            <div className="m-cnt">
              <form id="login-form">
                <div className="m-container">
                  <div className="u-tab f-cb">
                    <a href="javascript:;" className="tab0">使用密码验证登录</a>
                  </div>
                  <div className="inputBox">
                    <div className="u-input box">
                      <label className="u-label f-dn">请输入手机号</label>
                      <input type="tel" className="dlemail" name="email" placeholder="请输入手机号" id="phoneipt"/>
                    </div>
                    <div className="u-tip">
                      <div className="u-success u-clear"></div>
                    </div>
                  </div>
                  <div className="m-pccnt f-cb">
                    <div className="m-pcbox">
                      <div className="inputBox m-mb m-pc f-fl">
                        <div className="u-input">
                          <label className="u-label f-dn">请输入短信验证码</label>
                          <input type="tel" tabIndex={5} maxLength={6} data-max-length="6" className="j-inputtext pcin"
                                 name="phonecode" placeholder="请输入短信验证码"/>
                        </div>
                      </div>
                      <div className="pcbtn f-fl">
                        <button className="tabfocus getsmscode">获取验证码</button>
                      </div>
                    </div>
                  </div>
                  <div className="f-cb loginbox">
                    <a tabIndex={8} id="submitBtn" className="u-loginbtn btncolor tabfocus">登录</a>
                  </div>
                  <div className="m-unlogin">
                    <a target="_blank" className="forgetpwdReg">遇到问题？</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="other"><span>其他登录方式</span></div>
          <div className="redundant">
            <span>注册帐号</span>
            <i></i>
          </div>
        </div>
      </div>
    )
  }
}

export default ProFile
