import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/pages/Home/home"
import About from "./components/pages/Courses/Courses"
import Courses from "./components/pages/Courses/Courses"
import CoursesOpen from './components/pages/CoursesOpen/CoursesOpen';
import Login from "./components/pages/SginPage/Login"
import SignUp  from './components/pages/SginPage/SignUp';
import Footer from "./components/Header/footer"
function App() {
  return (
    <div className="container">
      <Header/>
      <Home/>
      {/* <About/> */}
      {/* <Courses/> */}
      {/* <CoursesOpen/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Footer/>
    </div>
  );
}

export default App;
