import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SnackBar from "./components/shared/SnackBar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import { Provider } from "react-redux";
import store from "./redux/store";
import Transfer from "./components/Transfer";

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            email: "test@gmail.com",
            name: "Test",
            password: "1234",
            address: "akjndk",
            retries: 0,
            blocked: false,
        },
        {
            id: 2,
            email: "test1@gmail.com",
            name: "Test1",
            password: "1234",
            address: "akjndk",
            retries: 0,
            blocked: false,
        },
    ]);
    const [loggedInUser, setLoggedInUser] = useState();
    const [snackState, setSnackState] = useState(false);
    const [snackType, setSnackType] = useState("");
    const [snackMessage, setSnackMessage] = useState("");
    const getEmailIndex = (email) => {
        return users.findIndex((obj) => obj.email === email);
    };
    const failedLogin = (email) => {
        const index = getEmailIndex(email);
        let current_retries = users[index].retries;
        current_retries = current_retries + 1;
        let current_users = users;
        current_users[index].retries = current_users[index].retries + 1;
        setUsers(current_users);
        if (current_users[index].retries === 3) {
            current_users[index].blocked = true;
            setUsers(current_users);
        }
    };

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Layout
                        loggedInUser={loggedInUser}
                        loginStatusHandler={setLoggedInUser}
                    />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home loggedIn={loggedInUser} />}
                        />
                        <Route
                            path="/home"
                            element={<Home loggedIn={loggedInUser} />}
                        />
                        <Route
                            path="/login"
                            element={
                                <Login
                                    loginStatusHandler={setLoggedInUser}
                                    users={users}
                                    setSnackState={setSnackState}
                                    setSnackType={setSnackType}
                                    setSnackMessage={setSnackMessage}
                                    failedLogin={failedLogin}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <SignUp users={users} addUser={setUsers} />
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/transfer" element={<Transfer />} />
                        <Route
                            path="*"
                            element={<Home loggedIn={loggedInUser} />}
                        />
                    </Routes>
                    {snackState ? (
                        <SnackBar
                            snackState={snackState}
                            type={snackType}
                            message={snackMessage}
                            setSnackState={setSnackState}
                        />
                    ) : null}
                </Router>
            </div>
        </Provider>
    );
}

export default App;
