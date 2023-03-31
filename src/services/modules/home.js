import HyRequest from "..";

export function getHomeGoodPriceData() {
  return HyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return HyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return HyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return HyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return HyRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return HyRequest.get({
    url: "home/plus",
  });
}
