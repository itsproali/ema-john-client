import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));
const Login = lazy(() => import("./Components/Login/Login"));
const Loading = lazy(() => import("./Components/Loading/Loading"));
const Inventory = lazy(() => import("./Components/Inventory/Inventory"));
const Notfound = lazy(() => import("./Components/Notfound/Notfound"));
const OrderReview = lazy(() => import("./Components/OrderReview/OrderReview"));
const Required = lazy(() => import("./Components/Required/Required"));
const Shop = lazy(() => import("./Components/Shop/Shop"));
const SignUp = lazy(() => import("./Components/SignUp/SignUp"));
const Shipping = lazy(() => import("./Components/Shipping/Shipping"));

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
