import React, { memo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconArrowRight from "@/assets/svg/icon_arrow-right";
import Indicator from "@/base-ui/Indicator";
import classNames from "classnames";
import omg from "@/assets/image/omg.jpg";
import IconHeart from "@/assets/svg/icon_heart";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();

  function controlClickHandle(isright = true, event) {
    isright ? sliderRef.current.next() : sliderRef.current.prev();
    let newIndex = isright ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    event.stopPropagation();
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const selectedElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="24" height="24" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="24" height="24" />
        </div>
      </div>
      <div className="title-desc">
        <img src={omg} alt="" />
        OMG 妙啊
      </div>
      <div className="the-heart">
        <IconHeart />
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, i) => {
            return (
              <div className="dot-item" key={i}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === i,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((e) => {
          return (
            <div className="cover" key={e}>
              <img src={e} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper
      desc_color={itemData.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? selectedElement : pictureElement}
        <span className="desc">{itemData.verify_info.messages.join("·")}</span>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format} /晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 4.5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848a" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          <span className="extra">
            ·{itemData.bottom_info?.content || "生态家园"}
          </span>
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
