import "./App.css";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import FilterState from "./context/filter/FilterState";
import SearchState from "./context/search/SearchState";
const AppLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen min-h-screen  box-border">
      <FilterState>
      <SearchState>
      <Header />
      <Outlet />
      <Footer />
      </SearchState>
      </FilterState>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default AppLayout;
