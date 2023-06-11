import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SnackBar from "../shared/SnackBar";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/coin-actions";
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login(props) {
    const [snackState, setSnackState] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userIndex = getEmailIndex(data.get("email"));
        if (data.get("email") === "") {
            alert("Email not valid");
            setSnackMessage("Email not valid");
            setSnackType("error");
            setSnackState(true);
        } else if (userIndex == -1) {
            alert("Email not registered.");
            setSnackMessage("Email not registered");
            setSnackType("error");
            setSnackState(true);
        } else if (props.users[userIndex].blocked === true) {
            alert("User blocked!");
            setSnackMessage("User blocked!");
            setSnackType("error");
            setSnackState(true);
        } else if (props.users[userIndex].password === data.get("password")) {
            props.loginStatusHandler({
                email: data.get("email"),
            });
            props.setSnackState(true);
            props.setSnackType("success");
            props.setSnackMessage("Login successfull.");
            dispatch(login(props.users[userIndex]));
            redirectLogin();
        } else {
            alert("Wrong Credentials!");
            setSnackMessage("Wrong Credentials!");
            setSnackType("error");
            setSnackState(true);
            props.failedLogin(data.get("email"));
        }
    };
    const getEmailIndex = (email) => {
        console.log(props.users);
        return props.users.findIndex((obj) => obj.email === email);
    };

    let navigate = useNavigate();
    const redirectLogin = () => {
        navigate("/");
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={8}
                    sx={{
                        backgroundImage: "url(login.jpeg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={4}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {snackState ? (
                <SnackBar
                    snackState={snackState}
                    type={snackType}
                    message={snackMessage}
                    setSnackState={setSnackState}
                />
            ) : null}
            <Button
                onClick={() => {
                    console.log(
                        snackState,
                        snackType,
                        snackMessage,
                        props.users
                    );
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Click
            </Button>
        </ThemeProvider>
    );
}
