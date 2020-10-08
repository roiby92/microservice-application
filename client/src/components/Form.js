import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields() {

    const [user,setUser] = useState({name:'',password:''})


    
    const classes = useStyles();
    return (
        <Grid container xs={8} direction="column"  justify="space-between"
        alignItems="center">
            <Grid item xs={8}>
                <TextField id="standard-basic" label="Standard" />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </Grid>
            <Grid item xs={8}>
                <Divider/>
                <Button variant="contained" color="primary">
                    Primary
            </Button>
            </Grid>
        </Grid>
    );
}