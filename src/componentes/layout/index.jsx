import Navbar from "../navbar";

const Layout = ({children}) =>{
    return(
        <div className="layout">
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;