import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
const HomePage = () => {
    return (
<>
            <Header/>
            <div className="page-container" style={{ overflow: "auto" }}>
                <div className="hero-section">
                    <img style={{width:"100%"}}    src="../Images/college3.png" alt=" collagename" 
                       className="hero-banner-image" />

                     <div className="hero-overlay-text">
                          <h1>Welcome to Vivekanand College!</h1>
                          <p>Your journey to excellence starts here.</p>
                           <Link to="/admission" className="btn hero-btn">
                            Apply Now!
                              </Link>{" "}
                 </div>


                </div>
            


            <section >
            <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. <br/> Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. <br/> Our state-of-the-art facilities, experienced faculty, and diverse student community <br/> create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            </section>

            
            <h2>Why Choose Vivekanand College?</h2>

            <ul >
                <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                <li>Strong Placements: Excellent career opportunities with leading companies.</li>

            </ul>

            <h2>Campus Life & Facilities</h2>

            <div  className="image-gallery">
            <img   src="/Images/students.jpg" alt=" collagename" height="350" width="700" /> <img    src="/Images/campus.jpg" alt=" collagename"height="350" width="700" />
            </div>

            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

            <div className="call-to-action">
                <p>Ready to explore our courses?</p>
                    <Link to="/courses" className="btn">Explore Courses</Link>{" "}
                           
                          
                  </div>
                  </div>
        </>
    )
}

export default HomePage;