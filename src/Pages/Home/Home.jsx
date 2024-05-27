// import React, { useState } from 'react';
// import './Home.css';
// import Sidebar from '../../Component/Sidebar/Sidebar';
// import Feedback from '../../Component/Feed/Feedback';
// import Navigation from '../../Component/Navbar/Navigation';
// import CategoryBar from '../../Component/Navbar/CategoryBar';

// const Home = ({ sidebar }) => {
//   const [showFeedback, setShowFeedback] = useState(true);

//   const handleSearch = () => {
//     setShowFeedback(false);
//   };

//   return (
//     <>
    
//       <Navigation setSidebar={setShowFeedback} onSearch={handleSearch} />
//       <div className={`container ${sidebar ? '' : 'large-container'}`}>
//       <CategoryBar/>
//         {showFeedback && <Feedback />}
        
//       </div>
    
//     </>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import Feedback from '../../Component/Feed/Feedback';
// import Navigation from '../../Component/Navbar/Navigation';
// import axios from 'axios';
// const Home = ({ sidebar }) => {
//   const [videos, setVideos] = useState([]);
//   const [showFeedback, setShowFeedback] = useState(true);

// useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         let res = await axios({
//           method: "GET",
//           url: 'https://www.googleapis.com/youtube/v3/search',
//           params: {
//             part: 'snippet',
//             maxResults: 25,
//             key: 'AIzaSyD3oPoVdhxGl2Il0VWILbNLpL8H7lHeqaE',
//             q: 'video',
//             type: 'video'
//           }
//         });

//         if (res.data && res.data.items) {
//           const result = res.data.items.map(item => ({
//             id: item.id.videoId,
//             title: item.snippet.title,
//             createdAt: item.snippet.publishedAt,
//             author: item.snippet.channelTitle,
//             description: item.snippet.description,
//             thumbnail: item.snippet.thumbnails.default.url,
//           }));
//           setVideos(result);
//         }
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <>
//       <Navigation setSidebar={setShowFeedback} onSearch={() => setShowFeedback(false)} />
//       <div className={`container ${sidebar ? '' : 'large-container'}`}>
//         {showFeedback && <Feedback videos={videos} />}
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import './Home.css';
import Feedback from '../../Component/Feed/Feedback';
import Navigation from '../../Component/Navbar/Navigation';
import axios from 'axios';
import CategoryBar from '../../Component/Navbar/CategoryBar';
const Home = ({ sidebar }) => {
  const [videos, setVideos] = useState([]);
  const [showFeedback, setShowFeedback] = useState(true);

useEffect(() => {
    const fetchVideos = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: 'https://www.googleapis.com/youtube/v3/search',
          params: {
            part: 'snippet',
            maxResults: 25,
            key: 'AIzaSyD3oPoVdhxGl2Il0VWILbNLpL8H7lHeqaE',
            q: 'video',
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
            thumbnail: item.snippet.thumbnails.default.url,
          }));
          setVideos(result);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Navigation setSidebar={setShowFeedback} onSearch={() => setShowFeedback(false)} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
      <CategoryBar/>
        {showFeedback && <Feedback videos={videos} />}
      </div>
    </>
  );
};

export default Home;
