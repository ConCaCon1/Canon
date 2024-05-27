// import React, { useState } from 'react'
// import './Navigation.css'
// import menu_icon from '../../images/images.png';
// import logo from '../../images/hinh-anh-bieu-tuong-logo-Youtube-PNG.png';
// import search_icon from '../../youtube_clone_assets/assets/search.png';
// import upload_icon from '../../images/1000_F_228253920_JDxct27B2o2dGP4YYLug6XYTGphQZDji.jpg';
// import notification_icon from '../../youtube_clone_assets/assets/notification.png';
// import profile_icon from '../../images/84343221_2576845462604261_1516937596603727872_n.jpg';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// const Navigation = ({ setSidebar,onSearch }) => {
//   const [video, setVideos] = useState([]);
//   const [query, setQuery] = useState("");
//   const handleSearch = async () => {
//     let res = await axios({
//       "method": "GET",
//       "url": 'https://www.googleapis.com/youtube/v3/search',
//       "params": {
//         'part': 'snippet',
//         'maxResults': '25',
//         'key': 'AIzaSyAtwzvO0EIF_XIxR5vrKTQOM9FCkNcPUgo',
//         'q': query,
//         'type': 'video'
//       }
//     })
//     console.log('check response', res);
//     if (res && res.data && res.data.items) {
//       let raw = res.data.items;
//       let result = [];
//       if (raw && raw.length > 0) {
//         raw.map(item => {
//           let object = {};
//           object.id = item.id.videoId;
//           object.title = item.snippet.title;
//           object.createdAt = item.snippet.publishedAt;
//           object.author = item.snippet.channelTitle;
//           object.description = item.snippet.description;
//           result.push(object)
//         })
//       }
//       console.log('Check result', result);
//       setVideos(result);
//     }
//     console.log("Check", res);
//   }
//   const navigate = useNavigate();
//   return (
//     <>
//       <nav className='flex-div'>
//         <div className="nav-left flex-div">
//           <img className="menu-icon" onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} alt="" />
//           <img className="logo" src={logo} alt="" />
//         </div>
//         <div className="nav-middle flex-div">
//           <div className="search-box flex-div">
//             <input type="text" placeholder='Search' value={query} onChange={(event) => setQuery(event.target.value)} />
//             <img src={search_icon} alt="" onClick={handleSearch} />
//           </div>
//         </div>
//         <div className="nav-right flex-div">
//           <img src={upload_icon} alt="" />
//           <img src={notification_icon} alt="" />
//           <img src={profile_icon} alt="" className='user-icon' />
//         </div>
//       </nav>
//       {video && video.length > 0 && video.map(item => {
//         return (
//           <div className="yt-result" key={item.id}>
//             <div className="left">
//               <iframe className='ifram-yt'
//                 src={`https://www.youtube.com/embed/${item.id}`}
//                 title="Hẹn Em Ở Lần Yêu Thứ 2, Như Anh Đã Thấy Em, Lần Sau Cuối | Nhạc Lofi Indie Nhẹ Nhàng Freak D Mix"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen>
//               </iframe>
//             </div>
//             <div className="right">
//               <div className='title'>
//                 {item.title}
//               </div>
//               <div className='created-at'>
//                 Created At: {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss A')}
//               </div>
//               <div className='author'>
//                 {item.author}
//               </div>
//               <div className='description'>
//                 {item.description}
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default Navigation
// import React, { useState } from 'react';
// import './Navigation.css';
// import menu_icon from '../../images/images.png';
// import logo from '../../images/hinh-anh-bieu-tuong-logo-Youtube-PNG.png';
// import search_icon from '../../youtube_clone_assets/assets/search.png';
// import upload_icon from '../../images/1000_F_228253920_JDxct27B2o2dGP4YYLug6XYTGphQZDji.jpg';
// import notification_icon from '../../youtube_clone_assets/assets/notification.png';
// import profile_icon from '../../images/1-intro-photo-final.jpg';
// import axios from 'axios';
// import moment from 'moment';
// const Navigation = ({ setSidebar, onSearch }) => {
//   const [videos, setVideos] = useState([]);
//   const [query, setQuery] = useState("");

//   const handleSearch = async () => {
//     try {
//       let res = await axios({
//         method: "GET",
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         params: {
//           part: 'snippet',
//           maxResults: '25',
//           key: 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
//           q: query,
//           type: 'video'
//         }
//       });

//       if (res.data && res.data.items) {
//         const result = res.data.items.map(item => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           createdAt: item.snippet.publishedAt,
//           author: item.snippet.channelTitle,
//           description: item.snippet.description,
//         }));
//         setVideos(result);
//       }
//       onSearch(); // Hide Feedback during search
//     } catch (error) {
//       console.error("Search error:", error);
//     }
//   };

//   return (
//     <>
//       <nav className='flex-div'>
//         <div className="nav-left flex-div">
//           <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="menu" />
//           <img className="logo" src={logo} alt="logo" />
//         </div>
//         <div className="nav-middle flex-div">
//           <div className="search-box flex-div">
//             <input
//               type="text"
//               placeholder='Search'
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <img src={search_icon} alt="search" onClick={handleSearch} />
//           </div>
//         </div>
//         <div className="nav-right flex-div">
//           <img src={upload_icon} alt="upload" />
//           <img src={notification_icon} alt="notifications" />
//           <img src={profile_icon} alt="profile" className='user-icon' />
//         </div>
//       </nav>
//       <div className="youtube-search-container">
//         {videos.length > 0 && videos.map(item => (
//           <div className="yt-result" key={item.id}>
//             <div className="left">
//               <iframe
//                 className='ifram-yt'
//                 src={`https://www.youtube.com/embed/${item.id}`}
//                 title={item.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen>
//               </iframe>
//             </div>
//             <div className="right">
//               <div className='title'>{item.title}</div>
//               <div className='created-at'>
//                 Created At: {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss A')}
//               </div>
//               <div className='author'>{item.author}</div>
//               <div className='description'>{item.description}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Navigation;
import React, { useState } from 'react';
import './Navigation.css';
import menu_icon from '../../images/images.png';
import logo from '../../images/hinh-anh-bieu-tuong-logo-Youtube-PNG.png';
import search_icon from '../../youtube_clone_assets/assets/search.png';
import upload_icon from '../../images/1000_F_228253920_JDxct27B2o2dGP4YYLug6XYTGphQZDji.jpg';
import notification_icon from '../../youtube_clone_assets/assets/notification.png';
import axios from 'axios';
import moment from 'moment';
const Navigation = ({ setSidebar, onSearch }) => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [pageToken, setPageToken] = useState("");
  const handleSearch = async () => {
    try {
      let res = await axios({
        method: "GET",
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          maxResults: 15,
          key: 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
          q: query,
          type: 'video'
        }
      });
  
      if (res.data && res.data.items) {
        const result = res.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          createdAt: item.snippet.publishedAt,
          author: item.snippet.channelTitle,
          description: item.snippet.description,
        }));
        setVideos(result);
        setPageToken(res.data.nextPageToken || "");
      }
      onSearch();
    } catch (error) {
      console.error("Search error:", error);
    }
  };
  
  const loadMore = async () => {
    if (!pageToken) return;
    try {
      let res = await axios({
        method: "GET",
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          maxResults: 15, 
          pageToken: pageToken,
          key: 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
          q: query,
          type: 'video'
        }
      });
  
      if (res.data && res.data.items) {
        const result = res.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          createdAt: item.snippet.publishedAt,
          author: item.snippet.channelTitle,
          description: item.snippet.description,
        }));
        setVideos(prevVideos => [...prevVideos, ...result]);
        setPageToken(res.data.nextPageToken || "");
      }
    } catch (error) {
      console.error("Load more error:", error);
    }
  };
  
  return (
    <>
      <nav className='flex-div'>
        <div className="nav-left flex-div">
          <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="menu" />
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input
              type="text"
              placeholder='Search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <img src={search_icon} alt="search" onClick={handleSearch} />
          </div>
        </div>
        <div className="nav-right flex-div">
          <img src={upload_icon} alt="upload" />
          <img src={notification_icon} alt="notifications" />
       
        </div>
      </nav>
      <div className="youtube-search-container">
        {videos.length > 0 && videos.map(item => (
          <div className="yt-result" key={item.id}>
            <div className="left">
              <iframe
                className='ifram-yt'
                src={`https://www.youtube.com/embed/${item.id}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>
            <div className="right">
              <div className='title'>{item.title}</div>
              <div className='created-at'>
                Created At: {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss A')}
              </div>
              <div className='author'>{item.author}</div>
              <div className='description'>{item.description}</div>
            </div>
          </div>
        ))}
        {pageToken&&(<button className='load-more-button' onClick={loadMore}>Load More Information</button>)}
      </div>
    </>
  );
};

export default Navigation;


