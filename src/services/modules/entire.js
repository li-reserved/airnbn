import HyRequest from "..";

export function getEntireRoomList(offset = 0, size = 18) {
  return HyRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
