// import React, { useState, useEffect } from 'react';
// import './Feedback.css';
// import axios from 'axios';
// import moment from 'moment';

// const Feedback = ({ sidebar }) => {
//   const [videos, setVideos] = useState([]);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState('YOUR_QUERY');  // Ví dụ: 'Avenger'

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async (pageToken = '') => {
//     setLoading(true);
//     try {
//       let res = await axios({
//         method: "GET",
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         params: {
//           part: 'snippet',
//           maxResults: '25',
//           key: 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
//           q: query,
//           type: 'video',
//           pageToken: pageToken,
//         }
//       });

//       if (res.data && res.data.items) {
//         const result = res.data.items.map(item => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           createdAt: item.snippet.publishedAt,
//           author: item.snippet.channelTitle,
//           description: item.snippet.description,
//           thumbnail: item.snippet.thumbnails.default.url
//         }));
//         setVideos(prevVideos => [...prevVideos, ...result]);
//         setNextPageToken(res.data.nextPageToken);
//       }
//     } catch (error) {
//       console.error("Search error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadMore = () => {
//     if (nextPageToken) {
//       fetchVideos(nextPageToken);
//     }
//   };

//   return (
//     <div className='feed'>
//       {videos.map((video) => (
//         <div className="card" key={video.id}>
//           <img src={video.thumbnail} alt={video.title} />
//           <h2>{video.title}</h2>
//           <h3>{video.author}</h3>
//           <p>{moment(video.createdAt).fromNow()} &bull; {video.description}</p>
//         </div>
//       ))}
//       <div className="load-more-container">
//         {loading ? (
//           <p>Đang tải...</p>
//         ) : (
//           <button onClick={handleLoadMore}>Hiện thêm</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Feedback;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos, loadMoreVideos } from '../../actions/videoActions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Feedback.css'
export default function Feedback() {
  const dispatch = useDispatch();
  const { videos, visibleVideos, nextPageToken, loading, error } = useSelector(state => state.videos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const loadMore = () => {
    dispatch(loadMoreVideos());
    if (nextPageToken) {
      dispatch(fetchVideos(nextPageToken));
    }
  };
  return (
    <div className='feed'>
      {videos.slice(0, visibleVideos).map((video, index) => (
        <Link to={`video/${video.id}`} className='card' key={`${video.id}-${index}`}>
          <img src={video.thumbnail} alt={video.title} />
          <h2>{video.title}</h2>
          <h3>{video.author}</h3>
          <p>{moment(video.createdAt).fromNow()} &bull; {video.description}</p>
        </Link>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {videos.length > visibleVideos && (
        <div className="load-more-container">
          <button onClick={loadMore}>Load more</button>
        </div>
      )}
    </div>
  )
}