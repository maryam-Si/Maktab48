import "./App.css";
import Header from "./components/Header";
import logo from "./images/footerLogo.png";
import Aproaches from "./components/Aproaches";
import MyCarts from "./components/MyCarts.jsx";
import { useState } from "react";
import leaf from "./images/leaf.png";
import customers from "./images/multipleUsers.png";
import coins from "./images/coins.png";
import bread from "./images/bread.png";
import kharobar from "./images/kharobar.png";
import hotels from "./images/hotel.png";
import restuarant from "./images/restaurant.png";
import "./style/main.css";
function App() {
  const [aproaches, setAproaches] = useState([
    { id: 1, imgUrl: leaf, cartTitle: "اسراف کمتر" },
    { id: 2, imgUrl: customers, cartTitle: "مشتریان جدید" },
    { id: 3, imgUrl: coins, cartTitle: "درآمد بیشتر" }
  ]);
  const [carts, setCarts] = useState([
    { id: 1, imgUrl: bread, cartTitle: "نانوایی و قنادی" },
    { id: 2, imgUrl: restuarant, cartTitle: " رستوران و کافه" },
    { id: 3, imgUrl: hotels, cartTitle: "هتل" },
    { id: 4, imgUrl: kharobar, cartTitle: "سوپرمارکت " }
  ]);
  return (
    <div className="App">
      <Header logo={logo} />
      <Aproaches aproaches={aproaches} />
      <MyCarts carts={carts} />
    </div>
  );
}

export default App;
