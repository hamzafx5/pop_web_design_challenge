import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/logo.svg";
import { useRef } from "react";
const MenuItems = [
    {
        label: "Dashboard",
        icon: <DashboardRoundedIcon />,
    },
    {
        label: "Profile",
        icon: <ModeRoundedIcon />,
    },
    {
        label: "Utilisateurs",
        icon: <GroupRoundedIcon />,
    },
    {
        label: "Live State",
        icon: <SensorsRoundedIcon />,
    },
    {
        label: "Gestionnaires",
        icon: <ManageAccountsRoundedIcon />,
    },
    {
        label: "Commandes",
        icon: <ShoppingCartRoundedIcon />,
    },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const ActiveTab = "Profile";
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [slideWrapperWidth, setSlideWrapperWidth] = React.useState("auto");
    const isScreenSMedium = useMediaQuery((theme) =>
        theme.breakpoints.down("md")
    );
    const leftSlide = useRef(null);

    React.useEffect(() => {
        isScreenSMedium ? handleDrawerClose() : handleDrawerOpen();
    }, [isScreenSMedium]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Box>
            <Drawer
                PaperProps={{
                    style: {
                        border: "none",
                    },
                }}
                ref={leftSlide}
                variant="permanent"
                open={open}
            >
                {isScreenSMedium && (
                    <>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerToggle}>
                                {open ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                    </>
                )}
                <Box
                    sx={{
                        py: "30px",
                        "& > img": {
                            display: "block",
                            width: "60%",
                            mx: "auto",
                            visibility: open ? "visible" : "hidden",
                        },
                    }}
                >
                    <img src={logo} alt="Logo" />
                </Box>
                <List>
                    {MenuItems.map(({ label, icon }) => (
                        <ListItem
                            key={label}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    "& > *": {
                                        color: "#CCB7B7",
                                    },
                                    "&:hover > *": {
                                        color: "#4E3131 ",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                        "& svg": {
                                            color:
                                                ActiveTab === label
                                                    ? "#4E3131"
                                                    : "#CCB7B7",
                                        },
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color:
                                            ActiveTab === label
                                                ? "#4E3131"
                                                : "auto",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
