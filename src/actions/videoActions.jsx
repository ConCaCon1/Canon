import axios from 'axios';
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE';
export const LOAD_MORE_VIDEOS = 'LOAD_MORE_VIDEOS';

export const fetchVideosRequest = () => ({
   type: FETCH_VIDEOS_REQUEST,
});

export const fetchVideosSuccess = (videos, nextPageToken) => ({
   type: FETCH_VIDEOS_SUCCESS,
   videos,
   nextPageToken,
});

export const fetchVideosFailure = (error) => ({
   type: FETCH_VIDEOS_FAILURE,
   error,
});

export const loadMoreVideos = () => ({
   type: LOAD_MORE_VIDEOS,
});

export const fetchVideos = (pageToken = '') => async (dispatch) => {
   dispatch(fetchVideosRequest());
   try {
      const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
         params: {
            part: 'snippet',
            maxResults: 15,
            key: 'AIzaSyBHgvhCvAXKNefrd7AK6PMqpe_iS_vVeX8',
            q: 'video',
            type: 'video',
            pageToken: pageToken,
         },
      });
      const newVideos = res.data.items.map((item) => ({
         id: item.id.videoId,
         title: item.snippet.title,
         createdAt: item.snippet.publishedAt,
         author: item.snippet.channelTitle,
         description: item.snippet.description,
         thumbnail: item.snippet.thumbnails.medium.url,
      }));
      dispatch(fetchVideosSuccess(newVideos, res.data.nextPageToken));
   } catch (error) {
      dispatch(fetchVideosFailure(error.message));
   }
};
