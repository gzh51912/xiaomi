import Home from "../components/home";
import Classify from "../components/classify";
import Star from "../components/star";
import Cart from "../components/cart";
import User from "../components/user";
import NotFound from "../components/notFound";
export default [
    {
        path:"/home",
        component:Home
    },{
        path:"/classify",
        component:Classify
    },{
        path:"/star",
        component:Star
    },{
        path:"/cart",
        component:Cart
    },{
        path:"/user",
        component:User
    },{
        path:"/404",
        component:NotFound
    }
]