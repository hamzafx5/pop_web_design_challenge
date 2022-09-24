import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/system/Container";
import SideBar from "../components/SideBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import SupportIcon from "@mui/icons-material/Support";
import EditIcon from "@mui/icons-material/Edit";
import clientImg from "../assets/user.png";
import Divider from "@mui/material/Divider";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ProfileTabs from "../components/ProfileTabs";

export default function Profile() {
    const theme = useTheme();
    const isScreenMediumUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#FFFAF5",
            }}
        >
            <SideBar />
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    pl: isScreenMediumUp ? "240px" : "65px",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            py: isScreenMediumUp ? "105px" : "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <Typography
                                variant="h4"
                                components="h1"
                                typography={{
                                    fontWeight: "bold",
                                    fontSize: isScreenMediumUp
                                        ? "46px"
                                        : "32px",
                                }}
                                sx={{ mb: 1 }}
                            >
                                Bonjour Aymane!
                            </Typography>
                            <Typography
                                components="body1"
                                typography={{
                                    fontFamily: "Public Sans",
                                    fontSize: "20px",
                                }}
                            >
                                Nous sommes le Samedi 3 septembre 2022
                            </Typography>
                        </div>

                        <Box
                            sx={{
                                backgroundColor: "white",
                                width: "200px",
                                height: "70px",
                                borderRadius: "40px",
                                p: "10px",
                                boxShadow:
                                    "0 2px 10px -2px hsla(0, 31%, 27%, 19%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                color="#4E3131"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontSize: "18px",
                                }}
                            >
                                <SupportIcon /> Aide
                            </Typography>

                            <img
                                style={{
                                    height: "100%",
                                }}
                                src={clientImg}
                                alt="Client Image"
                            />
                        </Box>
                    </Box>
                    <Typography
                        variant="h5"
                        component="h2"
                        color="#4E3131"
                        typography={{
                            fontWeight: "bold",
                        }}
                        sx={{
                            display: "flex",
                            alignContent: "center",
                            gap: "10px",
                            mb: 1,
                            lineHeight: "1.1em",
                        }}
                    >
                        <EditIcon /> <span>Profile</span>
                    </Typography>
                    <Divider />
                    <Box
                        sx={{
                            mt: isScreenMediumUp ? "70px" : "40px",
                            mb: "30px",
                            display: "flex",
                            gap: "28px",
                            overflowX: "auto",
                            p: 1,
                        }}
                    >
                        <ProfileWidget
                            icon={<EditIcon />}
                            title="Profils créés"
                            number={10}
                        />
                        <ProfileWidget
                            icon={<ClearRoundedIcon />}
                            title="Profils supprimés"
                            number={2}
                        />
                    </Box>
                    <ProfileTabs></ProfileTabs>
                    <Box sx={{ pb: 16 }} />
                </Container>
            </Box>
        </Box>
    );
}

function ProfileWidget({ icon, title, number }) {
    return (
        <Box
            sx={{
                p: "20px",
                display: "flex",
                flexShrink: 0,
                gap: "20px",
                background: "white",
                boxShadow: "0 2px 10px -2px hsla(0, 31%, 27%, 19%)",
                borderRadius: "28px",
            }}
        >
            <Box
                sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#4E3131",
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                {icon}
            </Box>
            <Box>
                <Typography fontFamily="Public Sans">{title}</Typography>
                <Typography fontWeight="bold" fontSize="32px">
                    {number}
                </Typography>
            </Box>
        </Box>
    );
}
