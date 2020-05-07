import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Places from '../Places/index';
import Cities from '../Cities/index';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const CitiesAndPlacesContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Places />
                <Cities />
            </Grid>
        </div>
    );
};

export default CitiesAndPlacesContainer;
