import MiniNav from "../miniNav";
import "./footer.css";
import WhiteLogo from "../../assets/logo-white.webp";
import RoundIcons from "../roundIcons";

const Footer = () => {

    const items = ["trends", "tips & guides", "find a store", "carrers"];

    return (
        <div className="footer">
            <div className="footer-left">
                <MiniNav
                    items={items}
                />
                <div className="contact-info">
                    <div className="info-contact">
                        <p>tel: +(507) 314-7709</p>
                        <p>tel: +(507) 314-7709</p>
                        <a className="email" href="mailto:info@tiendaconceptslife.com" target="_blank">info@tiendaconceptslife.com</a>
                    </div>
                    <div className="info-location">
                        <p>Av. República de Panamá 303</p>
                        <p>Panamá</p>
                        <p>Panamá</p>
                    </div>
                </div>
                <div className="copyrigth">
                    <div className="footer-logo">
                        <img src={WhiteLogo} alt="" />
                    </div>                    
                    <p>All rights © reserved 2017 Tienda Concepts Life</p>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-trick">
                    <div className="footer-social">
                        <p>follow us</p>
                        <RoundIcons url="https://twitter.com/" icon="fa-brands fa-twitter"/>
                        <RoundIcons url="https://facebook.com/" icon="fa-brands fa-facebook-f"/>
                        <RoundIcons url="https://instagram.com/" icon="fa-brands fa-instagram"/>
                    </div>
                    <p className="mylogo">Rebuild by Jostick Quiel in ReactJS</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;