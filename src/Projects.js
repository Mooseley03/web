import Navbar from "./Navbar";
import Footer from "./Footer";
import React, {useState} from "react";

export default function Projects({viewer, setViewer, isExpanded, setIsExpanded}) {

    return (
        <div>
            <Navbar viewer={viewer} setViewer={setViewer}/>
            <p>Projects</p>
            <Footer />
        </div>
    );
}