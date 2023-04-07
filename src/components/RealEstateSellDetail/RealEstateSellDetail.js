import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faArrowsAltH,
  faExchangeAlt,
  faLayerGroup,
  faBed,
  faToilet,
  faHouse,
  faLocationDot,
  faRulerCombined,
  faCalendarDays,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../Map/Map";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";

function RealEstateSellDetail() {
  const [nhadatdetail, setNhaDatDetail] = useState({});

  console.log({ nhadatdetail: nhadatdetail });
  const params = useParams();
  console.log("log params", params);
  useEffect(() => {
    if (params.id === undefined) {
      return;
    }
    axios
      .get(
        `http://localhost:8888/demobatdongsan/wordpress/wp-json/quocbao-api/v1/bds/nhadat/${params.id}`
      )
      .then((res) => {
        setNhaDatDetail(res.data);
        console.log(res.data);
      });
  }, [params]);
  

  const images = [
    {
      original: "../Assets/Images/nha-dat.jpg",
      thumbnail: "../Assets/Images/nha-dat.jpg",
      description: "Description of image 1",
    },
    {
      original: "../Assets/Images/bds.png",
      thumbnail: "../Assets/Images/bds.png",
      description: "Description of image 2",
    },
    {
      original: "../Assets/Images/bds.png",
      thumbnail: "../Assets/Images/nha-thue.jpg",
      description: "Description of image 2",
    },
    {
      original: "../Assets/Images/bds.png",
      thumbnail: "../Assets/Images/nha-dat.jpg",
      description: "Description of image 2",
    },
    // add more images here
  ];
  return (
    <>
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang Chu</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Nha dat ban</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{nhadatdetail.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ImageGallery items={images} />

      <div className="mt-3">
        <h1 className="font-bold">
        {nhadatdetail.title}
        </h1>
      </div>

      <div className="mt-3">
        <div>
          <span>Mức giá :</span> <b> {nhadatdetail !== undefined && nhadatdetail !== null  && nhadatdetail.thongso && nhadatdetail.thongso.gia}</b><b> {nhadatdetail &&  nhadatdetail.thongso && nhadatdetail.thongso.dongiane}</b>
        </div>
        <div>
          <span>Diện tích :</span> <b>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.dientich} m2</b>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold">Thông tin mô tả</h2>
        <p className="text-lg" >
          {nhadatdetail.content}
        </p>
      </div>
      <div className="mt-3">
        <h2 className="font-bold">Đặc điểm bất động sản</h2>
        <div className="mt-3">
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faRulerCombined}
                    />
                  </Th>
                  <Th>Diện tích</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.dientich} m²</Th>
                  <Th>
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faDollarSign}
                    />
                  </Th>
                  <Th>Mức giá</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.gia}{nhadatdetail && nhadatdetail.thongso &&nhadatdetail.thongso.dongiane}</Th>
                </Tr>
                <Tr>
                  <Th>
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faCompass}
                    />
                  </Th>
                  <Th>Hướng nhà</Th>
                  <Th>Tây - Nam</Th>
                  <Th>
                    {" "}
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faArrowsAltH}
                    />
                  </Th>
                  <Th>Mặt tiền</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.mattien} m</Th>
                </Tr>
                <Tr>
                  <Th>
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faExchangeAlt}
                    />
                  </Th>
                  <Th>Lộ giới</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.logioi} m</Th>
                  <Th>
                    {" "}
                    <FontAwesomeIcon
                      className="text-sm mr-1"
                      icon={faLayerGroup}
                    />
                  </Th>
                  <Th>Số tầng</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.sotang}</Th>
                </Tr>
                <Tr>
                  <Th>
                    <FontAwesomeIcon className="text-sm mr-1" icon={faBed} />
                  </Th>
                  <Th>Số phòng ngủ</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.sophongngu}</Th>
                  <Th>
                    {" "}
                    <FontAwesomeIcon className="text-sm mr-1" icon={faToilet} />
                  </Th>
                  <Th>Số toilet</Th>
                  <Th>{nhadatdetail && nhadatdetail.thongso && nhadatdetail.thongso.sotoilet}</Th>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold">Xem trên bản đồ</h2>
      </div>
      <div className="mt-3">
        <h2 className="font-bold">Video</h2>
      </div>
    </>
  );
}

export default RealEstateSellDetail;
