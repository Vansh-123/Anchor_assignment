// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const name_ = localStorage.getItem("username");
//   const username = name_.charAt(0).toUpperCase() + name_.slice(1);
//   const [clickcreatePost,setclickedcreatePost]=useState(false);
//   const [getallpost,setgetallpost]=useState([{}]);
//   const [clickpostbutton,setclickedpostbutton]=useState(false);
//   function handleclickedpostbutton()
//   {
//     setclickedpostbutton(!clickpostbutton);
//     setclickedcreatePost(false);
//   }
//   function handlegetallpost()
//   {
//         getPosts();
        
//         console.log(getallpost.map((item) => item));

//   }
//   const [topics, setTopics] = useState([]);
//   const navigate = useNavigate();

//     function handlepost()
//     {
//         setclickedcreatePost(!clickcreatePost);
//         setclickedpostbutton(false);

//     }
// //   const getPosts = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/post/topics", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       const data = await res.json();
// //       if (data.error) {
// //         console.log(data.error);
// //       } else {
// //         const arr=(data.map((item) => item.topic))
// //         setgetallpost(arr);
        
// //         setTopics(data);
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// function seeReplies()
// {

// }
//     const getPosts = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/post/topics", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     if (data.error) {
//       console.log(data.error);
//     } else {
//         console.log(data.map((item) => item));
//       const arr = data.map((item) => ({
//         topic: item.topic,
//         comments: item.comments,
//         replies:item.comments.replies.length
        
        
//       }));
//       setgetallpost(arr);
//       setTopics(data);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//   useEffect(() => {
//     getPosts();
//     const username = localStorage.getItem("username");
//     const id = localStorage.getItem("id");
//     const email = localStorage.getItem("email");
//     if (!username || !id || !email) {
//       navigate("/login");
//     }
//   }, []);

//   const [postInp, setPostInp] = useState("");

//   const handleSubmit = async () => {
//     if (!postInp) return alert("Please enter a topic");
//     try {
//       const res = await fetch("http://localhost:5000/post/topics", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           topic: postInp,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
       
//         setTopics([...topics, data]);
//         setPostInp("");
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const submitComment = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/post/topics/${id}/comments`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           comment: document.getElementById(id).value,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         setgetallpost(document.getElementById(id).value);
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };


//   const replyComment = async (topicId, commentId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/post/topics/${topicId}/comments/${commentId}/replies`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           reply: document.getElementById(commentId).value,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {

//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='home bg-black h-screen w-screen overflow-y-scroll relative text-white '>
//       <div className='h-[40px] w-[42.22px] '>
        
//       </div>
//       <div className='text-white font-[Public sans] font-bold leading-[23.5px] text-[20px] w-fit p-2 h-[40px] mt-[27px] ml-[1088px]'>
//         Welcome, {username}
//       </div>
//       <button onClick={handlepost}>create post</button>
//       {clickcreatePost && <div className="inputPost bg-blue-700 flex justify-center flex-col w-[500px] h-[200px]">
//         <textarea
//           placeholder="Tell your Suggestions..."
//           className="inputText h- w-full"
//           value={postInp}
//           onChange={(e) => setPostInp(e.target.value)}
//         ></textarea>
//         <button className="inputPostButton" onClick={handleSubmit}>
//           Post
//         </button>
//       </div>}
//       <br></br>
//         <button onClick={handlegetallpost,handleclickedpostbutton}>getPost</button>
//         {clickpostbutton && (
//         <ul className='text-white'>
//             {getallpost.map((item, index) => (
//             <li className="text-white" key={index}>
//                 Topic: {item.topic}, comments:- {item.comments} ,Replies:{item.replies}
               
//             </li>
//              ))}
//         </ul>
//         )}

//         {topics.map((topic, i) => (
//   <div className='post' key={topic._id}>
//     <div className="postUsername">{topic.username}</div>
//     <hr />
//     <div className="text wrapperComment">{topic.topic}</div>
//     <div className="comments">
//       <div className="reply">
//         <input type="text" className='replyInp' id={topic._id} />
//         <button className='submit' onClick={() => submitComment(topic._id)}>
//           Comment
//         </button>
//       </div>
//       <hr />
//       {topic.comments?.map((comment, j) => (
//         <div className="comment" key={comment._id}>
//           <div className="commentText">
//             <div className="wrapper">
//               <div className="replyName">{comment.username}</div>
//               <div className="wrapperComment">{comment.comment}</div>
//               <div className="reply">
//                 <input type="text" className='replyInp' id={comment._id} />
//                 <button className='submit' onClick={() => replyComment(topic._id, comment._id)}>
//                   Reply
//                 </button>
//               </div>
//               {comment.replies?.map((reply, k) => (
//                 <div className="replyText" key={reply._id}>
//                   <div className="replyName">{reply.username}</div>
//                   <div className="wrapperComment2">{reply.reply}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   </div>
// ))}

//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsPlusCircle } from "react-icons/bs";
// const Home = () => {
//   const name_ = localStorage.getItem("username");
//   const username = name_.charAt(0).toUpperCase() + name_.slice(1);
//   const [clickcreatePost, setclickedcreatePost] = useState(false);
//   const [getallpost, setgetallpost] = useState([]);
//   const [clickpostbutton, setclickedpostbutton] = useState(false);
//   const [topics, setTopics] = useState([]);
//   const [showPost,setShowPost]=useState(false);
//   const navigate = useNavigate();

//     function handlepost()
//     {
//         setclickedcreatePost(!clickcreatePost);
//         setclickedpostbutton(false);

//     }
//     function handleshowpost()
//     {
//         setShowPost(!showPost);
//     }
//   function handleclickedpostbutton() {
//     setclickedpostbutton(!clickpostbutton);
//     setclickedcreatePost(false);
//   }
//     function handlegetallpost()
//   {
//         getPosts();
        
//         console.log(getallpost.map((item) => item));

//   }
//   const getPosts = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/post/topics", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         // console.log(data.map(item => item.comments.map(comment => comment.replies.length)));

//         const arr = data.map(item => ({
//             topic: item.topic,
//             comments: item.comments.map(comment => ({
//               commentText: comment.comment,
//               replies: comment.replies.length
//             }))
//           }));
          
          
//         setgetallpost(arr);
//         setTopics(data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//     const storedUsername = localStorage.getItem("username");
//     const id = localStorage.getItem("id");
//     const email = localStorage.getItem("email");
//     if (!storedUsername || !id || !email) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const [postInp, setPostInp] = useState("");

//   const handleSubmit = async () => {
//     if (!postInp) return alert("Please enter a topic");
//     try {
//       const res = await fetch("http://localhost:5000/post/topics", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           topic: postInp,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         setTopics([...topics, data]);
//         setPostInp("");
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const submitComment = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/post/topics/${id}/comments`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           comment: document.getElementById(id).value,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const replyComment = async (topicId, commentId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/post/topics/${topicId}/comments/${commentId}/replies`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           reply: document.getElementById(commentId).value,
//           username: localStorage.getItem("username"),
//           userId: localStorage.getItem("id"),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='home bg-black h-screen w-screen overflow-y-scroll relative text-white '>
//       <div className='h-[40px] w-[42.22px] '></div>
//       <div className='text-white font-[Public sans] font-bold leading-[23.5px] text-[20px] w-fit p-2 h-[40px] mt-[27px] ml-[1088px]'>
//         Welcome, {username}
//       </div>
//       <button onClick={handlepost} className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[138px] rounded-[10px] flex items-center justify-center'>
//         <span className='w-[24px] h-[24px]  inline-flex items-center justify-center rounded-full mr-2'>
//             <BsPlusCircle />
//         </span>
//         Create Post
//     </button>
//     <button onClick={() => {handlegetallpost(); handleclickedpostbutton();}} className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[20px] rounded-[10px] '>All Post</button>
//       {clickcreatePost && (
//         <div className="absolute bg-[#0D0D0D] flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px]">
//         <h1 className=' mt-[14px] ml-[19px] h-[24px] w-[111px] font-semibold text-[20px] leading-23.5 font-public-sans'>Create Post</h1>
//             <textarea placeholder='Post Title'
//                 readOnly
//                 className='bg-white/5 w-[400px] h-[58px] mt-[68px] ml-[54px] pl-[24px] pt-[10px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]'
//              ></textarea>
//           <textarea
//             placeholder="Describe your post..."
//             className=" bg-white/5   w-[400px] h-[160px] mt-[40px] ml-[54px] pl-[24px] pt-[17px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]"
//             value={postInp}
//             onChange={(e) => setPostInp(e.target.value)}
//           ></textarea>
//           <div className='h-[47px] w-[200px] bg-white/5   ml-[120px] mt-[20px] rounded-[10px]  '>
//           <button className=" text-center w-full h-full rounded-[10px] " onClick={handleSubmit}>
//             Post Sumbit
//           </button>
//           </div>
          
//         </div>
//       )}
//       <br></br>
      
//       {clickpostbutton && (
//         <div className='absolute bg-[#0D0D0D]  flex flex-col w-[500px] max-h-[500px] top-[180px] left-[700px] rounded-[10px] '>
//   <h1 className='w-[122px] h-[24px] mt-[14px] ml-[19px] font-semibold font-sans'>ALL Post ({getallpost.length})</h1>
//   <div className=" overflow-y-scroll mt-[30px] ">
//     <ul className='text-white w-full  flex flex-col justify-center items-center space-y-10  p-2 pb-4'>
//       {getallpost.map((item, index) => (
//         <li className="text-white px-[32px] py-[17px] w-[450px] h-[105px] bg-white/5 rounded-[10px]" key={index} onClick={handleshowpost}>
//             {item.topic}<br></br>
//             <div className="mt-2">
//                 {item.comments?.length || 0} Comment&nbsp;&nbsp;&nbsp;{item.comments?.reduce((sum, comment) => sum + comment.replies, 0) || 0} Reply
//             </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>


  
// )}
// {showPost && (
//   <div>
//     {getallpost.map((item, index) => (
//       <div key={index}>
//         <p>Topic: {item.topic}</p>
//         <p>Comments:</p>
//         <ul>
//           {item.comments.map((comment, commentIndex) => (
//             <li key={commentIndex}>
//               Comment: {comment.commentText}, Replies: {comment.replies}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// )}

// {/* { topics.map((topic, i) => (
//   <div className='post' key={topic._id}>
//     <div className="postUsername">{topic.username}</div>
//     <hr />
//     <div className="text wrapperComment">{topic.topic}</div>
//     <div className="comments">
//       <div className="reply">
//         <input type="text" className='replyInp' id={topic._id} />
//         <button className='submit' onClick={() => submitComment(topic._id)}>
//           Comment
//         </button>
//       </div>
//       <hr />
//       {topic.comments?.map((comment, j) => (
//         <div className="comment" key={comment._id}>
//           <div className="commentText">
//             <div className="wrapper">
//               <div className="replyName">{comment.username}</div>
//               <div className="wrapperComment">{comment.comment}</div>
//               <div className="reply">
//                 <input type="text" className='replyInp' id={comment._id} />
//                 <button className='submit' onClick={() => replyComment(topic._id, comment._id)}>
//                   Reply
//                 </button>
//               </div>
//               {comment.replies?.map((reply, k) => (
//                 <div className="replyText" key={reply._id}>
//                   <div className="replyName">{reply.username}</div>
//                   <div className="wrapperComment2">{reply.reply}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   </div>
// ))} */}
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsPlusCircle } from 'react-icons/bs';

// const Home = () => {
//   const name_ = localStorage.getItem('username');
//   const username = name_.charAt(0).toUpperCase() + name_.slice(1);
//   const [clickcreatePost, setclickedcreatePost] = useState(false);
//   const [getallpost, setgetallpost] = useState([]);
//   const [clickpostbutton, setclickedpostbutton] = useState(false);
//   const [topics, setTopics] = useState([]);
//   const [showPost, setShowPost] = useState(false);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [showwholetext ,setshowwholetext]= useState(false);
//   const navigate = useNavigate();

  
//   function handlepost() {
//     setclickedcreatePost(!clickcreatePost);
//     setclickedpostbutton(false);
//     setShowPost(false);
//   }

//   function handleshowpost(index) {
//     if (selectedPost === index) {
//       // If the selected post is already the clicked one, close it
//       setSelectedPost(null);
//     } else {
//       setSelectedPost(index);
//       setShowPost(true);
//       setclickedpostbutton(false)
//     }
//   }

//   function handleclickedpostbutton() {
//     setclickedpostbutton(!clickpostbutton);
//     setclickedcreatePost(false);
//     setShowPost(false);
//   }

//   function handlegetallpost() {
//     getPosts();
//   }

//   const getPosts = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/post/topics', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         // const arr = data.map((item) => ({
//         //   topic: item.topic,
//         //   comments: item.comments.map((comment) => ({
//         //     commentText: comment.comment,
//         //     replies: comment.replies.length,
//         //     replies1: comment.replies.map((reply) => ({
//         //         replyText: reply.reply,
//         //         user: reply.user, // Include user information for replies
//         //       })),
//         //   })),
//         // }));
//         console.log(data)
//         const arr = data.map((item) => ({
//             topic: item.topic,
//             comments: item.comments.map((comment) => ({
//               commentText: comment.comment,
//               replies: comment.replies.length,
//               user: comment.username, // Include user information for comments
//               replies1: comment.replies.map((rep) => ({
//                 replyText: rep.reply,
//                 user: rep.username, // Include user information for replies
//               })),
//             })),
//           }));

//         setgetallpost(arr);
//         setTopics(data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//     const storedUsername = localStorage.getItem('username');
//     const id = localStorage.getItem('id');
//     const email = localStorage.getItem('email');
//     if (!storedUsername || !id || !email) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const [postInp, setPostInp] = useState('');

//   const handleSubmit = async () => {
//     if (!postInp) return alert('Please enter a topic');
//     try {
//       const res = await fetch('http://localhost:5000/post/topics', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           topic: postInp,
//           username: localStorage.getItem('username'),
//           userId: localStorage.getItem('id'),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         setTopics([...topics, data]);
//         setPostInp('');
//         getPosts();
//         setshowwholetext(true);
//         setSelectedPost(null);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const submitComment = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/post/topics/${id}/comments`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           comment: document.getElementById(id).value,
//           username: localStorage.getItem('username'),
//           userId: localStorage.getItem('id'),
//         }),
//       });
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const replyComment = async (topicId, commentId) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/post/topics/${topicId}/comments/${commentId}/replies`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             reply: document.getElementById(commentId).value,
//             username: localStorage.getItem('username'),
//             userId: localStorage.getItem('id'),
//           }),
//         }
//       );
//       const data = await res.json();
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         getPosts();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='home bg-black h-screen w-screen overflow-y-scroll relative text-white '>
//       <div className='h-[40px] w-[42.22px]'></div>
//       <div className='text-white font-[Public sans] font-bold leading-[23.5px] text-[20px] w-fit p-2 h-[40px] mt-[27px] ml-[1088px]'>
//         Welcome, {username}
//       </div>
//       <button
//         onClick={handlepost}
//         className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[138px] rounded-[10px] flex items-center justify-center'
//       >
//         <span className='w-[24px] h-[24px]  inline-flex items-center justify-center rounded-full mr-2'>
//           <BsPlusCircle />
//         </span>
//         Create Post
//       </button>
//       <button
//         onClick={() => {
//           handlegetallpost();
//           handleclickedpostbutton();
//         }}
//         className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[20px] rounded-[10px] '
//       >
//         All Post
//       </button>
//       {clickcreatePost && (
//         <div className='absolute bg-[#0D0D0D] flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px]'>
//           <h1 className=' mt-[14px] ml-[19px] h-[24px] w-[111px] font-semibold text-[20px] leading-23.5 font-public-sans'>
//             Create Post
//           </h1>
//           <textarea
//             placeholder='Post Title'
//             readOnly
//             className='bg-white/5 w-[400px] h-[58px] mt-[68px] ml-[54px] pl-[24px] pt-[10px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]'
//           ></textarea>
//           <textarea
//             placeholder='Describe your post...'
//             className=' bg-white/5   w-[400px] h-[160px] mt-[40px] ml-[54px] pl-[24px] pt-[17px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]'
//             value={postInp}
//             onChange={(e) => setPostInp(e.target.value)}
//           ></textarea>
//           <div className='h-[47px] w-[200px] bg-white/5   ml-[120px] mt-[20px] rounded-[10px]  '>
//             <button className=' text-center w-full h-full rounded-[10px] ' onClick={handleSubmit}>
//               Post Sumbit
//             </button>
//           </div>
//         </div>
//       )}
//       <br></br>
//       {clickpostbutton && (
//         <div className='absolute bg-[#0D0D0D]  flex flex-col w-[500px] max-h-[500px] top-[180px] left-[700px] rounded-[10px] '>
//           <h1 className='w-[122px] h-[24px] mt-[14px] ml-[19px] font-semibold font-sans'>
//             ALL Post ({getallpost.length})
//           </h1>
//           <div className=' overflow-y-scroll mt-[30px] '>
//             <ul className='text-white w-full  flex flex-col justify-center items-center space-y-10  p-2 pb-4'>
//               {getallpost.map((item, index) => (
//                 <li
//                   className={`text-white px-[32px] py-[17px] w-[450px] h-[105px] bg-white/5 rounded-[10px] ${
//                     selectedPost === index ? 'border-2 border-blue-500' : ''
//                   }`}
//                   key={index}
//                   onClick={() => handleshowpost(index)}
//                 >
//                   {item.topic}
//                   <br></br>
//                   <div className='mt-2'>
//                     {item.comments?.length || 0} Comment&nbsp;&nbsp;&nbsp;
//                     {item.comments?.reduce((sum, comment) => sum + comment.replies, 0) || 0} Reply
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//       {showPost && selectedPost !== null && (
//   <div className='font-sans text-white/50 absolute bg-[#0D0D0D]  flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px] overflow-y-auto '>
//     <h1 className='w-[122px] h-[24px] mt-[14px] ml-[19px] font-semibold font-sans text-white'>
//       ALL Post ({getallpost.length})
//     </h1>
//     <p className='mx-[32px] my-[17px] w-[156px] h-[24px]'>
//       {getallpost[selectedPost].topic.slice(0, 5)}
//     </p>
//     <p className='px-[16px] py-[17px] mx-auto w-[469px] h-auto max-h-[fit-content] '>
//       {getallpost[selectedPost].topic}
//     </p>
//     <div className='mt-2 mx-[32px] italic'>
//       {getallpost[selectedPost].comments?.length || 0} Comment&nbsp;&nbsp;&nbsp;
//       {getallpost[selectedPost].comments?.reduce((sum, comment) => sum + comment.replies, 0) || 0} Replies
//     </div>
//     <p className='mt-2 mx-[32px]'>Comments</p>
//     <ul className='  mx-[32px] '>
//       {getallpost[selectedPost].comments.map((comment, commentIndex) => (
//         <li key={commentIndex} className='p-0.5'>
//           <p className=''>
//            {comment.user}: {comment.commentText}
//           </p>
//           {(
//             <ul className='mx-[88px]'>
//               {comment.replies1.map((reply, replyIndex) => (
//                 <li key={replyIndex} className='p-0.5'>
//                   <p>
//                      {reply.user}: {reply.replyText}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   </div>
// )}
              
// { showwholetext && (topics.map((topic, i) => (
//   <div className='post' key={topic._id}>
//     <div className="postUsername">{topic.username}</div>
//     <hr />
//     <div className="text wrapperComment">{topic.topic}</div>
//     <div className="comments">
//       <div className="reply">
//         <input type="text" className='replyInp' id={topic._id} />
//         <button className='submit' onClick={() => submitComment(topic._id)}>
//           Comment
//         </button>
//       </div>
//       <hr />
//       {topic.comments?.map((comment, j) => (
//         <div className="comment" key={comment._id}>
//           <div className="commentText">
//             <div className="wrapper">
//               <div className="replyName">{comment.username}</div>
//               <div className="wrapperComment">{comment.comment}</div>
//               <div className="reply">
//                 <input type="text" className='replyInp' id={comment._id} />
//                 <button className='submit' onClick={() => replyComment(topic._id, comment._id)}>
//                   Reply
//                 </button>
//               </div>
//               {comment.replies?.map((reply, k) => (
//                 <div className="replyText" key={reply._id}>
//                   <div className="replyName">{reply.username}</div>
//                   <div className="wrapperComment2">{reply.reply}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   </div>
// )))}
// </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';

const Home = () => {
  const name_ = localStorage.getItem('username');
  const username = name_.charAt(0).toUpperCase() + name_.slice(1);
  const [clickcreatePost, setclickedcreatePost] = useState(false);
  const [getallpost, setgetallpost] = useState([]);
  const [clickpostbutton, setclickedpostbutton] = useState(false);
  const [topics, setTopics] = useState([]);
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showwholetext, setshowwholetext] = useState(false);
  const [showallpost,setshowallpost]=useState(false);
  const navigate = useNavigate();

  function handlepost() {
    setclickedcreatePost(!clickcreatePost);
    setclickedpostbutton(false);
    setShowPost(false);
    setshowallpost(false);
  }

  function handleshowpost(index) {
    if (selectedPost === index) {
      setSelectedPost(null);
    } else {
      setSelectedPost(index);
      setShowPost(true);
      setclickedpostbutton(false);
      setshowwholetext(false);
      setshowallpost(false);
    }
  }

  function handleclickedpostbutton() {
    setclickedpostbutton(!clickpostbutton);
    setclickedcreatePost(false);
    setShowPost(false);
    setshowwholetext(false);
    setshowallpost(false);

  }

  function handlegetallpost() {
    getPosts();
  }

  function handleshowallpost()
  {
    setshowallpost(!showallpost);
  }
  const getPosts = async () => {
    try {
      const res = await fetch('hhttps://anchor-assignment-yjos.vercel.app/post/topics', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      } else {
        const arr = data.map((item) => ({
          topic: item.topic,
          comments: item.comments.map((comment) => ({
            commentText: comment.comment,
            replies: comment.replies.length,
            user: comment.username,
            replies1: comment.replies.map((rep) => ({
              replyText: rep.reply,
              user: rep.username,
            })),
          })),
        }));

        setgetallpost(arr);
        setTopics(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
    const storedUsername = localStorage.getItem('username');
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    if (!storedUsername || !id || !email) {
      navigate('/login');
    }
  }, [navigate]);

  const [postInp, setPostInp] = useState('');

  const handleSubmit = async () => {
    if (!postInp) return alert('Please enter a topic');
    try {
      const res = await fetch('https://anchor-assignment-yjos.vercel.app/post/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: postInp,
          username: localStorage.getItem('username'),
          userId: localStorage.getItem('id'),
        }),
      });
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      } else {
        setTopics([...topics, data]);
        setPostInp('');
        getPosts();
        setshowwholetext(true);
        setclickedcreatePost(false);
        setShowPost(false);
        setshowallpost(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitComment = async (id) => {
    try {
      const res = await fetch(`https://anchor-assignment-yjos.vercel.app/post/topics/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: document.getElementById(id).value,
          username: localStorage.getItem('username'),
          userId: localStorage.getItem('id'),
        }),
      });
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      } else {
        getPosts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const replyComment = async (topicId, commentId) => {
    try {
      const res = await fetch(
        `https://anchor-assignment-yjos.vercel.app/post/topics/${topicId}/comments/${commentId}/replies`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reply: document.getElementById(commentId).value,
            username: localStorage.getItem('username'),
            userId: localStorage.getItem('id'),
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      } else {
        getPosts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='home bg-black h-screen w-screen overflow-y-scroll relative text-white '>
      <div className='h-[40px] w-[42.22px]'></div>
      <div className='text-white font-public-sans font-bold leading-[23.5px] text-[20px] w-fit p-2 h-[40px] mt-[27px] ml-[1088px]'>
        Welcome, {username}
      </div>
      <button
        onClick={handlepost}
        className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[138px] rounded-[10px] flex items-center justify-center font-mono'
      >
        <span className='w-[24px] h-[24px]  inline-flex items-center justify-center rounded-full mr-2'>
          <BsPlusCircle />
        </span>
        Create Post
      </button>
      <button
        onClick={() => {
          handlegetallpost();
          handleclickedpostbutton();
        }}
        className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[20px] rounded-[10px] font-mono '
      >
        All Post
      </button>
    
      <button
        onClick={handleshowallpost}
        className='w-[290px] bg-white/10 ml-[201px] h-[57px] mt-[20px] rounded-[10px] flex items-center justify-center font-mono '
      >
        Show Posts
      </button>

      {clickcreatePost && (
        <div className='absolute bg-[#0D0D0D] flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px]'>
          <h1 className=' mt-[14px] ml-[19px] h-[24px] w-[111px] font-semibold text-[20px] leading-23.5 font-public-sans'>
            Create Post
          </h1>
          <textarea
            placeholder='Post Title'
            readOnly
            className='bg-white/5 w-[400px] h-[58px] mt-[68px] ml-[54px] pl-[24px] pt-[10px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]'
          ></textarea>
          <textarea
            placeholder='Describe your post...'
            className=' bg-white/5   w-[400px] h-[160px] mt-[40px] ml-[54px] pl-[24px] pt-[17px] text-20 leading-23.5 font-public-sans font-semibold border-2 border-transparent rounded-[10px]'
            value={postInp}
            onChange={(e) => setPostInp(e.target.value)}
          ></textarea>
          <div className='h-[47px] w-[200px] bg-white/5   ml-[120px] mt-[20px] rounded-[10px]  '>
            <button className=' text-center w-full h-full rounded-[10px] ' onClick={handleSubmit}>
              Post Sumbit
            </button>
          </div>
        </div>
      )}
      
      {clickpostbutton && (
        <div className='absolute bg-[#0D0D0D]  flex flex-col w-[500px] max-h-[500px] top-[180px] left-[700px] rounded-[10px] '>
          <h1 className='w-[122px] h-[24px] mt-[14px] ml-[19px] font-semibold font-sans'>
            ALL Post ({getallpost.length})
          </h1>
          <div className=' overflow-y-scroll mt-[30px] '>
            <ul className='text-white w-full  flex flex-col justify-center items-center space-y-10  p-2 pb-4'>
              {getallpost.map((item, index) => (
                <li
                  className={`text-white px-[32px] py-[17px] w-[450px] h-[105px] bg-white/5 rounded-[10px] ${
                    selectedPost === index ? 'border-2 border-blue-500' : ''
                  }`}
                  key={index}
                  onClick={() => handleshowpost(index)}
                >
                  {item.topic}
                  <br></br>
                  <div className='mt-2'>
                    {item.comments?.length || 0} Comment&nbsp;&nbsp;&nbsp;
                    {item.comments?.reduce((sum, comment) => sum + comment.replies, 0) || 0} Reply
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showPost && selectedPost !== null && (
        <div className='font-sans text-white/50 absolute bg-[#0D0D0D]  flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px] overflow-y-auto '>
          <h1 className='w-[122px] h-[24px] mt-[14px] ml-[19px] font-semibold font-sans text-white'>
            ALL Post ({getallpost.length})
          </h1>
          <p className='mx-[32px] my-[17px] w-[156px] h-[24px]'>
            {getallpost[selectedPost].topic.slice(0, 5)}
          </p>
          <p className='px-[16px] py-[17px] mx-auto w-[469px] h-auto max-h-[fit-content] '>
            {getallpost[selectedPost].topic}
          </p>
          <div className='mt-2 mx-[32px] italic'>
            {getallpost[selectedPost].comments?.length || 0} Comment&nbsp;&nbsp;&nbsp;
            {getallpost[selectedPost].comments?.reduce((sum, comment) => sum + comment.replies, 0) || 0} Replies
          </div>
          <p className='mt-2 mx-[32px]'>Comments</p>
          <ul className='  mx-[32px] '>
            {getallpost[selectedPost].comments.map((comment, commentIndex) => (
              <li key={commentIndex} className='p-0.5'>
                <p className=''>
                  {comment.user}: {comment.commentText}
                </p>
                {(
                  <ul className='mx-[88px]'>
                    {comment.replies1.map((reply, replyIndex) => (
                      <li key={replyIndex} className='p-0.5'>
                        <p>
                          {reply.user}: {reply.replyText}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      { showwholetext && (
  <div className='absolute bg-[#0D0D0D] flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px] overflow-y-auto'>
     <p className='mx-[32px] mt-[30px]'>ALL Post ({getallpost.length})</p>
     {topics.map((topic) => (
      
        <div className=' font-mono text-white/50 wrapper w-[430px] mb-2  mx-auto my-[20px] h-auto bg-white/5 rounded-[10px]'>
          <h1 className='mx-[32px] mt-3 font-semibold'>Post By : {topic.username}</h1>
          <p className='mx-[32px] mt-3 font-bold'>Title : {topic.topic.slice(0,5)}</p>
          <div className='t mx-[32px] mt-4 pt-3 px-4 h-auto w-[380px] rounded-[10px] bg-transparent'>
             Description: <div className="mt-1 p-4">{topic.topic}</div>
          </div>
          <div className="comments mx-[32px] "> 
          <div className="reply flex flex-col space-y-2">
            <p>Comment here</p>
            <input type='text'
            placeholder='Enter Your Comment...'
            className='replyInp text-center p-2  w-[300px] h-[34px] rounded-[7px] bg-black/50  text-white/50'
            id={topic._id}
            ></input>
            <button className='submit rounded-md bg-zinc-800 text-white w-[100px] h-[30px] ' onClick={() => submitComment(topic._id)}>
              Comment
            </button>
          </div>
        
          {topic.comments?.map((comment, j) => (
            <div className="comment_" key={comment._id}>
              <div className="commentText_">
                <div className="wrapper_ flex flex-col space-y-2 mb-4">
                <div className='flex flex-row space-x-2'>

                  <div className="replyName_ italic">{comment.username}:</div>
                  <div className="wrapperComment">{comment.comment}</div>
                  
                </div>
                
                  <div className=" flex flex-col space-y-4"> {/* Added space-y styling */}
                    
                    <input type="text" placeholder='Enter Your Reply...' className='text-white/50 text-center bg-black/50 p-2  w-[300px] h-[34px] rounded-[7px]' id={comment._id} />
                    <button className='bg-zinc-800 text-white w-[100px] h-[30px] rounded-[10px]' onClick={() => replyComment(topic._id, comment._id)}>
                      Reply
                    </button>
                  </div>
                  {comment.replies?.map((reply, k) => (
                    <div className="replyText flex  flex-row space-x-2 " key={reply._id}> {/* Added space-y styling */}
                      <div className="replyName italic">{reply.username} :</div>
                      <div className="wrapperComment2">{reply.reply}</div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

        </div>
      
    ))}
  </div>
)}

{ showallpost && (
  <div className='absolute bg-[#0D0D0D] flex flex-col w-[500px] h-[500px] top-[180px] left-[700px] rounded-[10px] overflow-y-auto'>
     <p className='mx-[32px] mt-[30px]'>ALL Post ({getallpost.length})</p>
     {topics.map((topic) => (
      
        <div className=' font-mono text-white/50 wrapper w-[430px] mb-2  mx-auto my-[20px] h-auto bg-white/5 rounded-[10px]'>
          <h1 className='mx-[32px] mt-3 font-semibold'>Post By : {topic.username}</h1>
          <p className='mx-[32px] mt-3 font-bold'>Title : {topic.topic.slice(0,5)}</p>
          <div className='t mx-[32px] mt-4 pt-3 px-4 h-auto w-[380px] rounded-[10px] bg-transparent'>
             Description: <div className="mt-1 p-4">{topic.topic}</div>
          </div>
          <div className="comments mx-[32px] "> 
          <div className="reply flex flex-col space-y-2">
            <p>Comment here</p>
            <input type='text'
            placeholder='Enter Your Comment...'
            className='replyInp text-center p-2  w-[300px] h-[34px] rounded-[7px] bg-black/50  text-white/50'
            id={topic._id}
            ></input>
            <button className='submit rounded-md bg-zinc-800 text-white w-[100px] h-[30px] ' onClick={() => submitComment(topic._id)}>
              Comment
            </button>
          </div>
        
          {topic.comments?.map((comment, j) => (
            <div className="comment_" key={comment._id}>
              <div className="commentText_">
                <div className="wrapper_ flex flex-col space-y-2 mb-4">
                <div className='flex flex-row space-x-2'>

                  <div className="replyName_ italic">{comment.username}:</div>
                  <div className="wrapperComment">{comment.comment}</div>
                  
                </div>
                
                  <div className=" flex flex-col space-y-4"> {/* Added space-y styling */}
                    
                    <input type="text" placeholder='Enter Your Reply...' className='text-white/50 text-center bg-black/50 p-2  w-[300px] h-[34px] rounded-[7px]' id={comment._id} />
                    <button className='bg-zinc-800 text-white w-[100px] h-[30px] rounded-[10px]' onClick={() => replyComment(topic._id, comment._id)}>
                      Reply
                    </button>
                  </div>
                  {comment.replies?.map((reply, k) => (
                    <div className="replyText flex  flex-row space-x-2 " key={reply._id}> {/* Added space-y styling */}
                      <div className="replyName italic">{reply.username} :</div>
                      <div className="wrapperComment2">{reply.reply}</div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

        </div>
      
    ))}
  </div>
)}


    </div>
  );
};

export default Home;
