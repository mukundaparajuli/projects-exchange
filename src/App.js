import "./App.css";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./Components/SearchResult";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
// import ProjectsDetail from "./Components/ProjectsDetail";
import ProjectsDetailPage from "./Components/ProjectsDetailPage";
import ViewProject from "./Components/ViewProject";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp";
// import SignIn from "./Components/SignIn";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/search-result",
      element: <SearchResult />,
    },
    {
      path: "/project-details/:projectId",
      element: <ProjectsDetailPage />,
    },
    {
      path: "/project-details/view-pdf/:projectId",
      element: <ViewProject />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    // {
    //   path: "/login",
    //   element: <SignIn />,
    // },
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
