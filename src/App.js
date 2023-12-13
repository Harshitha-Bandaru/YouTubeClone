import Body from "./components/Body";
import Header from "./components/Header";

/**
 * App Layout
 * Header
 * Body
 *    Sidebar
 *    MainContainer
 *      - RecommendationsList
 *      - VideoContainer
 */

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
