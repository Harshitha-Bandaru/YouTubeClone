import Header from "./components/Header";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";

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
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
