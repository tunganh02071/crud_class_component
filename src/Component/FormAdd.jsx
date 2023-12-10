import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormControl, Input, InputLabel} from "@mui/material";
import PropTypes from "prop-types";
import {rows} from "../Utils/Data.js";
import { v4 as uuidv4 } from 'uuid';


class FormAdd extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = ({
            foodValue: this.props.getDataEdit.foodValue,
            caloriesValue: this.props.getDataEdit.caloriesValue,
            fatValue: this.props.getDataEdit.fatValue,
            carbsValue: this.props.getDataEdit.carbsValue,
            proteinValue: this.props.getDataEdit.proteinValue
        })
    }

    hanldleChangeFood = (even) => {
        this.setState({
            foodValue: even.target.value
        })
    }
    hanldleChangeCalories = (even) => {
        this.setState({
            caloriesValue: even.target.value
        })
    }
    hanldleChangeFat = (even) => {
        this.setState({
            fatValue: even.target.value
        })
    }
    hanldleChangeCarbs = (even) => {
        this.setState({
            carbsValue: even.target.value
        })
    }
    hanldleChangeProtein = (even) => {
        this.setState({
            proteinValue: even.target.value
        })
    }

    handleSubmit = () => {
        const getValueForm = this.state;
        const getRowEdit = this.props.getDataEdit;
        const listData = this.props.dataTable;
        if(this.props.isEdit) {
            const indexUpdate = listData.indexOf(getRowEdit)
            if(indexUpdate !== -1) {
                listData[indexUpdate] = {...this.state}
            }
            console.log(this.state)
        } else {
            console.log("11111")
            const id = uuidv4();
            const addValueTable = {...getValueForm, id};
            console.log(addValueTable)
            rows.push(addValueTable)
        }
        this.props.handleClose();
    }

    render() {
        return (
            <React.Fragment>
                <Dialog
                    open={this.props.openDialog}
                    maxWidth={"xl"}
                >
                    <DialogTitle>
                        {this.props.isEdit ? "Edit food" :"Add food"}
                    </DialogTitle>
                    <DialogContent sx={{width: '550px'}}>
                        <FormControl sx={{height: '50px', marginTop: '20px'}} fullWidth>
                            <InputLabel htmlFor="my-input">Name food</InputLabel>
                            <Input defaultValue={this.props.isEdit ? this.props.getDataEdit.foodValue : ''} onChange={this.hanldleChangeFood} fullWidth id="my-input"/>
                        </FormControl>
                        <FormControl sx={{height: '50px', marginTop: '20px'}} fullWidth>
                            <InputLabel htmlFor="my-input">Calories</InputLabel>
                            <Input defaultValue={this.props.isEdit ? this.props.getDataEdit.caloriesValue : ''} onChange={this.hanldleChangeCalories} fullWidth id="my-input"/>
                        </FormControl>
                        <FormControl sx={{height: '50px', marginTop: '20px'}} fullWidth>
                            <InputLabel htmlFor="my-input">Fat</InputLabel>
                            <Input defaultValue={this.props.isEdit ? this.props.getDataEdit.fatValue : ''} onChange={this.hanldleChangeFat} fullWidth id="my-input"/>
                        </FormControl>
                        <FormControl sx={{height: '50px', marginTop: '20px'}} fullWidth>
                            <InputLabel htmlFor="my-input">Carbs</InputLabel>
                            <Input defaultValue={this.props.isEdit ? this.props.getDataEdit.carbsValue : ''} onChange={this.hanldleChangeCarbs} fullWidth id="my-input"/>
                        </FormControl>
                        <FormControl sx={{height: '50px', marginTop: '20px'}} fullWidth>
                            <InputLabel htmlFor="my-input">Protein</InputLabel>
                            <Input defaultValue={this.props.isEdit ? this.props.getDataEdit.proteinValue : ''} onChange={this.hanldleChangeProtein} fullWidth id="my-input"/>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose}>Disagree</Button>
                        <Button onClick={this.handleSubmit} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

FormAdd.propTypes = {
    openDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    getDataEdit: PropTypes.object.isRequired,
    dataTable: PropTypes.array.isRequired,
};

export default FormAdd