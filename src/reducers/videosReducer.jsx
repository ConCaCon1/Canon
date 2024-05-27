import { FETCH_VIDEOS_FAILURE, FETCH_VIDEOS_REQUEST, FETCH_VIDEOS_SUCCESS, LOAD_MORE_VIDEOS } from "../actions/videoActions";

const initialState = {
  videos: [],
  visibleVideos: 15,
  nextPageToken: null,
  load: false,
  error: null,
};
const videosReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.videos],
        nextPageToken: action.nextPageToken,
        loading: false,
      };
    case FETCH_VIDEOS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LOAD_MORE_VIDEOS:
      return { ...state, visibleVideos: state.visibleVideos + 15};
    default:
      return state;
  }
};
export default videosReducers;