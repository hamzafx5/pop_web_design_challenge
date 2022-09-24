import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProfileTable from "./ProfileTable";
import Input from "../components/Input";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: "100%",
                background: "white",
                boxShadow: "0 2px 10px -2px hsla(0, 31%, 27%, 19%)",
                borderRadius: "28px",
                overflow: "hidden",
            }}
        >
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{
                        background: "#FFEDDA",
                        px: 3,
                    }}
                >
                    <Tab
                        sx={{ textTransform: "capitalize" }}
                        label="Tout"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{ textTransform: "capitalize" }}
                        label="Actifs"
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{ textTransform: "capitalize" }}
                        label="Supprimés"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} component="div">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        flexShrink: "0",
                        gap: "24px",
                        mb: "50px",
                    }}
                >
                    <Input placeholder="Chercher un profil" />
                    <Button
                        sx={{
                            background: "black",
                            color: "white",
                            borderRadius: "14px",
                            textTransform: "capitalize",
                            px: "26px",
                            py: "10px",
                            "&:hover": {
                                background: "rgba(0,0,0,0.8)",
                            },
                        }}
                    >
                        Créer un profil
                    </Button>
                </Box>
                <ProfileTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h6" component="h5">
                    Actifs
                </Typography>
                <Typography
                    variant="body1"
                    color="GrayText"
                    sx={{ maxWidth: "60ch" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat aliquam sequi inventore fuga fugiat dolorum, numquam
                    molestias laboriosam voluptas dolores perferendis
                    exercitationem debitis aut! Consectetur totam nobis ipsa
                    deleniti unde.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="h6" component="h5">
                    Supprimes
                </Typography>
                <Typography
                    variant="body1"
                    color="GrayText"
                    sx={{ maxWidth: "60ch" }}
                >
                    The dolor sit amet consectetur adipisicing elit. Quaerat
                    aliquam sequi inventore fuga fugiat dolorum, numquam
                    molestias laboriosam voluptas dolores perferendis
                    exercitationem debitis aut! Consectetur totam nobis ipsa
                    deleniti unde. molestias laboriosam voluptas dolores
                    perferendis exercitationem debitis aut! Consectetur totam
                    nobis ipsa deleniti unde.
                </Typography>
            </TabPanel>
        </Box>
    );
}
