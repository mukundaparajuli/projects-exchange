import "./App.css";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./Components/SearchResult";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import ProjectsDetail from "./Components/ProjectsDetail";
import ProjectsDetailPage from "./Components/ProjectsDetailPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/search-result",
      element: <SearchResult />,
    },
    {
      path: "/project-details/:projectId",
      element: <ProjectsDetailPage />,
    },
  ]);
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
