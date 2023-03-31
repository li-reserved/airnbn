import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { BrowerWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconArrowRight from "@/assets/svg/icon_arrow-right";
import IconTriangle from "@/assets/svg/icon_triangle";
import IconTriangleTop from "@/assets/svg/icon_Triangle_top";
import Indicator from "../Indicator";
import classNames from "classnames";

const PictureBrower = memo((props) => {
  const { pictureUrls, closeClick, index = 0 } = props;
  const [currentIndex, setCurrentIndex] = useState(index);
  const [next, setNext] = useState(true);
  const [showList, setShowList] = useState(true);
  // 当图片浏览器展示，移除浏览器滚动
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeBtnHandle() {
    if (closeClick) closeClick();
  }

  // useEffect(() => {
  //   setCurrentIndex(props.currentIndex);
  // }, [props]);

  function contorlBtnHandle(isnext = true) {
    let newIndex = isnext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setNext(isnext);
  }

  function handleBottonItem(i) {
    setNext(i > currentIndex);
    setCurrentIndex(i);
  }

  return (
    <BrowerWrapper isnext={next} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnHandle}>
          <IconClose width="2em" height="2em" />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => contorlBtnHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => contorlBtnHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1} / {pictureUrls.length}:
              </span>
              <span>正在浏览照片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? <IconTriangle /> : <IconTriangleTop />}
            </div>
          </div>

          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((pic, i) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === i,
                    })}
                    onClick={() => handleBottonItem(i)}
                    key={pic}
                  >
                    <img src={pic} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowerWrapper>
  );
});

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
  index: PropTypes.number,
};

export default PictureBrower;
