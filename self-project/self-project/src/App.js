import React, { useState } from "react";
import CourseDetails from "./Course/CourseDetails";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CourseList from "./Course/courseList";
import "./App.css";

import LoginPage from "./login/loginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage
          userName="admin"
          Password="admin"
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <>
          {/* <CourseDetails CourseDetails="Java" Price="$10" image={img} Rate="3" show={true} />
          <CourseDetails CourseDetails="Python" Price="$10" image={pythoncourse} Rate="2" show={true} />
          <CourseDetails CourseDetails="C" Price="$10" image={Cprogram} Rate="5" show={true} /> */}
          <CourseList />
        </>
      )}
    </>
  );
}

export default App;
