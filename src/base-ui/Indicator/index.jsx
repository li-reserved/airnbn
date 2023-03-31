import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
import PropTypes from "prop-types";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;

  const elRef = useRef();

  useEffect(() => {
    const selectEl = elRef.current.children[selectIndex];
    // 获取对应item左边偏移量 + 元素宽度
    const itemLeft = selectEl.offsetLeft;
    const itemWidth = selectEl.clientWidth;
    // 获取content宽度
    const contentWidth = elRef.current.clientWidth;
    const contentScroll = elRef.current.scrollWidth;
    // 偏移量 = 距离左侧距离 + 元素宽度 / 2 - content / 2
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 左边特殊情况处理
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    // 总共可以偏移的距离 -- 右边特殊情况处理
    if (distance > totalDistance) distance = totalDistance;
    elRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={elRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
