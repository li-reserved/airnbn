import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { useNavigate } from "react-router";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function gotoHome() {
    navigate("/");
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={gotoHome}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
