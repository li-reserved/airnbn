import React, { memo, useCallback, useRef, useState } from "react";
import { FooterWrapper, BannerWrapper } from "./style";

import FooterBanner from "./c-cpns/footer-banner/";
import { CSSTransition } from "react-transition-group";
import FooterLeft from "./c-cpns/footer-left";
import FooterRight from "./c-cpns/footer-right";
import "./switch.css";

const AppFooter = memo(() => {
  const [showBannel, setBannel] = useState(false);
  const el = useRef();

  const changeBannel = useCallback((bannel) => {
    setBannel(bannel);
  }, []);
  return (
    <>
      <FooterWrapper>
        <FooterLeft changeBannel={changeBannel} />
        <FooterRight />
      </FooterWrapper>
      <CSSTransition
        nodeRef={el}
        unmountOnExit={true}
        appear
        in={showBannel}
        classNames="why"
        timeout={500}
      >
        <BannerWrapper ref={el}>
          <FooterBanner />
        </BannerWrapper>
      </CSSTransition>
    </>
  );
});

export default AppFooter;
