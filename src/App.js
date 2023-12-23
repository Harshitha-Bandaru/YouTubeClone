import Body from "./components/Body";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import VideoContainer from "./components/VideoContainer";

/**
 * App Layout
 * Header
 * Body
 *    Sidebar
 *    MainContainer
 *      - RecommendationsList
 *      - VideoContainer
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <VideoContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/results", element: <SearchResults /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
