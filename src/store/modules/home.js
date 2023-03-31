import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "goodPrice",
  async (payload, { dispatch }) => {
    try {
      const res = await getHomeGoodPriceData();
      dispatch(changeGoodPriceInfoAction(res));

      const resolve = await getHomeHighScoreData();
      dispatch(changeHighScoreAction(resolve));

      const discont = await getHomeDiscountData();
      dispatch(changeDiscountAction(discont));

      const recommend = await getHomeHotRecommendData();
      dispatch(changeRecommendAction(recommend));

      const longfor = await getHomeLongforData();
      dispatch(changeLongforAction(longfor));

      const plus = await getHomePlusData();
      dispatch(changePlusInfo(plus));
    } catch (error) {
      console.log(error);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeRecommendAction,
  changeLongforAction,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
