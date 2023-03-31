import React, { memo } from "react";
import { RightWrapper } from "./style";

const FooterRight = memo(() => {
  return (
    <RightWrapper>
      <div>
        京ICP备16017121号京ICP证 160773号·京公网安备
        11010502032345号·安彼迎网络（北京）有限公司·营业执照
      </div>
      <div>
        © 2023 Airbnb, Inc.All rights
        reserved.·条款·隐私政策·网站地图·全国旅游投诉渠道 12301
      </div>
    </RightWrapper>
  );
});

export default FooterRight;
