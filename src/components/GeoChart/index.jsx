import React from 'react';
import Chart from 'react-google-charts';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { selectPlaces } from 'store/ducks/place';
import { selectCities } from 'store/ducks/city';

import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'grid',
        color: theme.palette.text.secondary,
        marginTop: '50px',
    },
}));

const GeoChart = () => {
    const classes = useStyles();
    const places = useSelector(selectPlaces);
    const cities = useSelector(selectCities);

    let placesData = places.map((place) => [
        place.name,
        cities.filter((city) => place.id === city.placeId && city.name).length,
    ]);

    return (
        <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
                <Chart
                    style={{ justifySelf: 'center' }}
                    width={'80%'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[['States', 'Qt. Cities'], ...placesData]}
                    options={{
                        chart: {
                            title: 'City by number of states',
                            subtitle:
                                'Display de number of states of each city',
                        },
                    }}
                />
            </Paper>
        </Grid>
    );
};
export default GeoChart;
