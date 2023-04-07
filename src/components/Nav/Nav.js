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
    axios
      .get(
        `http://localhost:8888/demobatdongsan/wordpress/wp-json/quocbao-api/v1/bds/menu?menu_name=Main`
      )
      .then((res) => {
        setMenuItems(res.data);
        console.log("1111", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="topbar bg-primary">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative z-50 flex justify-between">
      <ul className="py-2">
        <li className="">
          {menuItems.map((menu, index) => {
            return (
              <Link
                key={index}
                to={menu.title}
                className="text-white ml-1 p-3 text-lg hover:bg-la-palma font-semibold my-0 mx-3"
              >
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
