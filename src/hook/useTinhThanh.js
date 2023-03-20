import { useEffect, useState } from "react";
import API from "../utils/api";

function useTinhThanh() {
  const [tinh, setTinh] = useState([]);
  const [quanhuyen, setQuanHuyen] = useState([]);
  const [xaphuong, setXaPhuong] = useState([]);

  const [tinhdachon, setTinhDaChon] = useState({});
  const [quandachon, setQuanDaChon] = useState({});

  const [quanhuyentrongtinhdachon, setQuanhuyentrongtinhdachon] = useState([]);
  const [xaphuongtrongquanhuyendachon, setXaphuongtrongquanhuyendachon] =
    useState([]);

  const chontinh = (e) => {
    const tinh = e.target.value;
    setTinhDaChon(tinh);
    const quanhuyencuatinh = quanhuyen.filter((q) => {
      return q.parent_code === tinh;
    });

    setQuanhuyentrongtinhdachon(quanhuyencuatinh);
  };

  const chonquan = (e) => {
    const quanhuyen = e.target.value;
    setQuanDaChon(quanhuyen);
    const xaphuongcuaquanhuyen = xaphuong.filter((x) => {
      return x.parent_code === quanhuyen;
    });
    setXaphuongtrongquanhuyendachon(xaphuongcuaquanhuyen);
  };
  useEffect(() => {
    API.mapjson.getTinhTP().then((result) => {
      setTinh(Object.values(result));
    });
  }, []);

  useEffect(() => {
    API.mapjson.getQuanHuyen().then((result) => {
      setQuanHuyen(Object.values(result));
    });
  }, []);

  useEffect(() => {
    API.mapjson.getXaPhuong().then((result) => {
      setXaPhuong(Object.values(result));
    });
  }, []);

  return {
    tinh: tinh,
    quanhuyen,
    xaphuong,
    quanhuyentrongtinhdachon,
    chontinh,
    chonquan,
    xaphuongtrongquanhuyendachon,
  };
}
export default useTinhThanh;
