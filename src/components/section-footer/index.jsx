import React, { memo } from "react";
import { FooterWrapper } from "./style.js";
import PropTypes from "prop-types";
import IconArrowRight from "@/assets/svg/icon_arrow-right";
import { useNavigate } from "react-router";

const SectionFooter = memo((props) => {
  const { name } = props;

  const router = useNavigate();
  function moreCLickHandle() {
    router("/entire");
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreCLickHandle}>
        <span className="more">
          {name ? `显示更多${name}房源` : "显示全部"}
        </span>
        <IconArrowRight />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
