import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLocationDot,
  faRulerCombined,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
function RealEstate(props) {
  const [chothue, setChoThue] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8888/demobatdongsan/wordpress/wp-json/quocbao-api/v1/bds/nhadat`)
      .then((res) => {
        setChoThue(res.data);
      })
      .catch((err) => {
        console.log(err);
      }); 
  }, []);
  return (
    <>
      <div className="nha-dat-cho-thue mt-4">
        <div className="flex justify-between justify-items-center">
          <h2 className="text-regal-blue text-xl uppercase font-bold">
            Nhà Đất cho thuê
          </h2>
          <Link className="flex items-center justify-items-center">
            <span className="text-base text-regal-blue font-medium">
              Xem Thêm
            </span>
            <FontAwesomeIcon className="text-base" icon={faChevronRight} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {chothue
            .filter((_, index) => index < 6)
            .map((c, index) => {
              return (
                <div key={c.index}>
                  <Box w="100%" className="relative" key={c.index}>
                    <div>
                      <div className="flex">
                        <div>
                          <img className="h-[150px]" src={c.thumbnail} alt={c.title} />
                        </div>
                        <div className="absolute w-[100%] h-[100%]">
                          <div className="flex justify-between">
                            <div className="bg-regal-blue text-white px-1 py-1">
                              <FontAwesomeIcon
                                className="text-sm mr-1"
                                icon={faLocationDot}
                              />
                              <span
                                className="text-sm font-medium  
                         "
                              >
                                Quan 3
                              </span>
                            </div>
                            <div className="bg-la-palma text-white px-1 py-1">
                              <span className="text-sm font-medium">Hot</span>
                            </div>
                          </div>
                          <div className="flex justify-end items-end">
                            <div className="bg-la-palma text-white">
                              <span className="text-sm font-medium">
                                Giá: {c.thongso.gia} {c.thongso.dongiane}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-900">
                      <h3 className="text-base font-bold text-regal-blue uppercase des-tin">
                        <Link to={`/nha-dat-ban/${c.id}`} className="">
                          {c.title}
                        </Link>
                      </h3>
                      <div className="flex justify-between">
                        <div>
                          <FontAwesomeIcon
                            className="text-sm mr-1"
                            icon={faLocationDot}
                          />
                          <span className="text-sm font-medium">
                            Quan 3
                          </span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className="text-sm mr-1"
                            icon={faRulerCombined}
                          />
                          <span className="text-sm font-medium">{c.thongso.dientich} m2</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <FontAwesomeIcon
                            className="text-sm mr-1"
                            icon={faCalendarDays}
                          />
                          <span className="text-sm font-medium">
                            {c.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default RealEstate;
