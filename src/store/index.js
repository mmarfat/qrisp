import { configureStore } from '@reduxjs/toolkit';
import qrReducer from './slices/qrSlice';

export const store = configureStore({
  reducer: {
    qr: qrReducer,
  },
});