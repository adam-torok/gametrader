import Profile from './views/Profile'
import Home from './views/Home'
import SingleAdvert from './views/SingleAdvert'
import Login from './views/Login'


export default[
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/singleadvert/:id',component:SingleAdvert, props:true},
    {path:'/profile',component:Profile} 
]