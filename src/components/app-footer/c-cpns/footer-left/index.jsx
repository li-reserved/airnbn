import React, { memo, useState, useEffect } from "react";
import IconWeiBo from "@/assets/svg/icon_weibo";
import IconWeiXin from "@/assets/svg/icon_weixin";
import IconGlobal from "@/assets/svg/icon_global";
import IconTopArrow from "@/assets/svg/icon_topArrow";
import { LeftWrapper } from "./style";

const FooterLeft = memo((props) => {
  const [, setBannel] = useState(false);
  useEffect(() => {
    function windowClick() {
      setBannel(false);
      props.changeBannel(false);
    }
    window.addEventListener("click", windowClick, true);
    return () => {
      window.removeEventListener("click", windowClick, true);
    };
  }, [props]);

  function openBannel() {
    setBannel(true);
    props.changeBannel(true);
  }

  return (
    <LeftWrapper className="footer-left">
      <span className="icon">
        <IconWeiBo />
      </span>
      <span className="icon">
        <IconWeiXin />
      </span>

      <div className="jro">
        <span className="icon">
          <IconGlobal />
        </span>
        <span className="language">简体中文 (CN)</span>
        <span onClick={openBannel}>￥CNY支持和资源</span>
        <span className="icon" onClick={openBannel}>
          <IconTopArrow />
        </span>
      </div>
    </LeftWrapper>
  );
});

export default FooterLeft;
