import RoomItem from "@/components/room-item";
import React, { memo, useState, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RoomsWrapper } from "./style";
import ScollList from "@/base-ui/scoll-list";
import {
  fetchRoomListAction,
  changePageAction,
  removeRoomListAction,
  changeTotalCountAction,
} from "@/store/modules/entire/createActions";
import { Skeleton } from "antd";
import { useNavigate } from "react-router";
import { changeDetailInfo } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  const [loading, setLoading] = useState(false);
  const [finishedm, setFinished] = useState(false);
  const dispatch = useDispatch();

  const { roomList, total, currentPage, isLoading } = useSelector((state) => {
    return {
      total: state.entire.totalCount,
      roomList: state.entire.roomList,
      currentPage: state.entire.currentPage,
      isLoading: state.entire.isLoading,
    };
  }, shallowEqual);

  const load = useCallback(async () => {
    if (currentPage + 1 * 18 >= total && total) {
      setFinished(true);
    }
    // 加载数据
    setLoading(true);
    await dispatch(fetchRoomListAction(currentPage + 1));
    setLoading(false);
  }, [currentPage, dispatch, total]);

  useEffect(() => {
    return () => {
      dispatch(changePageAction(0));
      dispatch(removeRoomListAction([]));
      dispatch(changeTotalCountAction(0));
    };
  }, [dispatch]);

  const navigate = useNavigate();
  const itemCLick = useCallback(
    (item) => {
      dispatch(changeDetailInfo(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <h2 className="title">探索全球超 400 万独特房源</h2>
      {!!roomList.length && (
        <ScollList loadingRoom={loading} load={load} finishedm={finishedm}>
          <div className="list">
            {roomList.map((item) => {
              return (
                <RoomItem
                  itemData={item}
                  itemWidth="16.66%"
                  key={item._id}
                  itemClick={itemCLick}
                />
              );
            })}
          </div>
        </ScollList>
      )}

      {
        <>
          {!!isLoading && (
            <div className="skeleton">
              {Array.from(new Array(18)).map((e, i) => {
                return <Skeleton key={i} active />;
              })}
            </div>
          )}
        </>
      }
    </RoomsWrapper>
  );
});

export default EntireRooms;
