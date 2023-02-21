import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";

function PageDefault({children}){
    return (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    )
}

export default PageDefault ;