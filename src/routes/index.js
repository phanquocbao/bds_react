import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";
import Nhadatban from "../Pages/Nhadatban/Nhadatban";
import Nhadatchothue from "../Pages/Nhadatchothue/Nhadatchothue";
import Nhadatsangnhuong from "../Pages/Nhadatsangnhuong/Nhadatsangnhuong";
import Duan from "../Pages/Duan/Duan";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Searchresult from "../Pages/Searchresult/Searchresult";
import RealEstateDetail from "../components/RealEstateDetail/RealEstateDetail";
import RealEstateSellDetail from "../components/RealEstateSellDetail/RealEstateSellDetail";
import Login from "../Pages/Login/Login";
import AddPost from "../components/LayoutAdmin/Post/AddPost";
import ListPost from "../components/LayoutAdmin/Post/ListPost";
import EditPost from "../components/LayoutAdmin/Post/EditPost";
import Profile from "../components/LayoutAdmin/Profile/Profile";
import RealEstate from "../components/LayoutAdmin/RealEstate/RealEstate";

const LayoutFullWidth = ({ children }) => <>{children}</>;
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/nha-dat-ban", component: Nhadatban },
  { path: "/nha-dat-cho-thue", component: Nhadatchothue },
  { path: "/nha-dat-sang-nhuong", component: Nhadatsangnhuong },
  { path: "/du-an", component: Duan },
  { path: "/news", component: News },
  { path: "/contact", component: Contact },
  { path: "/search", component: Searchresult },
  { path: "/nha-dat-cho-thue/:id", component: RealEstateDetail },
  { path: "/nha-dat-ban/:id", component: RealEstateSellDetail },
  {
    path: "login",
    component: Login,
    layout: LayoutFullWidth,
  },
];

const privateRoutes = [
  { path: "/admin", component: Dashboard },
  { path: "/admin/add-post", component: AddPost },
  { path: "/admin/edit-post/:id", component: EditPost },
  { path: "/admin/list-post", component: ListPost },
  { path: "/admin/profile", component: Profile },

  { path: "/admin/realestate", component: RealEstate },



];

export { publicRoutes, privateRoutes };
