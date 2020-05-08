import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import LocationTextField from './LocationTextField';
import LocationFormActions from './LocationFormActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
    },
}));

const LocationForm = ({ formType }) => {
    const classes = useStyles();
    const [typedPlace, setTypedPlace] = useState(0);

    const handleChangeText = (e) => {
        setTypedPlace(e.target.value);
    };

    return (
        <Paper component="form" className={classes.root}>
            <LocationTextField
                handleChange={handleChangeText}
                name={formType}
            />
            <LocationFormActions formType={formType} inputValue={typedPlace} />
        </Paper>
    );
};

export default LocationForm;
