import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import Classes from "./components/Classes/Classes.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Testmonials from "./components/Testmonials/Testmonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
// import { WOW } from "wowjs";
import WOW from "wowjs";

export default function App() {
  // useEffect(() => {
  //   const wow = new WOW({ live: false });
  //   wow.init();
  // });

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Schedule />
      <Classes />
      <Pricing />
      <Testmonials />
      <Footer />
    </>
  );
}
