import logo from "../../Images/logo.svg";
import gmail from "../../Images/gamil.svg"
import call from "../../Images/call.svg"
import gps from "../../Images/gps.svg"
import facebook from "../../Images/facebook.svg"
import twitter from "../../Images/twitter.svg"
import inlink from "../../Images/incled.svg"
function footer() {
  return (
    <div className='footer'>

    <div className='footerLogo'>
        <img src={logo} alt="" />
        <div>
            <img src={gmail} alt="" />
            <p>hello@skillbridge.com</p>
        </div>
        <div>
            <img src={call} alt="" />
            <p>+91 91813 23 2309</p>
        </div>
        <div>
            <img src={gps} alt="" />
            <p>Somewhere in the World</p>
        </div>
    </div>

    <div className="links"> 
        <ul>
            <li>Home</li>
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
        </ul>
        <ul>
            <li>About Us</li>
            <li>Company</li>
            <li>Achievements</li>
            <li>Our Goals</li>
        </ul>
            <div>
                <h3>Social Profiles</h3>
                <div className="link">
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={inlink} alt="" />
                    </a>
                </div>
            </div>
    </div>

    </div>
  )
}

export default footer