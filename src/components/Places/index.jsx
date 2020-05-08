import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import {
    selectPlaces,
    changePlace,
    selectSelectedPlace,
} from 'store/ducks/place';

import LocationList from '../LocationList/index';
import LocationForm from '../LocationForm/index';

const Places = () => {

    const places = useSelector(selectPlaces);
    const selectedPlace = useSelector(selectSelectedPlace);
    const dispatch = useDispatch();

    const handleChangePlace = useCallback(
        (id, name) => dispatch(changePlace(id, name)),
        [dispatch]
    );

    return (
        <Grid item xs={6}>
            <LocationForm formType={'Place'}/>
            {places && <LocationList
                formType={'Place'}
                locations={places}
                changeLocale={handleChangePlace}
                selected={selectedPlace.id}
            />}
        </Grid>
    );
};

export default Places;
