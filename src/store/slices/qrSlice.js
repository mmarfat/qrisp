import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qrData: {},
  logo: null,
  qrCustomization: {}
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
    setQrCustomization: (state, action) => {
      state.qrCustomization = action.payload
    }
  },
});

export const { setQrData, setLogoRedux, removeLogo, setQrCustomization } = qrSlice.actions;
export default qrSlice.reducer;
