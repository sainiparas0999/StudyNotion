import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Components/common/Navbar"
import OpenRoute from "./Components/core/auth/openRoute";
import About from "./Pages/About"
import Login from "./Pages/Login"
import Signup from "./Pages/signUp"
import ContactDetails from "./Pages/ContactDetails"
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyEmail from "./Pages/verifyEmails";
import UpdatePassword from "./Pages/UpdatePassword";
import Error from "./Pages/Error";
import Dashboard from "./Pages/DashBoard";
import MyProfile from "./Components/core/DashBoard/MyProfile";
import PrivateRoute from "./Components/core/auth/PrivateRoute";
import Cart from "./Components/core/DashBoard/cart";
import Settings from "./Components/core/DashBoard/Setting";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/Constants";
import EnrolledCourses from "./Components/core/DashBoard/EnrolledCourses";
import AddCourse from "./Components/core/DashBoard/AddCourse";
import MyCourses from "./Components/core/DashBoard/instructorCourse/CourseTable";
import EditCourse from "./Components/core/DashBoard/EditCourses";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        /> 
           
         <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        /> 

          <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        /> 

     <Route
          path="about"
          element={
            <OpenRoute>
              <About/>
            </OpenRoute>
          }
        />

        <Route 
        path="contact"
        element={<ContactDetails/>}
        />
         
         <Route 
         path="*"
         element={<Error/>}
         />
<Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="dashboard/Settings" element={<Settings />} />
      

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

     {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }


    </Route>

  

    </Routes>
   </div>
  );
}

export default App;
