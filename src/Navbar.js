import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

export default function Navbar({ viewer, setViewer }) {

    const updateHooks = (number) => {
        setViewer(number);
    };

    const styles = {
        sectionStyle: {
            borderBottom: "3px solid #3498DB", // Set border-bottom with thickness, style, and color
        }
    };
    

    return (
        <div style={styles.sectionStyle}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FAFAFA' }}>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ marginLeft: 'auto' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: .5 + 'em', marginRight: 1 + 'em' }}>
                                <button
                                    className={`nav-link ${viewer === 0 ? 'active' : ''}`}
                                    onClick={() => updateHooks(0)}
                                    style={{ color: viewer === 0 ? '#3498DB' : '#34495E', border: 'none', backgroundColor: 'transparent' }} 
                                    aria-current="page"
                                >
                                    About
                                </button>
                            </li>
                            {/* <li className="nav-item" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: .5 + 'em', marginRight: 1 + 'em' }}>
                                <button
                                    className={`nav-link ${viewer === 1 ? 'active' : ''}`}
                                    onClick={() => updateHooks(1)}
                                    style={{ color: viewer === 1 ? '#3498DB' : '#34495E', border: 'none', backgroundColor: 'transparent' }}
                                    aria-current="page"
                                >
                                    Projects
                                </button>
                            </li> */}
                            <li className="nav-item" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: .5 + 'em', marginRight: 1 + 'em' }}>
                                <button
                                    className={`nav-link ${viewer === 2 ? 'active' : ''}`}
                                    onClick={() => updateHooks(2)}
                                    style={{ color: viewer === 2 ? '#3498DB' : '#34495E', border: 'none', backgroundColor: 'transparent' }}
                                    aria-current="page"
                                >
                                    Projects and Skills
                                </button>
                            </li>
                            <li className="nav-item" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: .5 + 'em', marginRight: 1 + 'em' }}>
                                <button
                                    className={`nav-link ${viewer === 3 ? 'active' : ''}`}
                                    onClick={() => updateHooks(3)}
                                    style={{ color: viewer === 3 ? '#3498DB' : '#34495E', border: 'none', backgroundColor: 'transparent' }}
                                    aria-current="page"
                                >
                                    Resume
                                </button>
                            </li>
                            <li className="nav-item" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: .5 + 'em', marginRight: 1 + 'em' }}>
                                <button
                                    className={`nav-link ${viewer === 4 ? 'active' : ''}`}
                                    onClick={() => updateHooks(4)}
                                    style={{ color: viewer === 4 ? '#3498DB' : '#34495E', border: 'none', backgroundColor: 'transparent' }}
                                    aria-current="page"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
