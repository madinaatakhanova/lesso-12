import './header.css'
import arrow from "../../Images/arrow.svg"
import logo from "../../Images/logo.svg"
import menu from "../../Images/menu.svg"
function Header() {
  return (
    <header>
    <ul>
        <li>Free Courses 🌟 Sale Ends Soon, Get It Now </li>
        <img src={arrow} alt="" />
    </ul>
    <nav>
        <div className="navLogo">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="navList">
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="loginBtn">
            <button>Sign Up</button>
            <button>Login</button>
            <button className='menu'>
                <img src={menu} alt="" />
            </button>
        </div>
    </nav>
</header>
  )
}

export default Header