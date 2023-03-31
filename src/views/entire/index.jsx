import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntireTiele from "./c-cpns/entire-title";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireTiele />
      <EntireFilter />
      <EntireRooms />
    </EntireWrapper>
  );
});

export default Entire;
