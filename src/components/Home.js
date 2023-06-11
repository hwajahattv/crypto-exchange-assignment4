import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CoinTable from "./shared/CoinTable";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Home(props) {
    let navigate = useNavigate();
    useEffect(() => {
        // console.log(props.loggedIn)/;
        if (!props.loggedIn) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Home Page
            </Typography>
            <Grid container>
                <Grid item md={2}></Grid>
                <Grid item sx={12} sm={12} md={8}>
                    <CoinTable />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
