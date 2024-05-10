import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/:id", element: <SinglePage /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
