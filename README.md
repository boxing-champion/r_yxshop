    问题1:render中第一次渲染数据是使用默认值,使用多层表达式会报 `xxx of undefine`
    解决:使用if判断把第一次的渲染过滤掉
        let one
        if(xxx.length > 0){
            one = (<img src={xxx[0].picUrl} alt="one"/>)//这是一个变量,可以在下方使用{one}
        }



    注意:
        发请求是在生命周期的componentDidMount中
        动态修改需要滑动的元素,动态获取子元素的高度this.refs.xxx.childrenNodes
        !!!a标签中不能使用href切换路径 会导致重新刷新页面  未解决
        第二页滑动的问题--不知何物  点击哪里都会滑动右边  给右边添加scroll   解决but根源没有搞清楚
        循环中可以判断返回什么样的标签体--条件渲染