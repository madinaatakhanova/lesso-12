import "./home.css"
import postionimgHero from "../../../Images/heroPosition.svg"
import heroImg from "../../../Images/heroimg.svg"
import arrowTop from "../../../Images/arrowtop.svg"
// ! links
import zapier from '../../../Images/zapier.svg'
import spotfy from "../../../Images/spotify.svg"
import zoom from "../../../Images/zoom.svg"
import amazon from "../../../Images/amazon.svg"
import adobe from "../../../Images/adobe.svg"
import notion from "../../../Images/notion.svg"
import netflex from "../../../Images/netflix.svg"
// ! play
import player from "../../../Images/player.png"
// ! courses 
import courseslinks from "../../../Images/courses.png"
import avatar from "../../../Images/avatar.png"
import comleted from "../../../Images/complet.svg"
import nocomleted from "../../../Images/nocomleted.svg"
import plus from "../../../Images/plus.svg"
import arrow from "../../../Images/arrow.svg"
function home() {
  return (
    <div className='Home'>
    
        <div className="hero">
            <div className="heroTitle">
                <div className="subContainer">
                <img className="positon" src={postionimgHero} alt="" />
                    <img src={heroImg} alt="" />
                    <h1>   
                        <strong>Unlock</strong> 
                        Your Creative Potential
                    </h1>
                </div>

                <h2>with Online Design and Development Courses.</h2>
                <p>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className="heroBtns">
                    <button>Explore Courses</button>
                    <button>View Pricing</button>
                </div>
            </div>


            <ul className="heroLinks">
                <li>
                    <a href="">
                        <img src={zapier} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={spotfy} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={zoom} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={amazon} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={adobe} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={notion} alt="" />
                    </a>
                </li>

                <li>
                    <a href="">
                        <img src={netflex} alt="" />
                    </a>
                </li>
            </ul>


            <div className="videoPlayer">
                <div>
                    
                    <img src={player} alt="" />
                </div>

            </div>
        </div>



        <div className="benefits">
            <div className="benefitsTitle">
                <div className="benefitsText">
                    <h2>Benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <button>View All</button>
            </div>

            <ul className="benefitsLinks">
                <li>
                    <h3>1</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

                <li>
                    <h3>2</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

                <li>
                    <h3>3</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

                <li>
                    <h3>4</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

                <li>
                    <h3>5</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

                <li>
                    <h3>6</h3>

                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p> 

                <img src={arrowTop} />   
                </li>

            </ul>
        </div>
        

        <div className="courses">
            <div className="coursesTitle">
                <div className="coursesText">
                    <h2>Our Courses</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <button>View All</button>
            </div>


            <ul>
                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>

                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>

                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>

                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>

                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>

                <li>
                    <img src={courseslinks} alt="" />
                    <div>
                        <span>
                            <p>4 Weeks</p>
                            <p>Beginner</p>
                        </span>
                        <h5>By John Smith</h5>
                    </div>
                    <h5>Web Design Fundamentals</h5>
                    <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button>Get it Now</button>
                </li>
            </ul>
        </div>


        <div className="testimonials">
            <div className="testimonialsTitle">
                <div className="testimonialsText">
                    <h2>Our Courses</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <button>View All</button>
            </div>


            <ul>
                <li>
                    <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>

                    <div>
                        <img src={avatar} alt="" />
                        <button>Read Full Story</button>
                    </div>
                </li>

                <li>
                    <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>

                    <div>
                        <img src={avatar} alt="" />
                        <button>Read Full Story</button>
                    </div>
                </li>

                <li>
                    <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>

                    <div>
                        <img src={avatar} alt="" />
                        <button>Read Full Story</button>
                    </div>
                </li>

                <li>
                    <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>

                    <div>
                        <img src={avatar} alt="" />
                        <button>Read Full Story</button>
                    </div>
                </li>

             

            </ul>
        </div>

        <div className="pricing">
        <div className="pricingTitle">
                <div className="pricingText">
                    <h2>Our Pricing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <button>View All</button>
            </div>


            <div className="shablon">
                <div className="card">
                    <div className="cardText">
                        <button>Free Plan</button>
                            <h2>$0 <sub>/month</sub></h2>
                            <div>
                                <h5>Available Features</h5>
                                <ul>

                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={nocomleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={nocomleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    
                                    <button>Get Started</button>
                                    
                                </ul>
                            </div>
                    </div>
                </div>

                <div className="card">
                    <div className="cardText">
                        <button>Free Plan</button>
                            <h2>$79 <sub>/month</sub></h2>
                            <div>
                                <h5>Available Features</h5>
                                <ul>

                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={comleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={nocomleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    <li>
                                        <img src={nocomleted}  alt="" />
                                        <p>Limited course materials and resources.</p>
                                    </li>
                                    
                                    <button>Get Started</button>
                                    
                                </ul>
                            </div>
                    </div>
                </div>
                

            </div>
        </div>


        <div className="frequently">
            <div className="frequentlyText">
                <h3>Frequently Asked Questions</h3>
                <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                <button>See All FAQ’s</button>
            </div>
            <div className="tablet">
                <ul>
                    <li>
                        Can I enroll in multiple courses at once?
                        <img src={plus} alt="" />
                        <div className="tabletPanel">
                            <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div>
                                <div> 
                                    <p>Enrollment Process for Different Courses</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        Can I enroll in multiple courses at once?
                        <img src={plus} alt="" />
                        <div className="tabletPanel">
                            <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div>
                                <div> 
                                    <p>Enrollment Process for Different Courses</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        Can I enroll in multiple courses at once?
                        <img src={plus} alt="" />
                        <div className="tabletPanel">
                            <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div>
                                <div> 
                                    <p>Enrollment Process for Different Courses</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        Can I enroll in multiple courses at once?
                        <img src={plus} alt="" />
                        <div className="tabletPanel">
                            <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div>
                                <div> 
                                    <p>Enrollment Process for Different Courses</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        Can I enroll in multiple courses at once?
                        <img src={plus} alt="" />
                        <div className="tabletPanel">
                            <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                            <div>
                                <div> 
                                    <p>Enrollment Process for Different Courses</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default home