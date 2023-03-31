import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [showPanel, setPanel] = useState(false);

  useEffect(() => {
    function windowHandleClick() {
      setPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  function profileHandle() {
    setPanel(!showPanel);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileHandle}>
        <IconMenu />
        <span className="svg">
          <IconAvatar />
          <span className="dir"></span>
        </span>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <p>注册</p>
              <p>登录</p>
            </div>
            <div className="bottom">
              <p>来爱彼迎发布房源</p>
              <p>开展体验</p>
              <p>帮助</p>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
