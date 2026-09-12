import "./section1.css"
import Section4 from "./section4"
export default function Section1({name}) {
    return (
        <>
            <div className="div1">
                <span>
                    <Section4 name= {name} />
                    <p>WAYS TO SUPPORT</p>
                    <h1>Support Acme Outdoors.</h1>
                </span>
                <span className="para1">
                    <p>
                        COVID-19 has forced us to close our retail space, but we need
                        support from patrons like yourself now more than ever. Below, we’ve
                        listed the best ways to help us through this season.
                    </p>
                </span>
            </div>
            <div className="div2">
                <div className="box">
                    <span className="box-banner"> SHOP PRODUCTS</span>
                    <p className="box-para">
                        Our full product line is still available online here on
                        our site! Getting outside and hiking is still something
                        you can do. Get your gear now!
                    </p>
                </div>
                <div className="box">
                    <span className="box-banner"> DONATE </span>
                    <p className="box-para">
                        Our full product line is still available online here on
                        our site! Getting outside and hiking is still something
                        you can do. Get your gear now!
                    </p>
                </div>
                <div className="box">
                    <span className="box-banner"> BUY GIFT CARDS</span>
                    <p className="box-para">
                        Our full product line is still available online here on
                        our site! Getting outside and hiking is still something
                        you can do. Get your gear now!
                    </p>
                </div>
            </div>

        </>
    )
}