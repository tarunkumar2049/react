import "./hero-section.css"
export default function Hero() {
    return (
        <>
            <div className="hero">
                <span className="hero">
                    <img className="hero-image" src="/src/assets/hero1.png" />
                    <span className="hero-content">
                        <h1>Serving you since 1989.</h1>
                        <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                        <button className="hero-button">Shop Merch</button>
                    </span>
                </span> 
            </div>
        </>
    )
}