import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qrData: {},
  logo: null,
};

const qrSlice = createSlice({
  name: 'qr',
  initialState,
  reducers: {
    setQrData: (state, action) => {
      state.qrData = action.payload;
    },
    setLogoRedux: (state, action) => {
      state.logo = action.payload;
    },
    removeLogo: (state) => {
      state.logo = null;
    },
  },
});

export const { setQrData, setLogoRedux, removeLogo } = qrSlice.actions;
export default qrSlice.reducer;
