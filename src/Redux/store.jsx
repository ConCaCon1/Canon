import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import videosReducer from '../reducers/videosReducer';
import sidebarReducer from '../reducers/sidebarReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  videos: videosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
