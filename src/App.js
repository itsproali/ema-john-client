import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Loading from "./Components/Loading/Loading";
import Inventory from "./Components/Inventory/Inventory";
import Notfound from "./Components/Notfound/Notfound";
import OrderReview from "./Components/OrderReview/OrderReview";
import Required from "./Components/Required/Required";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/order-review" element={<OrderReview />}></Route>
        <Route
          path="/inventory"
          element={
            <Required>
              <Inventory />
            </Required>
          }
        ></Route>
        <Route
          path="/shipping"
          element={
            <Required>
              <Shipping />
            </Required>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
