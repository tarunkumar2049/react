import "./footer.css"
export default function Footer() {

    return (
        <> {/* fragment  */}
            <div id="header-section">
                <img className="image" src="/src/assets/logo.svg" alt="logo" />
                <span className="list">
                    <a>Home</a>
                    <a>About</a>
                    <a>Shop</a>
                    <a>Donate</a>
                    <a>Contact</a>
                </span>
            </div>
        </>
    )
}