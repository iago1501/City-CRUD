import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import { IconButton, Divider } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { cityMaxId, addCity } from 'store/ducks/city';
import { placeMaxId, addPlace, selectSelectedPlace } from 'store/ducks/place';
import { selectSearchedPlace, selectSearchedCity } from 'store/ducks/form';

const useStyles = makeStyles(() => ({
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const LocationFormActions = ({ formType }) => {
    const classes = useStyles();
    const nextIdCity = parseInt(useSelector(cityMaxId)) + 1;
    const nextIdPlace = parseInt(useSelector(placeMaxId)) + 1;
    const selectedPlaceId = useSelector(selectSelectedPlace).id;
    const searchedPlace = useSelector(selectSearchedPlace);
    const searchedCity = useSelector(selectSearchedCity);

    const dispatch = useDispatch();

    const AddDispatchFunction = () =>
        formType === 'Place'
            ? addPlace(nextIdPlace, searchedPlace)
            : addCity(nextIdCity, selectedPlaceId, searchedCity);

    return (
        <>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
                onClick={() => dispatch(AddDispatchFunction())}
            >
                <AddCircleIcon />
            </IconButton>
        </>
    );
};

export default LocationFormActions;
