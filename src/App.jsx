import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beverage from "./pages/Beverage";
import Store from "./pages/Store";
import Dispenser from "./pages/Dispenser";
import Water from "./pages/Water";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AccountInfo from "./pages/account/AccountInfo";
import OrdersList from "./pages/account/OrdersList";
import OrderListSingle from "./pages/account/OrderListSingle";
import Wallet from "./pages/account/Wallet";
import MyAddress from "./pages/account/MyAddress";
import Referral from "./pages/account/Referral";
import Favorite from "./pages/Favorite";
import DispenserRepair from "./pages/DispenserRepair";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":id" element={<Single />} />

            <Route path="/login">
              <Route index element={<Login />} />
            </Route>

            <Route path="/register">
              <Route index element={<Register />} />
            </Route>

            <Route path="/forgotpassword">
              <Route index element={<ForgotPassword />} />
              <Route path="resetpassword" element={<ResetPassword />} />
            </Route>

            {/* account */}
            <Route path="/account">
              <Route index element={<AccountInfo />} />
            </Route>

            <Route path="/orderslist">
              <Route index element={<OrdersList />} />
              <Route path=":id" element={<OrderListSingle />} />
            </Route>

            <Route path="/wallet">
              <Route index element={<Wallet />} />
            </Route>

            <Route path="/myaddress">
              <Route index element={<MyAddress />} />
            </Route>

            <Route path="/referralcode">
              <Route index element={<Referral />} />
            </Route>

            {/* main site pages */}
            <Route path="/beverage">
              <Route index element={<Beverage />} />
              <Route path=":id" element={<Single />} />
            </Route>

            <Route path="/store">
              <Route index element={<Store />} />
              <Route path=":id" element={<Single />} />
            </Route>

            <Route path="/dispenser">
              <Route index element={<Dispenser />} />
              <Route path=":id" element={<Single />} />
            </Route>

            <Route path="/dispenserrepair">
              <Route index element={<DispenserRepair />} />
            </Route>

            <Route path="/water">
              <Route index element={<Water />} />
              <Route path=":id" element={<Single />} />
            </Route>

            <Route path="/cart">
              <Route index element={<Cart />} />
            </Route>

            <Route path="/checkout">
              <Route index element={<Checkout />} />
            </Route>

            <Route path="/favorite">
              <Route index element={<Favorite />} />
            </Route>
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
