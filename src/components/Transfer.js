import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SnackBar from "../components/shared/SnackBar";
import TextField from "@mui/material/TextField";
import { transfer } from "../redux/actions/coin-actions";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const defaultTheme = createTheme();
function Transfer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [snackState, setSnackState] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");

    const authUser = useSelector((state) => state.UserReducer.loggedInUser);
    const users1 = useSelector((state) => state.UserReducer);
    const users = useSelector((state) => state.UserReducer.users);
    console.log(authUser, users1);
    const [receiver, setReceiver] = React.useState("");
    const [coins, setCoins] = React.useState();
    console.log("test", authUser, users);
    const handleSubmit = () => {
        if (authUser.id) {
            debugger;
            const current_users = users;
            const receiver_index = current_users.findIndex(
                (user) => user.id === receiver
            );
            current_users[receiver_index] = {
                ...current_users[receiver_index],
                coins:
                    parseInt(current_users[receiver_index].coins) +
                    parseInt(coins),
            };

            const sender_index = current_users.findIndex(
                (user) => user.id === authUser.id
            );
            current_users[sender_index] = {
                ...current_users[sender_index],
                coins: current_users[sender_index].coins - coins,
            };

            // dispatch(transfer(current_users));
            console.log(current_users, "end of dispatch");
        } else {
            setSnackMessage("Login required");
            setSnackType("error");
            setSnackState(true);
            navigate("/login");
        }
    };
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main">
                    <CssBaseline />
                    <Grid item sm={2} md={4}></Grid>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={4}
                        component={Paper}
                        elevation={6}
                        square
                        p={3}
                    >
                        <Typography component="h1" variant="h5">
                            Transfer Coins
                        </Typography>
                        <Typography component="h3" variant="h3" mt={3}>
                            My current coins: {authUser.coins}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Receiver
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={receiver}
                                    label="Select Receiver"
                                    onChange={(e) =>
                                        setReceiver(e.target.value)
                                    }
                                    fullWidth
                                >
                                    {users.map((item) => {
                                        return (
                                            <MenuItem value={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                required
                                name="coins"
                                label="Coins"
                                type="number"
                                id="coins"
                                autoComplete="coins"
                                onChange={(e) => {
                                    setCoins(e.target.value);
                                }}
                            />

                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Transfer
                            </Button>
                        </Box>
                    </Grid>

                    {snackState ? (
                        <SnackBar
                            snackState={snackState}
                            type={snackType}
                            message={snackMessage}
                            setSnackState={setSnackState}
                        />
                    ) : null}
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default Transfer;
