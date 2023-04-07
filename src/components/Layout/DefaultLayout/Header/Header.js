import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Nav from "../../../Nav/Nav";
import Showresultsearch from "../../../Showresultsearch/Showresultsearch";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    axios
      .get(
        "http://localhost:8888/demobatdongsan/wordpress/wp-json/wp/v2/search?search",
        {
          params: {
            search: searchValue,
          },
        }
      )
      // .then((res) => res.json())
      .then((res) => {
        // console.log(res.data.results)
        setSearchResult(res.data);
        console.log(
          "🚀 ~ file: Header.js:41 ~ .then ~ setSearchResult:",
          res.data
        );
      })
      .catch(() => {});
  }, [searchValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <div>
      <header className="">
        <div className="topbar bg-astronaut py-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-50 flex justify-between">
              <div className="logo">
                <img
                  className="h-[60px]"
                  src="../Assets/Images/logo.png"
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <div className="search mr-6 flex items-center relative">
                  <input
                    className="placeholder:text-white text-white text-sm focus-visible:ring-transparent placeholder:text-sm bg-papa-green w-[290px] rounded-l px-2 py-2"
                    type="search"
                    placeholder="Tìm bất động sản theo từ khóa..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setSearchResult(true)}
                  />
                  {Array.isArray(searchResult) && searchResult.length > 0 && (
                    <div className="absolute top-10 left-0 z-50 w-[100%]">
                      {searchResult
                        .filter((_, index) => index < 4)
                        .map((result) => (
                          <Showresultsearch key={result.id} data={result} />
                        ))}
                    </div>
                  )}
                  <button>
                    <FontAwesomeIcon
                      className="text-white w-[25px] h-[25px] ml-3 font-bold"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
                <div className="bg-white">
                  <Link to={"/dang-tin-mien-phi"} className="flex items-center">
                    <FontAwesomeIcon
                      className="w-[20px] h-[20px] px-3 py-2"
                      icon={faPenToSquare}
                    />
                    <span className="site-login p-2 text-sm">
                      Đăng tin miễn phí{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
            <Nav />
      </header>
    </div>
  );
}
export default Header;
