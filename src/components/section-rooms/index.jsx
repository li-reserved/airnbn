import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomItem from "@/components/room-item";
import { RoomsWrapper } from "./style";

const SectionRoom = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper>
      {roomList.map((item) => {
        return <RoomItem itemWidth={itemWidth} itemData={item} key={item.id} />;
      })}
    </RoomsWrapper>
  );
});

SectionRoom.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRoom;
