const K = 1000;
const M = 1000000;
const TEN_M = 10000000;
const B = 1000000000;

const convertViews = (viewsCountInt) => {
  const viewsCount = viewsCountInt.toString();
  //   console.log("viewString", viewsCount);
  if (viewsCount.length <= 3) {
    return `${viewsCount}`;
  } else if (
    viewsCount.length >= 4 &&
    viewsCount.length <= 6 &&
    viewsCountInt < M
  ) {
    return `${Math.floor(viewsCount / K)}K`;
  } else if (
    viewsCount.length > 6 &&
    viewsCountInt > M &&
    viewsCountInt < TEN_M
  ) {
    return `${Math.round((viewsCount / M) * 10) / 10}M`;
  } else if (viewsCountInt >= TEN_M && viewsCountInt < B) {
    return `${Math.floor(viewsCount / M)}M`;
  } else {
    return `${Math.floor(viewsCount / B)}B`;
  }
};
export default convertViews;
