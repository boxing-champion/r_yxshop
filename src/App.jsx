import React, {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ClassiFication from "./pages/ClassiFication/ClassiFication"
import Identifying from "./pages/Identifying/Identifying"
import ProFile from "./pages/ProFile/ProFile"
import ShopCart from "./pages/ShopCart/ShopCart"
import FootGuide from "./components/foot-guide/foot-guide"

class App extends Component {

    render() {
        const path = this.props.location.pathname
        const showPaths = ['/homepage', '/identifying', '/classification', '/shopcart']
        const showFooter = showPaths.indexOf(path) >= 0
        return (
            <div style={{width:"100%",height: "100%"}}>
                <Switch>
                    <Redirect exact from="/" to="/homepage"/>
                    <Route path="/homepage" component={HomePage}/>
                    <Route path="/classification" component={ClassiFication}/>
                    <Route path="/identifying" component={Identifying}/>
                    <Route path="/shopcart" component={ShopCart}/>
                    <Route path="/profile" component={ProFile}/>
                </Switch>
                {showFooter ? <FootGuide/> : null}
            </div>
        )
    }
}

export default withRouter(App)