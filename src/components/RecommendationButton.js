const RecommendationButton = ({ info }) => {
  return (
    <button className="border bg-gray-100 font-semibold text-sm py-1 px-3 rounded-lg hover:bg-gray-200">
      {info}
    </button>
  );
};

export default RecommendationButton;
