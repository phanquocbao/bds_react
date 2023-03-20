import API from "../utils/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMemo } from "react";

function useNew(){
    const [tintuc, setTinTuc] = useState([]);
  const [anh, setAnh] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchMedia = async (data) => {
    const medias = data.map((d) => d._links["wp:featuredmedia"][0]?.href);
    const apiMedias = medias.map((url) =>
      axios.get(url).then((res) => res.data)
    );
    const mediasResult = await Promise.all(apiMedias);
    setAnh(mediasResult);
  };

  const counterx2 = useMemo(() => counter * 2, [counter]);
  const anhDau = useMemo(() => {
    const [anh1, ...anhconlai] = anh;
    return anh1;
  }, [anh]);

  const anhSau = useMemo(() => {
    const [anh1, ...anhconlai] = anh;
    return anhconlai;
  }, [anh]);


  const getAnh = (index) => {
    return (anh[index] && anh[index].guid && anh[index].guid.rendered) || "";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8888/demobatdongsan/wordpress//wp-json/wp/v2/posts`)
      .then((res) => {
        setTinTuc(res.data);
        fetchMedia(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return {
        tintuc: tintuc,
        anh,
        counter,
        counterx2,
        anhDau,
        anhSau,
        getAnh,
    };
}

export default useNew;