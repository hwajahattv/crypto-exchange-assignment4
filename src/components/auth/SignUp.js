import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SnackBar from "../shared/SnackBar";
import { styled } from "@mui/system";
import ImageInput from "./components/ImageInput";
import { validateYupSchema } from "formik";
import { object, string } from "yup";

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
                Developed by: Muhammad Wajahat Hassan
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(props) {
    const [createSuccess, setCreateSuccess] = React.useState(false);
    const [file, setFile] = React.useState([]);
    let validInput = true;

    const [snackState, setSnackState] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");

    const [inputValidate, setInputValidate] = React.useState({
        emailCheck: false,
        emailErrorText: "Please enter valid email",
        passwordLengthCheck: false,
        passwordError: "Password can not be blank",
        passwordMissmatchCheck: false,
        passwordMissmatchErrorText: "Password doesn't match",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        validateYupSchema(
            object({
                email: string().required().email(),
            })
        );
        const data = new FormData(event.currentTarget);
        const inputEmail = data.get("email");
        if (inputEmail === "") {
            setInputValidate({
                ...inputValidate,
                emailCheck: true,
            });
            validInput = false;
            setSnackMessage("Email not valid");
            setSnackType("error");
            setSnackState(true);
        } else if (data.get("full_name") === "") {
            validInput = false;
            setSnackMessage("Full name required.");
            setSnackType("error");
            setSnackState(true);
        } else {
            setInputValidate({
                ...inputValidate,
                emailCheck: false,
            });
        }
        if (data.get("password") === "") {
            setInputValidate({
                ...inputValidate,
                passwordLengthCheck: true,
            });
            validInput = false;
            setSnackMessage("Password required");
            setSnackType("error");
            setSnackState(true);
        } else if (data.get("password") !== data.get("confirm_password")) {
            setSnackMessage("Password doesn't match");
            setSnackType("error");
            setSnackState(true);
            setInputValidate({
                ...inputValidate,
                passwordMissmatchCheck: true,
            });
            validInput = false;
        }
        const userIndex = getEmailIndex(inputEmail);
        if (userIndex >= 0) {
            setInputValidate({
                ...inputValidate,
                emailCheck: true,
                emailErrorText: "Email already exists.",
            });
            validInput = false;
            setSnackMessage("Email already exists in record.");
            setSnackType("error");
            setSnackState(true);
        }
        if (validInput) {
            setInputValidate({
                ...inputValidate,
                emailCheck: false,
                passwordMissmatchCheck: false,
                passwordLengthCheck: false,
            });
            props.addUser([
                ...props.users,
                {
                    id: props.users.length + 1,
                    name: data.get("full_name"),
                    email: inputEmail,
                    password: data.get("password"),
                    address: data.get("address"),
                    retries: 0,
                    blocked: false,
                    coins: 100,
                    loggedIn: false,
                },
            ]);
            setSnackMessage("User registered successfully.");
            setSnackType("success");
            setSnackState(true);
            event.target.reset();
            setCreateSuccess(true);
        }
    };

    const getEmailIndex = (email) => {
        console.log(props.users);
        return props.users.findIndex((obj) => obj.email === email);
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 100%;
        font-size: 0.875rem;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
    );

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
                            <AssignmentIndIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Create new account
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={inputValidate.emailCheck}
                                helperText={
                                    inputValidate.emailCheck &&
                                    inputValidate.emailErrorText
                                }
                            />
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                id="full_name"
                                label="Full Name"
                                name="full_name"
                                autoComplete="full_name"
                                required
                            />
                            <StyledTextarea
                                minRows={3}
                                required
                                id="address"
                                placeholder="Home Address"
                                name="address"
                                autoComplete="address"
                                required
                            />
                            <ImageInput file={file} setFile={setFile} />
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                required
                                autoComplete="current-password"
                                error={
                                    inputValidate.passwordLengthCheck ||
                                    inputValidate.passwordMissmatchCheck
                                }
                                helperText={
                                    (inputValidate.passwordLengthCheck &&
                                        inputValidate.passwordError,
                                    inputValidate.passwordMissmatchCheck &&
                                        inputValidate.passwordMissmatchErrorText)
                                }
                            />
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                required
                                name="confirm_password"
                                label="Re-type Password"
                                type="password"
                                id="confirm_password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        {"Already have an account? Login here"}
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
        </ThemeProvider>
    );
}
