import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { KeysLength } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";

const Home = memo(() => {
  // 从redux获取数据
  const { goodPrice, highScore, discount, recommend, longfor, plus } =
    useSelector((state) => {
      return {
        goodPrice: state.home.goodPriceInfo,
        highScore: state.home.highScoreInfo,
        discount: state.home.discountInfo,
        recommend: state.home.recommendInfo,
        longfor: state.home.longforInfo,
        plus: state.home.plusInfo,
      };
    }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {KeysLength(discount) && <HomeSectionV2 infoData={discount} />}
        {KeysLength(recommend) && <HomeSectionV2 infoData={recommend} />}
        {KeysLength(longfor) && <HomeLongfor infoData={longfor} />}
        {KeysLength(goodPrice) && <HomeSectionV1 infoData={goodPrice} />}
        {KeysLength(highScore) && <HomeSectionV1 infoData={highScore} />}
        {KeysLength(plus) && <HomeSectionV3 infoData={plus} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
