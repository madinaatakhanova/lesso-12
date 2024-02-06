import avatar from "../../../Images/avatar.png"
import arrow2 from "../../../Images/arrow2.svg"
import google from "../../../Images/google.svg"
import arrowTop from "../../../Images/arrowtop.svg"
import arrowLeft from "../../../Images/arrowLeft.svg"

// !    CSS
import "./Login.css"

function Login() {
  return (
    <div className='login'>
        <div className='loginTitle'>
            <h2>Students Testimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

            <div className='loginTitleText'>
                <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                <div className='todo'>
                    <span>
                        <img src={avatar} alt="" />
                        <h5>Sarah L</h5>
                    </span>
                    <button>Read More</button>
                </div>
            </div>

            <div className="selectBtn">
                <button>
                    <img src={arrowLeft} alt="" />
                </button>
                <button>
                    <img src={arrow2} alt="" />
                </button>
            </div>
        </div>


            <div className="LoginForm">
                <h2>Login</h2>
                <p>Welcome back! Please log in to access your account.</p>
                    <form >
                        <label htmlFor="">
                            email
                            <input type="email" placeholder="Enter your Email" />
                        </label>
                        <label htmlFor="">
                            password
                            <input type="password" placeholder="Enter your Password" />
                        </label>
                        <p>Forgot Password?</p>

                        <label htmlFor="" className="chack">
                            <input  type="checkbox"/>
                            Remember Me
                        </label>
                        <button type="submit">
                            Login
                        </button>
                        
                        <div className="orLine">
                            <hr />
                                <h3>OR</h3>
                            <hr />
                        </div>
                        
                        <button className="linkGoogle">
                            <img src={google} alt="" />
                            Login with Google
                        </button>
                        <a href="#">
                            Don’t have an account? Sign Up
                        <img src={arrowTop} alt="" />
                        </a>
                    </form>
            </div>
    </div>
  )
}

export default Login