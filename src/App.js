import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Categories from "./Component/Categories/Categories";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import LoginSignin from "./Component/LoginSignin/LoginSignin";
import News from "./Component/News/News";
import Products from "./Component/Products/Products";
import Profileinformation from "./Component/Profileinformation/Profileinformation";
import SignupRegister from "./Component/SignupRegister/SignupRegister";
import TermsCondition from "./Component/TermsCondition/TermsCondition";
import Main from "./layout/Main";
import PrivetRoutes from "./Routes/PrivetRoutes";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch(` https://news-authentication-server.vercel.app/news`),
        },
        {
          path: "/categories/:id",
          loader: ({ params }) =>
            fetch(
              ` https://news-authentication-server.vercel.app/categories/${params.id}`
            ),
          element: (
            <PrivetRoutes>
              <Categories></Categories>
            </PrivetRoutes>
          ),
        },
        {
          path: "/news/:id",
          loader: ({ params }) =>
            fetch(
              ` https://news-authentication-server.vercel.app/news/${params.id}`
            ),
          element: (
            <PrivetRoutes>
              <News></News>
            </PrivetRoutes>
          ),
        },
        {
          path: "/signup",
          element: <SignupRegister></SignupRegister>,
        },
        {
          path: "/login",
          element: <LoginSignin></LoginSignin>,
        },
        {
          path: "/user",
          element: (
            <PrivetRoutes>
              <Profileinformation></Profileinformation>
            </PrivetRoutes>
          ),
        },
        {
          path: "/terms",
          element: <TermsCondition></TermsCondition>,
        },
        {
          path: "/contact",
          element: (
            <PrivetRoutes>
              <Contact></Contact>
            </PrivetRoutes>
          ),
        },
        {
          path: "/shop",
          loader: () =>
            fetch(` https://news-authentication-server.vercel.app/shop`),
          element: (
            <PrivetRoutes>
              <Products></Products>
            </PrivetRoutes>
          ),
        },
        {
          path: "*",
          element: <div>404 Not found</div>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
