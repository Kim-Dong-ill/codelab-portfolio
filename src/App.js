import React from "react";

// layout
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

//mui
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//css
import "./css/style.scss";

function App() {
  return (
    <>
      <Header></Header>

      <Body></Body>

      <Footer></Footer>
    </>
  );
}

export default App;
