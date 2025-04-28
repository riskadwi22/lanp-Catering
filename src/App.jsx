import "./App.css";

import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container max-w-full bg-white">
        <Header />
        <main className="">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
