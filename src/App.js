import React, {useState} from "react";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    const [viewer, setViewer] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            {viewer === 0 && <Homepage viewer={viewer} setViewer={setViewer} />}
            {viewer === 1 && <Projects viewer={viewer} setViewer={setViewer} />}
            {viewer === 2 && <Skills viewer={viewer} setViewer={setViewer} />}
            {viewer === 3 && <Resume viewer={viewer} setViewer={setViewer} />}
            {viewer === 4 && <Contact viewer={viewer} setViewer={setViewer} />}
        </div>
    );
}

export default App;
