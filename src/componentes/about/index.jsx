import "./about.css";
import AboutCard from "./aboutCard";

const About = () =>{
    return(
        <div className="about">
           <div className="aboutcontainer">
                <AboutCard 
                    color="#CDF1F1"
                    style="aboutCard" 
                    cardStyle="aboutCardInfo"
                    title="Learn more about"
                    description="In aliquam sem fringilla ut morbi tincidunt augue interdum."
                    link="#"
                    linkdescription="read more"
                />
                <AboutCard 
                    color="#CDF1F1"
                    style="aboutCard" 
                    cardStyle="aboutCardInfo"
                    title="Learn more about"
                    description="In aliquam sem fringilla ut morbi tincidunt augue interdum."
                    link="#"
                    linkdescription="read more"
                />
                <AboutCard 
                    color="#CDF1F1"
                    style="aboutCard" 
                    cardStyle="aboutCardInfo"
                    title="Learn more about"
                    description="In aliquam sem fringilla ut morbi tincidunt augue interdum."
                    link="#"
                    linkdescription="read more"
                />
           </div>
        </div>
    )
}

export default About;