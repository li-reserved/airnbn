import React, { memo } from "react";
import titleImage from "@/assets/image/titlelogo.jpg";
import { AppTitleWrapper } from "./style";

const AppTitle = memo(() => {
  return (
    <AppTitleWrapper>
      <img src={titleImage} alt="" />
      <span className="title">四海无忧·四重保障</span>
      <span>预订保障 · 入住保障 · 房源真实性保障 · 24 小时安全支持</span>
      <span className="desc">查看详情 </span>
    </AppTitleWrapper>
  );
});

export default AppTitle;
