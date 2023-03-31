import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_IS_LOADING,
  REMOVE_ROOM_LIST,
} from "./constants";

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: [...state.roomList, ...action.roomList] };
    case REMOVE_ROOM_LIST:
      return { ...state, roomList: [] };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
