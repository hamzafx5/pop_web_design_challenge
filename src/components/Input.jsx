import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const OutlinedInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: "17px",
        position: "relative",
        backgroundColor: "inherit",
        border: "1px solid #CCB7B7",
        fontSize: 16,
        width: "auto",
        padding: "10px 12px",
        paddingLeft: "45px",
        "&:focus": {
            borderColor: "#4E3131",
        },
    },
}));

export default function Input({ ...props }) {
    return (
        <Box
            sx={{
                position: "relative",
            }}
        >
            <SearchIcon
                sx={{
                    display: "inline-block",
                    position: "absolute",
                    zIndex: "2",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    userSelect: "none",
                    cursor: "pointer",
                }}
            />
            <OutlinedInput id="bootstrap-input" {...props} />
        </Box>
    );
}
