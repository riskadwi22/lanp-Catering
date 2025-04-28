import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import FoodStall from "./pages/FoodStall";
import NasiTradisional from "./pages/NasiTradisional";
import Buffet from "./pages/Buffet";
import NasiBox from "./pages/NasiBox";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/food-stall" element={<FoodStall/>}></Route>
        <Route path="/nasi-tradisional" element={<NasiTradisional/>}></Route>
        <Route path="/buffet" element={<Buffet/>}></Route>
        <Route path="/nasi-box" element={<NasiBox/>}></Route>
      </Route>
    </>
  )
);
