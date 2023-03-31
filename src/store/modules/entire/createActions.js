import { getEntireRoomList } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_IS_LOADING,
  REMOVE_ROOM_LIST,
} from "./constants";

export const changePageAction = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: CHANGE_ROOM_LIST,
  roomList,
});

export const removeRoomListAction = () => ({
  type: REMOVE_ROOM_LIST,
});

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch) => {
    dispatch(changePageAction(page));
    dispatch(changeIsLoadingAction(true));
    const { list, totalCount } = await getEntireRoomList(page * 18);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
  };
};
