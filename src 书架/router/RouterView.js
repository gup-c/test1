import {Switch,Redirect,Route} from 'react-router-dom'
import React from 'react'
function RouterView (props){
    let {routes} = props
    return (
        <Switch>
            {
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>:
                <Route path={item.path} key={index} render={(props)=>{
                    return <item.component {...props} routes={item.children} />
                }} />)
            }
        </Switch>
    )
}
export default RouterView