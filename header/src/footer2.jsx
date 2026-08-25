import "./footer2.css"
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer2() {
    return (
        <>
            <div className="footer">
                <div className="foot1">
                    <img className="footer-img" src="/src/assets/logo.svg" alt="logo" />

                    <span className="icon">
                        <FaTwitterSquare />
                        <FaFacebook />
                        <FaInstagram />
                    </span>

                </div>
                <div className="foot2">
                    Made in WEBFLOW.2020.
                </div>
            </div>

        </>
    )

}