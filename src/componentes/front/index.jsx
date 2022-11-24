import "./front.css";
import PortadaFondo from "../../assets/img/portada.webp";
import FrontCard from "./frontcard";

const Portada = () =>{
    return(
        <>
            <div className="portada">
                <div className="portada-izquierda">
                    <img src={PortadaFondo} alt="portada fondo" />
                    <div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className="portada-derecha">
                    <div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <FrontCard
                    title="Retro: Old is New Again"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem magni inventore culpa."
                    linkdescription="discover this trend"
                    link="https://google.com/"
                />
            </div>
        </>
    )
}

export default Portada;