import { useState, useEffect } from "react";
import axios from "axios";

function useNhadatban() {

    const [nhadat, setNhaDat] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/demobatdongsan/wordpress/wp-json/quocbao-api/v1/bds/nhadat`)
      .then((res) => {
        setNhaDat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return{
        nhadat: nhadat,
    };
}

export default useNhadatban;