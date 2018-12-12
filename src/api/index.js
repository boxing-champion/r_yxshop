import ajax from "./ajax"
const BASE = "/api"
const Bas = "/163"

export const reqKingKongModule = () => ajax(`/kingKongModule`)//首页十个导航
export const reqFocusList = () => ajax(`/focusList`)//轮播图
export const reqBigPromotion = () => ajax(`/bigPromotionModule`)//大的动图以及下面的小图
export const reqTagList = () => ajax(`/tagList`)//品牌
export const reqPolicyDescList = () => ajax(`/policyDescList`)//三个low
export const reqCategoryHotSellModule = () => ajax(`/categoryHotSellModule`)//类目  头部导航
export const reqPopularItemList = () => ajax(`/popularItemList`)//人气推荐

export const reqCate = () => ajax(`/cate`)//第二页

export const reqShiwu1 = () => ajax(`/shiwu1`)//第二页
export const reqShiwu2 = () => ajax(`/shiwu2`)//第二页
export const reqTabs = () => ajax(`/tabs`)//第二页


export const reqManual = () => ajax(Bas + `/topic/v1/find/recManual.json`)//真实接口  -- 第一页
export const reqTabDta= () => ajax(Bas + `/topic/v1/find/getTabData.json?page=1&size=5&tabId=4`)//真实接口 -- 第二页
// export const reqTabs = () => ajax(Bas + `/topic/v1/find/getTabs.json`)//tabs

/*export const reqSide = () => ajax(`/side`)//第一页

export const reqCate = () => ajax(`/cate`)//第二页

export const reqIdentifying = () => ajax(`/identifying`)//第三页


export const reqSendCode = (phone) => ajax(BASE + `/sendcode`,{phone})//发送手机验证码
export const reqPwd = ({name,pwd,captcha}) => ajax(BASE + `/login_pwd`,{name,pwd,captcha},"POST")//密码登陆
export const reqPhone = (phone, code) => ajax(BASE + `/login_sms`,{phone,code},"POST")//手机号登陆
export const reqUser = () => ajax(BASE + `/userinfo`)//获取用户信息
export const reqLogout = () => ajax(BASE + `/logout`)//登出


export const reqManual = () => ajax(Bas + `/topic/v1/find/recManual.json`)//真实接口  -- 第一页
export const reqTabDta= () => ajax(Bas + `/topic/v1/find/getTabData.json?page=1&size=5&tabId=4`)//真实接口 -- 第二页
export const reqTabs = () => ajax(Bas + `/topic/v1/find/getTabs.json`)//tabs*/
