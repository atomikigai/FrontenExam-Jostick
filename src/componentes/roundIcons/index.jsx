import "./roundeIcons.css";

const RoundIcons = (props) =>{
    return(
        <a href={props.url} target="_blank" className="roundLink">
            <div className="round">
                    <i className={props.icon}></i>
            </div>
        </a>
    )
}

export default RoundIcons;