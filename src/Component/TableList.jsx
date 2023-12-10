import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {rows} from "../Utils/Data.js";
import AddIcon from '@mui/icons-material/Add';
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormAdd from "./FormAdd.jsx";

class TableList extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {dataTable: rows, openDialog: false, isEdit: false, getDataEdit: {}};
    }

    handleClose = () => {
        this.setState({
            openDialog: false,
            isEdit: false
        })
    }

    handleDelete = (id) => {
        const listData = this.state.dataTable;
        const dataTableDelete = listData.filter((dataTableNew) => dataTableNew.id !== id);
        this.setState({
            dataTable: dataTableDelete
        })
    }

    handleUpdateItem = (row) => {
        this.setState({
            isEdit: true,
            openDialog: true,
            getDataEdit: row
        })
    }

    render() {
        return (<React.Fragment>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">TT</TableCell>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Action
                                <IconButton onClick={() => this.setState({
                                    openDialog: true
                                })}>
                                    <AddIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.dataTable.map((row, index) => (<TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{index + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.foodValue}
                            </TableCell>
                            <TableCell align="right">{row.caloriesValue}</TableCell>
                            <TableCell align="right">{row.fatValue}</TableCell>
                            <TableCell align="right">{row.carbsValue}</TableCell>
                            <TableCell align="right">{row.proteinValue}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => this.handleUpdateItem(row)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={() => this.handleDelete(row.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
            <FormAdd openDialog={this.state.openDialog}
                     handleClose={this.handleClose}
                     isEdit={this.state.isEdit}
                     getDataEdit={this.state.getDataEdit}
                     dataTable={this.state.dataTable}
            />
        </React.Fragment>)
    }
}

export default TableList