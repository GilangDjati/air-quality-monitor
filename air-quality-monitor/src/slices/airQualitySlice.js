// src/slices/airQualitySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAirQualityData } from '../api/airQuality';

export const fetchAirQuality = createAsyncThunk(
  'airQuality/fetchAirQuality',
  async ({ latitude, longitude }) => {
    const response = await fetchAirQualityData(latitude, longitude);
    return response;
  }
);

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState: {
    airQuality: null,
    location: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.airQuality = action.payload.airQuality;
        state.location = action.payload.location;
      })
      .addCase(fetchAirQuality.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default airQualitySlice.reducer;
