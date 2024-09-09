import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/detail/DetailPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import CartPage from "./pages/cart/CartPage";
import AccountInfo from "./pages/sidebar/AccountInfo";
import MyOrder from "./pages/sidebar/MyOrder";
import MyAddress from "./pages/sidebar/MyAddress";
import Language from "./pages/sidebar/SLanguage";
import Login from "./components/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/cart" element={<AccountInfo />}></Route>
        <Route path="/my-order" element={<MyOrder />}></Route>
        <Route path="/my-address" element={<MyAddress />}></Route>
        <Route path="/language" element={<Language />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </>
  )
);
