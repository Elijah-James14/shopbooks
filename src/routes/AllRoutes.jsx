import { Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "../pages/index";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
