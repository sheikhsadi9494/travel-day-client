import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/HomeContainer/HomeContainer";
import AddServices from "./pages/AddServices/AddServices";
import Header from "./pages/Shered/Header/Header";
import PlaceBooking from "./pages/PlaceBooking/PlaceBooking";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MyBooking from "./pages/myBooking/MyBooking";
import SignIn from "./pages/SignIn/SignIn";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ManageAllServices from "./pages/ManageAllServices/ManageAllServices";
import Register from "./pages/Register/Register";
import Footer from "./pages/Shered/Footer/Footer";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="addServices" element={<AddServices />} />
            <Route path="/services/:serviceId" element={<PrivateRoute><PlaceBooking /></PrivateRoute>} />
            <Route path="/myBookings" element={<PrivateRoute><MyBooking /></PrivateRoute>} />
            <Route path="/ManageAllServices" element={<PrivateRoute><ManageAllServices/></PrivateRoute>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
