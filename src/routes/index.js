import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import News from '../Pages/News/News';
import Nhadatban from '../Pages/Nhadatban/Nhadatban';
import Nhadatchothue from '../Pages/Nhadatchothue/Nhadatchothue';
import Nhadatsangnhuong from '../Pages/Nhadatsangnhuong/Nhadatsangnhuong';
import Duan from '../Pages/Duan/Duan';
import Searchresult from '../Pages/Searchresult/Searchresult';
const publicRoutes = [
    {path: '/', component:Home},
    {path: '/nha-dat-ban', component:Nhadatban},
    {path: '/nha-dat-cho-thue', component:Nhadatchothue},
    {path: '/nha-dat-sang-nhuong', component:Nhadatsangnhuong},
    {path: '/du-an', component:Duan},
    {path: '/news', component:News},
    {path: '/contact', component:Contact},
    {path: '/search', component:Searchresult},

]

const privateRoutes = []

export {publicRoutes, privateRoutes}