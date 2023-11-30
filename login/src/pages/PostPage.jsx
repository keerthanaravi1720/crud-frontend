

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const PostPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);


//   // Fetch the posts data when the component mounts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // Function to fetch posts from the server
//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/posts', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Attach the token from localStorage to the request header
//         },
//       });

//       const { posts } = response.data;
//       setPosts(posts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to create a new post
//   const createPost = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8000/posts',
//         {
//           title,
//           content,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       const { post } = response.data;
//       setPosts((prevPosts) => [...prevPosts, post]);
//       setTitle('');
//       setContent('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to update a post
//   const updatePost = async (postId) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:8000/posts/${postId}`,
//         {
//           title,
//           content,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       const { post } = response.data;
//       setPosts((prevPosts) =>
//         prevPosts.map((p) => (p.id === post.id ? post : p))
//       );
//       setTitle('');
//       setContent('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to delete a post
//   const deletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:8000/posts/${postId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to handle the form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (title && content) {
// //       if (selectedPost) {
// //         // If a post is selected, update it
// //         updatePost(selectedPost.id);
// //       } else {
// //         // Otherwise, create a new post
// //         createPost();
// //       }
// //     }
// //   };
// // Function to handle the form submission
// const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (title && content) {
//       if (selectedPost) {
//         // If a post is selected, update it
//         updatePost(selectedPost.id);
//       } else {
//         // Otherwise, create a new post
//         createPost();
//       }
//     }
  
//     // Reset the form inputs
//     setTitle('');
//     setContent('');
//     setSelectedPost(null);
//   };
  

//   return (
//     <div>
//         <Navbar/>
//       <h2>POST</h2>
//      {/* <div className='d'> */}
//      <div className={posts.length > 0 ? 'd' : ''}>
//       {posts.map((post) => (
//         <div key={post.id}>
//             <h4 className='u'><u>UserDetails</u></h4>
//           <h4 >Address:  {post.title}</h4>
//           <p>Contact:  {post.content}</p>
//           <button onClick={() => deletePost(post.id)} className='b'>Delete</button>
//           <button onClick={() => setSelectedPost(post)} className='b'>Update</button>

//         </div>
//       ))}
//       </div>
//       <div className='cover1'>
//       <form onSubmit={handleSubmit} className='f1'>
//         <h2 className='h2'>CRUD <img src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg" alt="Kipon" 
//          fetchpriority="high" className='i3'></img></h2>
        
//         <p>Create, Read, Update, Delete</p>
       
//         <input
//           type="text"
//           placeholder="Address"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           placeholder="Contact"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         ></input>
//         <button type="submit" className='bt'lasss>{selectedPost ? 'Update' : 'Create'}</button>
        
//       </form>
//       </div>
//       {/* <h2>Posts</h2> */}
     
      
//     </div>
   
//   );
// };

// export default PostPage;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import { Table, Button, Space, Modal, Form, Input } from 'antd';
// import './styles.css';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const { Column } = Table;

// const PostPage = () => {
//   const [data, setData] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [selectedPost, setSelectedPost] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/posts', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setData(response.data.posts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     form.validateFields().then(async (values) => {
//       try {
//         if (selectedPost) {
//           // If a post is selected, update it
//           await axios.put(`http://localhost:8000/posts/${selectedPost.id}`, values, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//         } else {
//           // Otherwise, create a new post
//           await axios.post('http://localhost:8000/posts', values, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//         }
//         form.resetFields();
//         setIsModalVisible(false);
//         fetchData();
//         setSelectedPost(null);
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   };

//   const handleCancel = () => {
//     form.resetFields();
//     setIsModalVisible(false);
//     setSelectedPost(null);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/posts/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = (record) => {
//     form.setFieldsValue(record);
//     setSelectedPost(record);
//     setIsModalVisible(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login'); // Redirect to the login page
//   };

//   if (!localStorage.getItem('token')) {
//     // If the user is not authenticated, redirect to the login page
//     navigate('/login');
//     return null;
//   }

//   return (
//     <div>
//       <Navbar />
//       <h2>POST</h2>

//       <div className="button-wrapper">
//         <Button onClick={showModal} className="butn">
//           <PlusOutlined /> Create a Post
//         </Button>
        
//       </div>

//       <Table dataSource={data} className="t smaller-table">
//         <Column title="Address" dataIndex="title" key="title" />
//         <Column title="Contact" dataIndex="content" key="content" />

//         <Column
//           title="Action"
//           className="action1"
//           key="action"
//           render={(_, record) => (
//             <Space size="middle">
//               <Button onClick={() => handleUpdate(record)} className="butn" style={{ width: '40px', border: 'white' }}>
//                 <EditOutlined />
//               </Button>
//               <Button onClick={() => handleDelete(record.id)} className="butn" style={{ width: '40px', border: 'white' }}>
//                 <DeleteOutlined />
//               </Button>
//             </Space>
//           )}
//         />
//       </Table>
//       <Button onClick={handleLogout} className="butn">
//           Logout
//         </Button>

//       <Modal
//         title={selectedPost ? 'Edit Record' : 'Add Record'}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okButtonProps={{ className: ' custom-ok-button' }}
//         cancelButtonProps={{ className: 'butn custom-cancel-button' }}
//         bodyStyle={{ width: 500, height: 500 }}
//       >
//         <div className="cover1">
//           <Form form={form} layout="vertical" className="form1">
//             <h2 className="h2">
//               {"CRUD "}
//               <img
//                 src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg"
//                 alt="Kipon"
//                 fetchpriority="high"
//                 className="i3"
//               ></img>
//               {/* <p>Create, Read, Update, Delete</p> */}
//             </h2>

//             <Form.Item label="Address" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
//               <Input />
//             </Form.Item>
//             <Form.Item label="Contact" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
//               <Input />
//             </Form.Item>
//           </Form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default PostPage;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
// import './styles.css';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const { Column } = Table;

// const PostPage = () => {
//   const [data, setData] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [selectedPost, setSelectedPost] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/posts', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setData(response.data.posts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     form.validateFields().then(async (values) => {
//       try {
//         if (selectedPost) {
//           // If a post is selected, update it
//           await axios.put(`http://localhost:8000/posts/${selectedPost.id}`, values, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//         } else {
//           // Otherwise, create a new post
//           await axios.post('http://localhost:8000/posts', values, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//         }
//         form.resetFields();
//         setIsModalVisible(false);
//         fetchData();
//         setSelectedPost(null);
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   };

//   const handleCancel = () => {
//     form.resetFields();
//     setIsModalVisible(false);
//     setSelectedPost(null);
//   };

//   const handleUpdate = (record) => {
//     form.setFieldsValue(record);
//     setSelectedPost(record);
//     setIsModalVisible(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/'); // Redirect to the login page
//   };

//   const handleDelete = (id) => {
//     Modal.confirm({
//       title: 'Delete Confirmation',
//       content: 'Are you sure you want to delete this post?',
//       okText: 'Yes',
//       cancelText: 'No',
//       okButtonProps: {
//         style: {
//           borderColor: 'green', // Change the border color to green
//           width: '150px',
//           color: 'green', // Change the text color to green
//           marginLeft: '5px', // Add left margin between buttons
//         },
//       },
//       cancelButtonProps: {
//         style: {
//           borderColor: 'red', // Change the border color to red
//           width: '150px',
//           color: 'red', // Change the text color to red
//           marginRight: '5px', // Add right margin between buttons
//         },
//       },
//       onOk: async () => {
//         try {
//           await axios.delete(`http://localhost:8000/posts/${id}`, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//           fetchData();
//           message.success('Data deleted successfully');
//         } catch (error) {
//           console.error(error);
//           message.error('Failed to delete data');
//         }
//       },
//       onCancel: () => {
//         // Do nothing if the user cancels the deletion
//       },
//     });
//   };

//   if (!localStorage.getItem('token')) {
//     // If the user is not authenticated, redirect to the login page
//     navigate('/login');
//     return null;
//   }

//   return (
//     <div>
//       <Navbar />
//       <h2>POST</h2>

//       <div className="button-wrapper">
//         <Button onClick={showModal} className="butn">
//           <PlusOutlined /> Create a Post
//         </Button>
//       </div>

//       <Table dataSource={data} className="t smaller-table">
//         <Column title="Address" dataIndex="title" key="title" />
//         <Column title="Contact" dataIndex="content" key="content" />

//         <Column
//           title="Action"
//           className="action1"
//           key="action"
//           render={(_, record) => (
//             <Space size="middle">
//               <Button onClick={() => handleUpdate(record)} className="butn" style={{ width: '40px', border: 'white' }}>
//                 <EditOutlined />
//               </Button>
//               <Button onClick={() => handleDelete(record.id)} className="butn" style={{ width: '40px', border: 'white' }}>
//                 <DeleteOutlined />
//               </Button>
//             </Space>
//           )}
//         />
//       </Table>
//       <Button onClick={handleLogout} className="butn">
//         Logout
//       </Button>

//       <Modal
//         title={selectedPost ? 'Edit Record' : 'Add Record'}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okButtonProps={{ className: ' custom-ok-button' }}
//         cancelButtonProps={{ className: 'butn custom-cancel-button' }}
//         bodyStyle={{ width: 500, height: 500 }}
//       >
//         <div className="cover1">
//           <Form form={form} layout="vertical" className="form1">
//             <h2 className="h2">
//               {"CRUD "}
//               <img
//                 src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg"
//                 alt="Kipon"
//                 fetchpriority="high"
//                 className="i3"
//               ></img>
//               {/* <p>Create, Read, Update, Delete</p> */}
//             </h2>

//             <Form.Item label="Address" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
//               <Input />
//             </Form.Item>
//             <Form.Item label="Contact" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
//               <Input />
//             </Form.Item>
//           </Form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default PostPage;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
import './styles.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

const PostPage = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
  if(!localStorage.getItem('token')){
    navigate('/');
    return;
  }
  fetchData();
      
    
  }, [navigate]);
 

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/posts', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setData(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      try {
        if (selectedPost) {
          // If a post is selected, update it
          await axios.put(`http://localhost:8000/posts/${selectedPost.id}`, values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
        } else {
          // Otherwise, create a new post
          await axios.post('http://localhost:8000/posts', values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
        }
        form.resetFields();
        setIsModalVisible(false);
        fetchData();
        setSelectedPost(null);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    setSelectedPost(null);
  };

  const handleUpdate = (record) => {
    form.setFieldsValue(record);
    setSelectedPost(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Delete Confirmation',
      content: 'Are you sure you want to delete this post?',
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        style: {
          borderColor: 'green', // Change the border color to green
          width: '150px',
          color: 'green', 
          backgroundColor: '#ffffff',
       
          // Change the text color to green
          // marginLeft: '5px', // Add left margin between buttons
        },
      },
    
      cancelButtonProps: {
        style: {
          borderColor: 'red', // Change the border color to red
          width: '150px',
          color: 'red',
          backgroundColor: '#ffffff', // Change the text color to red
          // marginRight: '1px', // Add right margin between buttons
        },
      },
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:8000/posts/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          fetchData();
          message.success('Data deleted successfully');
        } catch (error) {
          console.error(error);
          message.error('Failed to delete data');
        }
      },
      onCancel: () => {
        // Do nothing if the user cancels the deletion
      },
    });
  };

  if (!localStorage.getItem('token')) {
    // If the user is not authenticated, redirect to the login page
    navigate('/login');
    return null;
  }

  

  return (
    <div>
      <Navbar />
      <h2>POST</h2>

      <div className="button-wrapper">
        <Button onClick={showModal} className="butn">
          <PlusOutlined /> Create a Post
        </Button>
      </div>

      <Table dataSource={data} className="t smaller-table">
        <Column title="Address" dataIndex="title" key="title" />
        <Column title="Contact" dataIndex="content" key="content" />

        <Column
          title="Action"
          className="action1"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button onClick={() => handleUpdate(record)} className="butn" style={{ width: '40px', border: 'white' }}>
                <EditOutlined />
              </Button>
              <Button onClick={() => handleDelete(record.id)} className="butn" style={{ width: '40px', border: 'white' }}>
                <DeleteOutlined />
              </Button>
            </Space>
          )}
        />
      </Table>

      <Modal
        title={selectedPost ? 'Edit Record' : 'Add Record'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: ' custom-ok-button' }}
        cancelButtonProps={{ className: 'butn custom-cancel-button' }}
        bodyStyle={{ width: 500, height: 500 }}
      >
        <div className="cover1">
          <Form form={form} layout="vertical" className="form1">
            <h2 className="h2">
              {"CRUD "}
              <img
                src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg"
                alt="Kipon"
                fetchpriority="high"
                className="i3"
              ></img>
              {/* <p>Create, Read, Update, Delete</p> */}
            </h2>

            <Form.Item label="Address" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Contact" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default PostPage;
