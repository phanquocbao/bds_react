import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../utils/api/axios";
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function ListPost() {
  const [listpost, setListPost] = useState({});
  const [editpost, setEditPost] = useState({});
  const [deletepost, setDeLeTePost] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`/wp/v2/posts`)
      .then((res) => {
        setListPost(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledeletepost = (e) => {
    e.preventDefault()

    if (params.id === undefined) {
      return;
    }
    axios.delete(`/wp-json/wp/v2/posts/${params.id}`)
    .then((res) => {
      setDeLeTePost(res);
      console.log(params.id);
      alert("Xóa bài Thành công");
    })
    .catch((err) => {
      console.log(err);
      alert("Xóa bài viết thất bại");
    });
  }

  const handleeditpost = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <h1>Danh sách bài viết</h1>

      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              Stt
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                Tác giả
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                Vai trò
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                Tiêu đề
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                Ngày đăng
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
              <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(listpost) &&
            listpost.map((l, index) => {
              return (
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-lg">
                    {index + 1}
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      {/* <img
                  src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                  alt="John Michael"
                  className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                /> */}
                      <div>
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                          {l.author}
                        </p>
                        {/* <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    john@creative-tim.com
                  </p> */}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                      Quản trị
                    </p>
                    {/* <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                Organization
              </p> */}
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div
                      className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr py-0.5 px-2 text-[11px] font-medium"
                      data-projection-id="1"
                      // style="opacity: 1;"
                    >
                      <div className="mt-px">{l.title.rendered}</div>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                      {l.date}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Button colorScheme="whatsapp" variant="solid" onClick={handleeditpost}>
                      Edit
                    </Button>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Button colorScheme="red" variant="solid" onClick={handledeletepost}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default ListPost;
