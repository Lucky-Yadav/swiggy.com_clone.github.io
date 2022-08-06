
import React from "react";
import { Food_Main } from "./Components/RestaurantPage/Food_Main";
import { Food_Detail } from "./Components/RestaurantPage/Food_Detail";
import './App.css';
import './styles/Navbar.css'
import './styles/Search.css'
import { LandingPage } from './pages/LandingPage';
import  {Navbar}  from './components/Navbar.jsx';
import { Search } from './pages/Search';
import "./Lucky.css";
// import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/lucky/signup";
import User from "./components/lucky/user";
// import Help from "./components/help.jsx/help";
import Private from "./components/lucky/private";
import Layout from "./components/users/orders";
import Orders from "./components/users/orders";
import Super from "./components/users/Super";
import Favourites from "./components/users/favourites";
import Payments from "./components/users/payments";
import Address from "./components/users/address";
import Settings from "./components/users/Settings";
import Support from "./components/Support";
import Previous_orders from "./components/help.jsx/previous-orders";
import Legal from "./components/help.jsx/Legal";
// import { RestaurantView } from './pages/RestaurantView';
import General from './components/help.jsx/General';
import Partner_Onboarding from "./components/help.jsx/Partner_Onbording";
// import Login from "./components/lucky/Login";

function App() {
 
  return (
  
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:food/:id" element={<Food_Detail />} />
        <Route
          path="/user"
          element={
            <Navbar>
              <User>
                <Orders />
              </User>
            </Navbar>
          }
        ></Route>
        <Route
          path="/user/orders"
          element={
            <User>
              <Orders />
            </User>
          }
        ></Route>
        <Route
          path="/user/super"
          element={
            <User>
              <Super />
            </User>
          }
        ></Route>
        <Route
          path="/user/favourites"
          element={
            <User>
              <Favourites />
            </User>
          }
        ></Route>
        <Route
          path="/user/payments"
          element={
            <User>
              <Payments />
            </User>
          }
        ></Route>
        <Route
          path="/user/addresses"
          element={
            <User>
              <Address />
            </User>
          }
        ></Route>
        <Route
          path="/user/settings"
          element={
            <User>
              <Settings />
            </User>
          }
        ></Route>
        <Route
          path="/support"
          element={
            <Support>
              <Previous_orders />
            </Support>
          }
        ></Route>

        <Route path="*" element={<LandingPage />}></Route>

        <Route
          path="/support/issues/orders"
          element={
            <Support>
              <Previous_orders />
            </Support>
          }
        ></Route>
        <Route
          path="/support/issues/general"
          element={
            <Support>
              <General />
            </Support>
          }
        ></Route>
        <Route
          path="/support/issues/partner-onboarding"
          element={
            <Support>
              <Partner_Onboarding />
            </Support>
          }
        ></Route>
        <Route
          path="/support/issues/legal"
          element={
            <Support>
              <Legal />
            </Support>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

// npm install slick-carousel

// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";