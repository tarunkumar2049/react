import "./footer.css"
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <> {/* fragment  */}
            <div id="header-section">
                <img className="image" src="/src/assets/logo.svg" alt="logo" />
                <span className="list">
                    <a>Home</a>
                    <Link to="/about">About</Link>
                    <Link to="/shop" >Shop</Link>
                    <a>Donate</a>
                    <a>Contact</a>
                </span>
            </div>
        </>
    )
}