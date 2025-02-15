import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer({ viewer, setViewer }) {
    
    const styles = {
        sectionStyle: {
            borderTop: "3px solid #3498DB"
        }
    };

    return (
        <div style={styles.sectionStyle}>
            <footer style={{ backgroundColor: '#FAFAFA', color: '#34495E' }} className="py-5">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0, paddingBottom: 0 }}>

                        <div style={{ display: 'flex', alignItems: 'center', padding: '0px' }}>
                            <p style={{ marginRight: '20px' }}>Ames, IA 50011</p>
                            <p>Phone: 515-865-8709</p>
                        </div>

                        <div style={{ padding: '16px', textAlign: 'right' }}>
                            <p className="mb-1">
                                {/* Back to top link */}
                                <a 
                                    href="#" 
                                    style={{ color: '#3498DB', textDecoration: 'none', marginLeft: '2em' }} 
                                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                >
                                    Back to top
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Copyright notice */}
                    <div style={{ textAlign: 'center', marginTop: '0px' }}>
                        <p style={{ color: '#34495E' }}>© 2025 Chris Moseley. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
