import React, { useState } from 'react';
import axios from 'axios'
import './YoutubeSearch.css'
import moment from 'moment'
import Sidebar from '../Component/Sidebar/Sidebar';
import CategoryBar from '../Component/Navbar/CategoryBar';
const YoutubeSearch = ({sidebar}) => {
  const [video, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    let res = await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/search',
      "params": {
        'part': 'snippet',
        'maxResults': '25',
        'key': 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
        'q': query,
        'type': 'video'
      }
    })
    console.log('check response', res);
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map(item => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object)
        })
      }
      console.log('Check result', result);
      setVideos(result);
    }
    console.log("Check", res);
  }
  return (
    <>
    <div className='youtube-search-container'>
      <div className='yt-search'>
        <input type="text" placeholder='Search'
          value={query}
          onChange={(event) => setQuery(event.target.value)} />
        <button type='button' onClick={handleSearch}>Search</button>
        {video && video.length > 0 && video.map(item => {
          <CategoryBar/>
          return (      
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe className='ifram-yt'
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="Hẹn Em Ở Lần Yêu Thứ 2, Như Anh Đã Thấy Em, Lần Sau Cuối | Nhạc Lofi Indie Nhẹ Nhàng Freak D Mix"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="right">
                <div className='title'>
                  {item.title}
                </div>
                <div className='created-at'>
                  Created At: {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss A')}
                </div>
                <div className='author'>
                  {item.author}
                </div>
                <div className='description'>
                  {item.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default YoutubeSearch
