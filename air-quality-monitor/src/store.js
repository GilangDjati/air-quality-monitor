// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './slices/airQualitySlice';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
  },
});

export default store;
