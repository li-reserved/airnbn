import PictureBrower from "@/base-ui/picture-brower";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PictureWrapper } from "./style";
import { KeysLength } from "@/utils";

const DetailPictures = memo(() => {
  const [showPic, setShoPic] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { detail } = useSelector(
    (state) => ({
      detail: state.detail.detailInfo,
    }),
    shallowEqual
  );

  function currentPicHandle(index) {
    setCurrentIndex(index);
    setShoPic(true);
  }

  return (
    <PictureWrapper>
      {KeysLength(detail) && (
        <>
          <div className="pitures">
            <div className="left">
              <div className="item" onClick={() => currentPicHandle(0)}>
                <img src={detail.picture_urls?.[0]} alt="" />
                <div className="cover"></div>
              </div>
            </div>
            <div className="right">
              {detail.picture_urls?.slice(1, 5).map((item, index) => {
                return (
                  <div
                    className="item"
                    key={item}
                    onClick={() => currentPicHandle(index + 1)}
                  >
                    <img src={item} alt="" />
                    <div className="cover"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="show-btn" onClick={() => setShoPic(true)}>
            显示照片
          </div>
        </>
      )}
      {showPic && (
        <PictureBrower
          index={currentIndex}
          pictureUrls={detail.picture_urls}
          closeClick={() => setShoPic(false)}
        />
      )}
    </PictureWrapper>
  );
});

export default DetailPictures;
