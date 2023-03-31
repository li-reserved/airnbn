import React, { memo } from "react";
import { TitleWrappre } from "./style";

const EntireTiele = memo(() => {
  return (
    <TitleWrappre>
      <div className="content">
        <div className="title">关于政策条款更新的意见收集及公示</div>
        <div className="title-b">
          更新后的《服务条款》、《支付服务条款》及《隐私政策》将于 2023 年 3 月
          30
          日正式生效。您也可通过《关于爱彼迎条款的最新情况》了解政策条款的更新详情。若您对修改内容有任何问题或意见，请于生效日前发送邮件至yijian@airbnb.com。
        </div>
      </div>
    </TitleWrappre>
  );
});

export default EntireTiele;
