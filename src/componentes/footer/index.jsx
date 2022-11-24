import MiniNav from "../miniNav";
import "./footer.css";

const Footer = () =>{

    const items = ["trends", "tips & guides", "find a store", "carrers"];

    return(
        <div className="footer">
            <div className="footer-left">
                <MiniNav
                    items={items}
                />
            </div>
            <div className="footer-right">

            </div>
        </div>
    )
}

export default Footer;