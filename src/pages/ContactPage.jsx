import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
const ContactPage = () => {
    return (
        <div>
        <Header/>
        <div className="page-container" style={{ overflow: "auto" }}>
          <center><h1>Contact Us</h1></center>
             <p> We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help. </p>
             <h2> General Enquiries </h2>
             <p>
                <strong> Vivekanand College Main Campus </strong> <br/>
                [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India
             </p>
             <p>
               Phone: +91 12345 67890
               Email: info@vivekanandcollege.edu
               Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST 
             </p>
             <h2>Admission Office</h2>
             <p>
                For all admission-related queries regarding undergraduate or postgraduate programs:
                Phone: +91 98765 43210
                Email: admissions@vivekanandcollege.edu
             </p>
             <h2> Student Support Services </h2>
             <p>
                For current student support, academic advising, or general assistance:
                Phone: +91 87654 32109
                Email: studentsupport@vivekanandcollege.edu
             </p>
             <h2> Find Us on the Map </h2>
             <p>
                <br/>
                <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a>

             </p>
             <h2> Send Us a Message </h2>
             <p>
                [A contact form with fields for Name, Email, Subject, Message can be added here.]
             </p>
             </div>
        </div>
    )
}
export default ContactPage;