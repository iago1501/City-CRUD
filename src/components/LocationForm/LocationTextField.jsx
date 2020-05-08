import React from 'react';
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import {changePlace, changeCity} from 'store/ducks/form';

const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: "0 30px"
    },
}));

const LocationTextField = ({formType, placeholder}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        formType === 'Place'
        ? dispatch(changePlace(e.target.value))
        : dispatch(changeCity(e.target.value));
    };


    return (
        <InputBase
            type="search"
            name={formType}
            className={classes.input}
            placeholder={placeholder}
            onChange={(e) => handleChangeText(e)}
            inputProps={{ 'aria-label': 'search' }}
        />
    );
};

export default LocationTextField;
