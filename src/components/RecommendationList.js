import React from "react";
import RecommendationButton from "./RecommendationButton";

const RecommendationList = () => {
  const RecommendationList = [
    "All",
    "Cooking",
    "Tamil Cinema",
    "GameShows",
    "Melodies",
  ];
  return (
    <div className="flex gap-3">
      {RecommendationList.map((recommendationItem) => {
        return <RecommendationButton info={recommendationItem} />;
      })}
    </div>
  );
};

export default RecommendationList;
