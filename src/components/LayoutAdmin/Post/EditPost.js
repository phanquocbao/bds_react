import { useState } from "react";
import axios from "../../../utils/api/axios";
import { Input,Textarea,Button  } from '@chakra-ui/react'
function EditPost(){
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = '/quocbao-api/v1/bds/add_posts';
    // const authToken = 'Bearer <your authentication token>';
    

    const postData = {
      title: title,
      content: content,
      thumbnail:thumbnail,
      status: 'publish'
    };
    console.log("🚀 ~ file: Post.js:21 ~ handleSubmit ~ postData:", postData)

    try {
      const response = await axios.post(apiUrl, postData, {
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': authToken
        // }
      });
      console.log('11111',response);
      alert('Bài viết đã được tạo thành công!');
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi khi tạo bài viết!');
    }
  };
    return(<>
         <form onSubmit={handleSubmit}>
      <label>
        Tiêu đề:
        <Input type="text" placeholder='Basic usage' value={title || ''} onChange={(event) => setTitle(event.target.value)}/>
      </label>
      <br />
      <label>
        Nội dung:
        <Textarea placeholder='Here is a sample placeholder' value={content || ''} onChange={(event) => setContent(event.target.value)}  />
      </label>
      <br />
      <label>
       Ảnh đại diện:
       <Input type="file" name="file"  onChange={(event) => setThumbnail(event.target.files[0])} />
      </label>
      <br />
      <Button type="submit" colorScheme='blue'>Button</Button>
    </form>
    </>)
}

export default EditPost;