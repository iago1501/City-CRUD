import React from 'react';
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

    return (
        <Paper component="form" className={classes.root}>
            <LocationTextField
                placeholder={formType === 'Place' ? 'Type the state...' : 'Type the city...' }
                formType={formType}
            />
            <LocationFormActions formType={formType}/>
        </Paper>
    );
};

export default LocationForm;
