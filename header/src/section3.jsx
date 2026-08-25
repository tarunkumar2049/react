import "./section3.css"
export default function Section3() {
    return (
        <>
            <div className="div">
                <p>Shop Products</p>
                <h1>Open 24/7/365.</h1>
            </div>
            <div className="div-box">
                <div className="box1">
                    <span>
                        <img className="banner" src="/src/assets/section3-image1.png" />
                    </span>
                    <p>White Tent</p>
                    <p>$200.00 USD</p>
                    <button className="btn">Details</button>
                </div>
                <div className="box1">
                    <span>
                        <img className="banner" src="/src/assets/section3-image2.png" />
                    </span>
                    <p>Tin Coffee Tumbler</p>
                    <p>$35.00 USD</p>
                    <button className="btn">Details</button>
                </div>
                <div className="box1">
                    <span>
                        <img className="banner" src="/src/assets/section3-image3.png" />
                    </span>
                    <p>Blue Canvas Pack</p>
                    <span className="del"><p>$95.00 USD</p> <del>$145.00 USD</del></span>
                    <button className="btn">Details</button>
                </div>
            </div>
            <button className="btn2">View All Products</button>
        </>
    )
}