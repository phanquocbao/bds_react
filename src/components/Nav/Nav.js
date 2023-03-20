import { Link } from "react-router-dom";
// import { MenuItems } from "../MenuItems";
import { useEffect, useState } from "react";
import axios from "axios";
function Nav() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // TODO: gan api cho nay
    // API.categories.get({ per_page: 2 }).then((menuItemsData) => {
    //   setMenuItems(menuItemsData);
    // });
    axios.get(`http://localhost:8888/demobatdongsan/wordpress/wp-json/quocbao-api/v1/bds/menu?menu_name=Main`)
    .then((res) => {
      setMenuItems(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="bg-tropaz">
      <div className="w-[1050px]">
        <div className="flex justify-around h-[45px] items-center">
          <ul className="">
            <li className="">
              {menuItems.map((menu, index) => {
                return (
                  <Link key={index} to={menu.title} className="text-white ml-1 p-3 text-lg">
                    <span>{menu.title}</span>
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
