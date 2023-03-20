import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import useTinhThanh from "../../../../hook/useTinhThanh";

function Sidebar() {
  const { tinh } = useTinhThanh();

  return (
    <div className="">
      <div className="">
        <div className="border-regal-blue border-b-2 flex p-0">
          <Link className="p-0">
            <h3 className="bg-regal-blue text-xl uppercase font-bold text-white border-2 px-1 py-1">
              Tỉnh/Thành
            </h3>
          </Link>
        </div>
        <div>
          {tinh
            .filter((_, index) => index < 15)
            .map((t) => {
              return (
                <div className="border-black">
                  <Link>
                    <h4
                      className="text-sm hover:text-orange py-2 font-bold border-b-2 text-regal-blue"
                      title={t.name_with_type}
                    >
                      {" "}
                      <FontAwesomeIcon className="mr-2" icon={faChevronRight} />
                      {t.name_with_type}
                    </h4>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-4">
        <Tabs isFitted variant="enclosed" size="sm" colorScheme="cyan">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "blue.500" }}>
              Cần Thuê/Mua
            </Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Ký/Gửi</Tab>
          </TabList>
          <TabPanels className="bg-slate-400">
            <TabPanel>
              <Stack direction="column" spacing={4} align="center">
                <Input variant="filled" placeholder="Địa chỉ bất động sản(*)" />
                <Input variant="filled" placeholder="Diện tích(*)" />
                <Input variant="filled" placeholder="Số tầng(*)" />
                <Input
                  variant="filled"
                  placeholder="Giá(Đơn vị: Triệu/Tỷ)(*)"
                />
                <Input variant="filled" placeholder="Họ Tên(*)" />
                <Input variant="filled" placeholder="Điện Thoại(*)" />
                <Input variant="filled" placeholder="Email(*)" />
                <Input variant="filled" placeholder="Địa chỉ liên hệ(*)" />
                <Textarea placeholder="Yêu cầu khác: Vỉa hè, Riêng biệt, Tiện ích, Hướng, Gần nhiều tòa nhà văn phòng...vv (*)" />
                <Button colorScheme="blue">Button</Button>
              </Stack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="mt-4">
      <div className="border-regal-blue border-b-2 flex p-0">
          <Link className="p-0">
            <h3 className="bg-regal-blue text-xl uppercase font-bold text-white border-2 px-1 py-1">
              PHONG THỦY
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
