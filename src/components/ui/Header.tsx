import React, { ReactComponentElement } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Outlet, Link } from "react-router-dom";




function ElevationScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = (props: any) => {
    return (
        <div>
            <ElevationScroll>
                <AppBar style={{background: 'var(--green)'}} position="fixed">
                    {/* Toolbar helps with horizontal layout */}
                    <Toolbar> 
                        CREATIVE CRUX
                            
                        <Link to="/">Invoices</Link> |{" "}
                        <Link to="/ztest">Expenses</Link>
                        <Link to="/ztest2">Expenses</Link>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Outlet />
        </div>
    );
};

export default Header;

