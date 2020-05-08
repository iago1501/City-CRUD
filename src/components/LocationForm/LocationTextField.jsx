import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: "0 30px"
    },
}));

const LocationTextField = ({formType, handleChange}) => {
    const classes = useStyles();
    return (
        <InputBase
            name={formType}
            className={classes.input}
            placeholder={"Search"}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'search' }}
        />
    );
};

export default LocationTextField;
