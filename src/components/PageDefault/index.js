import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";

function PageDefault({children}){
    return (
        <div style={{background: "#141414"}} >
            <Menu />
            {children}
            <Footer />
        </div>
    )
}

export default PageDefault ;