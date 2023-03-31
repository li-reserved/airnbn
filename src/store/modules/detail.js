import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: JSON.parse(localStorage.getItem("detail")) || {},
  },
  reducers: {
    changeDetailInfo(state, { payload }) {
      state.detailInfo = payload;
      localStorage.setItem("detail", JSON.stringify(payload));
    },
  },
});

export const { changeDetailInfo } = DetailSlice.actions;
export default DetailSlice.reducer;
