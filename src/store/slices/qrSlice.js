import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qrData: {},
};

const qrSlice = createSlice({
  name: 'qr',
  initialState,
  reducers: {
    setQrData: (state, action) => {
      state.qrData = action.payload;
    },
  },
});

export const { setQrData } = qrSlice.actions;
export default qrSlice.reducer;