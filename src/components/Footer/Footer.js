import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLocationDot,faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className=" bg-tropaz mt-4">
        <div className="flex justify-around items-center">
          <div className="w-[1050px]">
            <div className="grid grid-cols-5 gap-4 mt-2">
                <div> <img className="" src="../Assets/Images/logo.png" alt="" />
                    <p className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faLocationDot} /> Tầng 14, Zen Tower, 12 Khuất Duy Tiến, Thanh Xuân, Hà Nội</p>
                    <p className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faPhoneVolume} />Phía Bắc: 0987 353 298– Phía Nam: 0334 363 307</p>
                </div>
                <div> <h3 className="text-white text-lg font-bold">THÔNG TIN CHUNG</h3>
                   <ul>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Giới thiệu chung</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Quy chế hoạt động</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Quy định sử dụng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Quy trình đăng tin</Link></li>
                   </ul>
                </div>
                <div> <h3 className="text-white text-lg font-bold">NHÀ ĐẤT BÁN</h3>
                   <ul>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán căn hộ chung cư</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà riêng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà biệt thự, liền kề</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà mặt phố</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất nền dự án</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán trang trại, khu nghỉ dưỡng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán kho, nhà xưởng</Link></li>
                   </ul>
                </div>
                <div> <h3 className="text-white text-lg font-bold">NHÀ ĐẤT CHO THUÊ</h3>
                   <ul>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán căn hộ chung cư</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà riêng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà biệt thự, liền kề</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà mặt phố</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất nền dự án</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán trang trại, khu nghỉ dưỡng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán kho, nhà xưởng</Link></li>
                   </ul>
                </div>
                <div> <h3 className="text-white text-lg font-bold">SANG NHƯỢNG</h3>
                   <ul>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán căn hộ chung cư</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà riêng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà biệt thự, liền kề</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán nhà mặt phố</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất nền dự án</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán đất</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán trang trại, khu nghỉ dưỡng</Link></li>
                    <li><Link className="text-white text-sm"><FontAwesomeIcon className="mr-2" icon={faChevronRight} />Bán kho, nhà xưởng</Link></li>
                   </ul>
                </div>
                
                
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
