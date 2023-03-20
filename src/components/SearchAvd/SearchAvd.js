import { Select, Input, Checkbox, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import API from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import useTinhThanh from "../../hook/useTinhThanh";
function SearhAvd() {
  const {
    quanhuyentrongtinhdachon,
    chontinh,
    tinh,
    chonquan,
    xaphuongtrongquanhuyendachon,
  } = useTinhThanh();

  return (
    <div className=" flex justify-around">
      <div className="banner">
        <img src="/Assets/Images/new-york-skyline-compressed.jpg" alt="" />
      </div>
      <div className="w-[1050px] absolute z-10 pt-28">
        <div className="bg-big-stone p-4">
          <form>
            <div className="grid grid-cols-5 pb-4">
              <span className="bg-la-palma text-white w-[130px] text-lg">
                Nhà đất bán
              </span>
              <span className=" text-white text-lg">Nhà đất cho thuê</span>
              <span className=" text-white text-lg">Dự án </span>
            </div>
            <div className="grid grid-cols-8 gap-2 pb-4">
              <div className="bg-white col-span-2">
                <Input
                  size={"sm"}
                  className="text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Từ khóa"
                />
              </div>
              <div className="bg-white">
                <Select
                  size={"sm"}
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="0">Chọn loại nhà đất</option>
                  <option value="159">Cho thuê căn hộ chung cư</option>
                  <option value="160">Cho thuê nhà riêng</option>
                  <option value="161">Cho thuê nhà mặt phố</option>
                  <option value="162">Cho thuê nhà trọ, phòng trọ</option>
                  <option value="163">Cho thuê văn phòng</option>
                  <option value="164">Cho thuê cửa hàng, ki ốt</option>
                  <option value="165">Cho thuê kho, nhà xưởng, đất</option>
                  <option value="166">Cho thuê bất động sản khác</option>
                </Select>
              </div>
              <div className="bg-white">
                <Select
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  name="province"
                  onChange={chontinh}
                  size={"sm"}
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="">Chọn Tỉnh/Thành phố</option>
                  {tinh.map((t) => {
                    return (
                      <option key={t.code} value={t.code}>
                        {t.name}
                      </option>
                    );
                  })}
                </Select>
              </div>
              <div className="bg-white">
                <Select
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  name="district"
                  onChange={chonquan}
                  size={"sm"}
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="">Chọn quận/huyện</option>
                  {quanhuyentrongtinhdachon.map((q, index) => {
                    return (
                      <option key={q.code} value={q.code}>
                        {q.name_with_type}
                      </option>
                    );
                  })}
                </Select>
              </div>
              <div className="bg-white">
                <Select
                  size={"sm"}
                  className="form-control text-xs rounded-r-sm placeholder:text-grey "
                  name="ward"
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="">Chọn phường/xã</option>
                  {xaphuongtrongquanhuyendachon.map((x, index) => {
                    return (
                      <option className="text-xs" key={x.code} value={x.code}>
                        {x.name_with_type}
                      </option>
                    );
                  })}
                </Select>
              </div>
              <div className="bg-white">
                <Input
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Tên đường"
                />
              </div>
              <div className="bg-white">
                <Select
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  name="building_orientation"
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="0">Chọn hướng nhà</option>

                  <option value="1">Đông</option>

                  <option value="2">Tây</option>

                  <option value="3">Nam</option>

                  <option value="4">Bắc</option>

                  <option value="5">Đông bắc</option>

                  <option value="6">Đông nam</option>

                  <option value="7">Tây bắc</option>

                  <option value="8">Tây nam</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <div className="bg-white col-span-1">
                <Select
                  size={"sm"}
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="0">Giá thấp nhất</option>
                  <option value="159">1 Triệu</option>
                  <option value="160">100 Triệu</option>
                  <option value="161">200 Triệu</option>
                  <option value="162">500 Triệu</option>
                  <option value="163">1 Tỷ</option>
                  <option value="164">3 Tỷ</option>
                  <option value="165">5 Tỷ</option>
                  <option value="166">8 Tỷ</option>
                  <option value="166">10 Tỷ</option>
                  <option value="166">35 Tỷ</option>
                </Select>
              </div>
              <div className="bg-white">
                <Select
                  size={"sm"}
                  icon={<FontAwesomeIcon size="xs" icon={faSort} />}
                >
                  <option value="0">Giá thấp nhất</option>
                  <option value="159">1 Triệu</option>
                  <option value="160">100 Triệu</option>
                  <option value="161">200 Triệu</option>
                  <option value="162">500 Triệu</option>
                  <option value="163">1 Tỷ</option>
                  <option value="164">3 Tỷ</option>
                  <option value="165">5 Tỷ</option>
                  <option value="166">8 Tỷ</option>
                  <option value="166">10 Tỷ</option>
                  <option value="166">35 Tỷ</option>
                </Select>
              </div>
              <div className="bg-white">
                <Input
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Diện tích tối thiểu"
                />
              </div>
              <div className="bg-white">
                <Input
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Mặt tiền tối thiểu"
                />
              </div>
              <div className="bg-white">
                <Input
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Số tầng tối thiểu"
                />
              </div>
              <div className="bg-white">
                <Input
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Số phòng tối thiểu"
                />
              </div>
              <div className="bg-white">
                <Input
                  size={"sm"}
                  className="form-control text-lg rounded-r-sm placeholder:text-grey"
                  type="text"
                  placeholder="Đường/ hẻm rộng"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-4 text-white">
              <div>
                <Checkbox>Có thu nhập từ BDS</Checkbox>
              </div>
              <div>
                <Checkbox>Có sẵn nội thất</Checkbox>
              </div>
              <div>
                <Checkbox>Có thang máy</Checkbox>
              </div>
              <div>
                <Checkbox>Hẻm xe hơi?</Checkbox>
              </div>
              <div>
                <Button colorScheme="blue" width="100%">
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SearhAvd;
