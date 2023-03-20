import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouse,
  faLocationDot,
  faRulerCombined,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import useNhadatban from "../../hook/useNhadatban";

function RealEstateSell() {
  const {nhadat} = useNhadatban();
  return (
    <>

      <div className="nha-dat-ban mt-4">
        <div className="flex justify-between justify-items-center">
          <h2 className="text-regal-blue text-xl uppercase font-bold">
            Nhà Đất Bán
          </h2>
          <Link className="flex items-center justify-items-center">
            <span className="text-base text-regal-blue font-medium">
              Xem Thêm
            </span>
            <FontAwesomeIcon className="text-base" icon={faChevronRight} />
          </Link>
        </div>
        {nhadat
          .filter((_, index) => index < 6)
          .map((n, index) => {
            return (
              <div className="grid grid-cols-12 gap-2 mt-4">
                <div className="col-span-3">
                  <Link className="max-w-full">
                    <img
                      src={n.thumbnail}
                      title={n.title}
                      alt={n.title}
                    />
                  </Link>
                </div>
                <div className="col-span-9">
                  <div className="flex justify-between justify-center">
                    <h3 className="text-base text-regal-blue font-bold hover:text-orange leading-none mb-2 mr-3">
                      <Link to={n.slug} title={n.title}>{n.title}</Link>
                    </h3>
                    <span className="bg-la-palma text-white text-sm font-medium px-2 w-[110px] h-[25px]">
                      Giá: {n.thongso.gia} {n.thongso.dongiane}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm mr-1"
                        icon={faHouse}
                      />
                      <span className="text-sm font-bold">{n.thongso.mattien} m2</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="text-sm mr-1"
                        icon={faRulerCombined}
                      />
                      <span className="text-sm font-medium">{n.thongso.dientich} m2</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm mr-1"
                        icon={faLocationDot}
                      />
                      <span className="text-sm font-medium">{n.thongso.diachi}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="text-sm mr-1"
                        icon={faCalendarDays}
                      />
                      <span className="text-sm font-medium">
                        {n.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default RealEstateSell;
