import RecommendationButton from "./RecommendationButton";
import { RecommendationListData } from "../constants";

const RecommendationList = () => {
  return (
    <div className="flex gap-3 m-4">
      {RecommendationListData.map((recommendationItem, i) => {
        return <RecommendationButton info={recommendationItem} key={i} />;
      })}
    </div>
  );
};

export default RecommendationList;
