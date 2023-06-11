import React from "react";
import DrawerAppBar from "./shared/DrawerAppBar";

function Layout(props) {
    return (
        <div>
            <DrawerAppBar
                loggedInUser={props.loggedInUser}
                loginStatusHandler={props.loginStatusHandler}
            />
        </div>
    );
}

export default Layout;
