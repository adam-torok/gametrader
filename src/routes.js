import Profile from './views/Profile'
import Home from './views/Home'
import SingleAdvert from './views/SingleAdvert'
import Login from './views/Login'
import Registration from './views/Registration'
import Nintendo from './views/Nintendo'
import Xbox from './views/Box'


export default[
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/singleadvert/:id',component:SingleAdvert, props:true},
    {path:'/profile',component:Profile},
    {path:'/registration',component:Registration},
    {path:'/nintendo',component:Nintendo},
    {path:'/xbox',component:Xbox}

]