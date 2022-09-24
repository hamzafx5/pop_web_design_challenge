import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { red, green } from "@mui/material/colors";
import Box from "@mui/material/Box";

function randInt(limit = 10000) {
    return Math.floor(Math.random() * limit);
}

const rows = [];

function createData(profile, responsableMAJ) {
    return {
        id: rows.length + 1,
        profile,
        createdAt: "18/01/2022",
        utilisateursNumber: randInt(200),
        dateMAJ: "26/04/2022",
        responsableMAJ,
        statut: rows.length % 2 ? "active" : "Inactive",
    };
}

rows.push(createData("Popcard", "Super Admin/Otaman"));
rows.push(createData("Popcard", "Admin/Ayman"));
rows.push(createData("Popcard", "Editor/John"));
rows.push(createData("Popcard", "Super Admin/Otaman"));
rows.push(createData("Popcard", "Admin/Ayman"));
rows.push(createData("Popcard", "Editor/John"));
rows.push(createData("Popcard", "Super Admin/Otaman"));
rows.push(createData("Popcard", "Admin/Ayman"));
rows.push(createData("Popcard", "Editor/John"));
rows.push(createData("Popcard", "Super Admin/Otaman"));
rows.push(createData("Popcard", "Admin/Ayman"));
rows.push(createData("Popcard", "Editor/John"));

export default function ProfileTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dense, setDense] = React.useState(false);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box>
            <TableContainer>
                <Table
                    size={dense ? "small" : "medium"}
                    sx={{ minWidth: 700 }}
                    aria-label="Table"
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                "& th": {
                                    fontWeight: "700",
                                    borderBottom: "1px dashed #CCB7B7",
                                    color: "#4E3131",
                                },
                            }}
                        >
                            <TableCell align="center">Profil</TableCell>
                            <TableCell align="center">
                                Date de création
                            </TableCell>
                            <TableCell align="center">
                                Nombre Utilisateurs
                            </TableCell>
                            <TableCell align="center">Date de MAJ</TableCell>
                            <TableCell align="center">
                                Responsable MAJ
                            </TableCell>
                            <TableCell align="center">Statut</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "& tr, & td": {
                                            fontWeight: "700",
                                            borderBottom: "1px dashed #CCB7B7",
                                        },
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell align="center">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "4px",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <svg
                                                width="17px"
                                                height="17px"
                                                viewBox="0 0 21 21"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Group-6">
                                                    <path
                                                        d="M10.7916 6.31482C11.6019 7.00502 12.0492 7.92827 12.0492 8.90531C12.0492 9.88235 11.6019 10.8011 10.7916 11.4958C10.5864 11.6706 10.3181 11.7602 10.0497 11.7602C9.78137 11.7602 9.51302 11.6706 9.30781 11.4958C8.8974 11.1462 8.8974 10.577 9.30781 10.2275C9.72349 9.87339 9.94974 9.40728 9.94974 8.90531C9.94974 8.40335 9.72349 7.93724 9.30781 7.58317C8.8974 7.23359 8.8974 6.6644 9.30781 6.31482C9.71823 5.96524 10.3812 5.96524 10.7916 6.31482ZM13.8857 14.2132C13.6754 14.3854 13.4003 14.4737 13.1252 14.4737C12.8501 14.4737 12.5751 14.3854 12.3647 14.2132C11.944 13.8689 11.944 13.3083 12.3647 12.9639C14.9699 10.8318 14.9699 7.35758 12.3647 5.22099C11.944 4.87666 11.944 4.31602 12.3647 3.9717C12.7854 3.62737 13.4704 3.62737 13.8911 3.9717C17.3377 6.79695 17.3377 11.388 13.8857 14.2132ZM17.1972 1.26386C22.2676 5.53009 22.2676 12.476 17.1972 16.7422C16.9912 16.9111 16.7218 17 16.4471 17C16.1725 17 15.9084 16.9111 15.7024 16.7378C15.2904 16.3912 15.2904 15.8268 15.7024 15.4802C19.9489 11.9072 19.9489 6.09003 15.7024 2.51707C15.2904 2.17044 15.2904 1.60605 15.7024 1.25942C16.1144 0.91279 16.7852 0.91279 17.1972 1.26386Z"
                                                        id="Shape"
                                                        fill="#000000"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M10.9315 2.70174e-05C7.76106 0.00609489 5.15143 1.03422 3.10256 3.0452C1.06124 5.04878 0.0139347 7.52067 0.000138119 10.4609C4.6043e-05 10.441 0 10.4211 0 10.4011L0 10.5198C0 10.5001 4.60436e-05 10.4805 0.000138119 10.4609C0.0139346 13.4403 1.06124 15.9512 3.10256 17.9548C5.15143 19.9658 7.76106 20.9939 10.9315 21L10.9315 16.5308C9.23016 16.5164 7.84223 15.9623 6.72894 14.8305Q5.03663 13.1102 5.03663 10.5593Q5.03663 8.00848 6.72894 6.28814C7.84223 5.15641 9.23016 4.60232 10.9315 4.58787L10.9315 2.70174e-05Z"
                                                        id="Combined-Shape"
                                                        fill="#000000"
                                                        fillRule="evenodd"
                                                        stroke="none"
                                                    />
                                                </g>
                                            </svg>
                                            {row.profile}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.createdAt}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.utilisateursNumber}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.dateMAJ}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.responsableMAJ}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box
                                            sx={{
                                                background:
                                                    row.statut === "active"
                                                        ? green[500]
                                                        : red[500],
                                                color: "white",
                                                borderRadius: "16px",
                                                p: "1px 8px",
                                                fontWeight: "normal",
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {" "}
                                            {row.statut}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (dense ? 33 : 53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel
                    control={
                        <Switch checked={dense} onChange={handleChangeDense} />
                    }
                    label="Dense"
                />
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Box>
    );
}
