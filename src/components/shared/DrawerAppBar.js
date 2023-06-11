import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FiberPinRounded } from "@mui/icons-material";

const drawerWidth = 240;

export default function DrawerAppBar(props) {
    const navItems = [
        { name: "home", link: "home" },
        { name: "about us", link: "about" },
        { name: "contact-us", link: "contact" },
        { name: "Blog", link: "blog" },
    ];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const logout = () => {
        alert("test");
        props.loginStatusHandler(false);
        navigate("/login");
    };
    const navigate = useNavigate();
    const loginRouteHandler = () => {
        navigate("/login");
    };
    const registerRouteHandler = () => {
        navigate("/signup");
    };
    const logoutRouteHandler = () => {
        props.loginStatusHandler(false);
        navigate("/login");
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Link to={item.link}>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                {props.loggedInUser ? (
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={"Logout"} />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={loginRouteHandler}
                                sx={{ textAlign: "center" }}
                            >
                                <ListItemText primary={"Login"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={registerRouteHandler}
                                sx={{ textAlign: "center" }}
                            >
                                <ListItemText primary={"Register"} />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={logoutRouteHandler}
                        sx={{ textAlign: "center" }}
                    >
                        <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Crypto-Exchange
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.link}>
                                <Button sx={{ color: "#fff" }}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                        {props.loggedInUser ? (
                            <Button
                                sx={{ color: "#fff" }}
                                onClick={logoutRouteHandler}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={loginRouteHandler}
                                >
                                    Login
                                </Button>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={registerRouteHandler}
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {false && (
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique unde fugit veniam eius, perspiciatis sunt?
                        Corporis qui ducimus quibusdam, aliquam dolore excepturi
                        quae. Distinctio enim at eligendi perferendis in cum
                        quibusdam sed quae, accusantium et aperiam? Quod itaque
                        exercitationem, at ab sequi qui modi delectus quia
                        corrupti alias distinctio nostrum. Minima ex dolor modi
                        inventore sapiente necessitatibus aliquam fuga et. Sed
                        numquam quibusdam at officia sapiente porro maxime
                        corrupti perspiciatis asperiores, exercitationem eius
                        nostrum consequuntur iure aliquam itaque, assumenda et!
                        Quibusdam temporibus beatae doloremque voluptatum
                        doloribus soluta accusamus porro reprehenderit eos
                        inventore facere, fugit, molestiae ab officiis illo
                        voluptates recusandae. Vel dolor nobis eius, ratione
                        atque soluta, aliquam fugit qui iste architecto
                        perspiciatis. Nobis, voluptatem! Cumque, eligendi unde
                        aliquid minus quis sit debitis obcaecati error, delectus
                        quo eius exercitationem tempore. Delectus sapiente,
                        provident corporis dolorum quibusdam aut beatae
                        repellendus est labore quisquam praesentium repudiandae
                        non vel laboriosam quo ab perferendis velit ipsa
                        deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil
                        corrupti cum non fugiat praesentium doloremque
                        architecto laborum aliquid. Quae, maxime recusandae?
                        Eveniet dolore molestiae dicta blanditiis est expedita
                        eius debitis cupiditate porro sed aspernatur quidem,
                        repellat nihil quasi praesentium quia eos, quibusdam
                        provident. Incidunt tempore vel placeat voluptate iure
                        labore, repellendus beatae quia unde est aliquid dolor
                        molestias libero. Reiciendis similique exercitationem
                        consequatur, nobis placeat illo laudantium! Enim
                        perferendis nulla soluta magni error, provident repellat
                        similique cupiditate ipsam, et tempore cumque quod! Qui,
                        iure suscipit tempora unde rerum autem saepe nisi vel
                        cupiditate iusto. Illum, corrupti? Fugiat quidem
                        accusantium nulla. Aliquid inventore commodi
                        reprehenderit rerum reiciendis! Quidem alias repudiandae
                        eaque eveniet cumque nihil aliquam in expedita, impedit
                        quas ipsum nesciunt ipsa ullam consequuntur dignissimos
                        numquam at nisi porro a, quaerat rem repellendus.
                        Voluptates perspiciatis, in pariatur impedit, nam
                        facilis libero dolorem dolores sunt inventore
                        perferendis, aut sapiente modi nesciunt.
                    </Typography>
                )}
            </Box>
        </Box>
    );
}