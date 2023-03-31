import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
// import PropTypes from "prop-types";
import IconArrowRight from "@/assets/svg/icon_arrow-right";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";

const ScrollView = memo((props) => {
  const [showLeft, setLeft] = useState(false);
  const [showRight, setRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollRef = useRef();
  // const index = useRef(0);
  const totalDistanceRef = useRef();

  useEffect(() => {
    // children 元素大小
    const scrollWidth = scrollRef.current.scrollWidth;
    // content 元素大小
    const clientWidth = scrollRef.current.clientWidth;
    // children - content = 能够滑动的距离
    const scroll = scrollWidth - clientWidth;
    totalDistanceRef.current = scroll;
    setRight(scroll > 0);
  }, [props.children]);

  function contorlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const el = scrollRef.current.children[newIndex].offsetLeft;
    scrollRef.current.style.transform = `translate(-${el}px)`;
    setPosIndex(newIndex);
    // 能够滑动的距离 > 已经滑动的距离
    setRight(totalDistanceRef.current > el);
    setLeft(el > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          onClick={(e) => contorlClickHandle(false)}
          className="contrcl left"
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          onClick={(e) => contorlClickHandle(true)}
          className="contrcl right"
        >
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div ref={scrollRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
