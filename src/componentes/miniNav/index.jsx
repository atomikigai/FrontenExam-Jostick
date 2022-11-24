import "./miniNav.css";

const MiniNav = (props) => {
    return(
        <nav className="miniNav">
            <ul>
                { props.items !== undefined && props.items !== null
                 ? (

                        props.items.map((item, key) =>{
                                return(
                                    <li key={key}>
                                        {item}
                                    </li>
                                )
                        })
                    
                    ):(
                        <li></li>
                    )
                }
            </ul>
        </nav>
    )
}

export default MiniNav;