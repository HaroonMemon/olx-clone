import react from "react"
import { appGallery, facebook, footer, instagram, iosStrore, playStore, twitter, youtube } from "../../Assests"
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="popular">
                    <h4>popular categories</h4>

                    <span>cars</span>
                    <span>flat for rent</span>
                    <span>mobile phones</span>
                    <span>jobs</span>

                </div>
                <div className="trending">
                    <h4>trending searches</h4>

                    <span>bikes</span>
                    <span>watches</span>
                    <span>books</span>
                    <span>dogs</span>

                </div>
                <div className="about">
                    <h4>about us</h4>

                    <span>about dubizzle grouspan</span>
                    <span>olx blog</span>
                    <span>contact us</span>
                    <span>olx for businesses</span>

                </div>
                <div className="olx">
                    <h4>olx</h4>

                    <span>help</span>
                    <span>sitema</span>
                    <span>term of use</span>
                    <span>privacy policy</span>

                </div>
                <div className="follow">
                    <h4>follow us</h4>
                    <div className="follow-icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                    <div className="follow-img">
                        <img src={iosStrore} alt="" />
                        <img src={playStore} alt="" />
                        <img src={appGallery} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Free Classifieds in Pakistan &nbsp;&nbsp; .© 2006-2023 OLX</p>
            </div>

        </div>
    )
}
export default Footer