import "./Contact.css";
import email from "../assets/email.svg";
import linkdin from "../assets/in.svg";
import github from "../assets/github.svg";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section--title">Contact Me</h2>

            <div className="contact-box">
                <svg className="border-svg">
                    <rect className="border-rect" rx="16" ry="16"></rect>
                </svg>

                <div className="email">
                    <img src={email} alt="email" className="email-icon" />
                    imenekadri04@gmail.com
                </div>
                <div className="linkdin">
                    <img src={linkdin} alt="linkdin" className="linkdin-icon" />
                    Imene kdr
                </div>
                <div className="github">
                    <img src={github} alt="github" className="github-icon" />
                    its imene
                </div>
            </div>

            <footer className="attribution">App icon by <a id="pink" href="https://icons8.com/">icons8</a></footer>
            
        </section>
    );
}
